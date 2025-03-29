//rafce
import React from 'react'
import Hippo from './Hippo.jsx'
import EstacaoClimatica from './EstacaoClimatica.jsx'

const estacoes = {
  VERAO: {
    icone: "sun",
    nome: "Verão"
  },

  INVERNO: {
    icone: "snowman",
    nome: "Inverno"
  },

  OUTONO: {
    icone: "leaf",
    nome: "Outono"
  },

  PRIMAVERA: {
    icone: "fan",
    nome: "Primavera"
  }


}

class App extends React.Component {
  
  state = {
      latitude: null,
      longitude: null,
      estacao: null,
      data: null,
      icone: null,
      mensagemDeErro:null
  }

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     latitude: null,
  //     longitude: null,
  //     estacao: null,
  //     data: null,
  //     icone: null,
  //     mensagemDeErro:null
  //   }
  //   console.log('consrtructor')
  // }

  componentDidMount(){
    console.log('componenteDidMount')
    this.obterLocalizacao()
  }

  componentDidUpdate(){
    console.log('componenteDidUpdate')
  }

  componentWillUnmount(){
    console.log('componenteWillUnmount')
  }



  obterEstacao = (data, latitude) => {
    //21/06/1997
    const anoAtual = data.getFullYear()
    const d1 = new Date(anoAtual, 5, 21)
    const d2 = new Date(anoAtual, 8, 24)
    const d3 = new Date(anoAtual, 11, 22)
    const d4 = new Date(anoAtual, 2, 21)

    const estouNoSul = latitude < 0
    if (data >= d1 && data < d2) {
      return estouNoSul ? estacoes.INVERNO : estacoes.VERAO
    } if (data >= d2 && data < d3) {
      return estouNoSul ? estacoes.PRIMAVERA : estacoes.OUTONO
    } if (data >= d3 || data < d4) {
      return estouNoSul ? estacoes.VERAO : estacoes.INVERNO
    }
    return estouNoSul ? estacoes.OUTONO : estacoes.PRIMAVERA
  }

  obterLocalizacao = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        //1. extrair a data atual do sistema

        //2.obter a estacao climatica do usuario suando sua latitude e data atual

        //4. atualizar o estado, causando a atualização da tela
        //dica: use a função setState para atualizar o estado
        const crd = position.coords

        const dataAtual = new Date()
        const estacao = this.obterEstacao(dataAtual, crd.latitude)
        const formatter = new Intl.DateTimeFormat('pt-BR', { dateStyle: 'short' })


        this.setState(
          {
            latitude: crd.latitude,
            longitude: crd.longitude,
            data: formatter.format(dataAtual),
            estacao: estacao.nome,
            icone: estacao.icone
          }
        )

      },
      (err) => {
        this.setState({
          mensagemDeErro: 'Tente novamente mais tarde'
        })
      }
    )
  }



  render() {
    console.log('render')
    return (
      <div className="container mt-2 text-center">
          <div className="row justify-content-center">
          <Hippo />
            <div className="col-sm-12 col-lg-6 col-xxl-4">
              <EstacaoClimatica 
              latitude = {this.state.latitude}
              longitude = {this.state.longitude}
              data = {this.state.data}
              estacao = {this.state.estacao}
              icone = {this.state.icone}
              mensagemDeErro={this.state.mensagemDeErro}
              obterLocalizacao={this.obterLocalizacao}
              />

            </div>
          </div>
      </div>


    )
  }
}

export default App
