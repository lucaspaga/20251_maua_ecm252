import React, { Component } from 'react'

export default class EstacaoClimatica extends Component {

    timer = null

    state = {
        data: null
    }

    componentDidMount(){
        this.timer = setInterval(() => {
            this.setState({
                data : new Date().toLocaleTimeString()
            })
        }, 1000)
        console.log(this.timer)
    }

    componentWillUnmount(){
        clearInterval(this.timer)
    }

  render() {
    console.log('render')
    return (
        <div className="card">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center border rounded mb-2"
          style={{height : "6rem"}}>
            <i className={`fa-${this.props.icone} fas fa-5x`}></i>
            <h1>{this.props.estacao}</h1>
            <div></div>
          </div >
          <div>
            <p className="text-center">
            {
            this.props.latitude ? 
              `Coordernadas: ${this.props.latitude}, ${this.props.longitude} Data: ${this.state.data}`
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
              onClick={() => this.props.obterLocalizacao()}>
              Qual a minha localização?
            </button>
          </div>
        </div>
      </div>
    )
  }
}
