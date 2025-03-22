//rafce
import React from 'react'

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

  constructor(props) {
    super(props)
    this.state = {
      latitude: null,
      longitude: null,
      estacao: null,
      data: null,
      icone: null,
      mensagemDeErro:null
    }
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
    return (
      <div className="container mt-2 text-center">
          <div className="row justify-content-center">
            <div className="col-sm-12 col-lg-6 col-xxl-4">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center border rounded mb-2">
                    <i className={`fa-${this.state.icone} fas fa-5x`}></i>
                    <h1>{this.state.estacao}</h1>
                    <div></div>
                  </div >
                  <div>
                    <p className="text-center">
                    {
                    this.state.latitude ? 
                    `Coordernadas: ${this.state.latitude}, ${this.state.longitude} Data: ${this.state.data}`
                    :
                    this.setState.mensagemDeErro ?
                      `${this.state.mensagemDeErro}`
                      :
                      "Clique para saber sua localização"
                    }
                    </p>
                  </div>
                </div>
                <div className="card-footer">
                  <div className="d-flex justify-content-center align-items-center">
                    <button
                      className='btn btn-primary w-100 mt-3'
                      type="button"
                      onClick={this.obterLocalizacao}>
                      Qual a minha localização?
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>


    )
  }
}

export default App
