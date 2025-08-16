//rafce
import React from 'react'


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      numeros: [],
    }
  }

  sortearNumeros = () => {

    this.setState(
      {
        prim_digito: Math.floor(Math.random() * 101),
        seg_digito: Math.floor(Math.random() * 101),
        ter_digito: Math.floor(Math.random() * 101),
        qua_digito: Math.floor(Math.random() * 101),
        qui_digito: Math.floor(Math.random() * 101),
        sex_digito: Math.floor(Math.random() * 101),
      }
    )

  }

  render() {
    return (
      <div className="container mt-2 text-center">
        <div className="row justify-content-center">
          <div className="col-sm-12 col-lg-6 col-xxl-4">
            <div className="card">
              <div className="card-header text-muted">
                <div className="d-flex justify-content-start">
                  <h3>Mega-Sena</h3>
                </div>
              </div>
              <div className="card-body">
                <div className="d-flex justify-content-center">
                  <ul className="list-group list-group-horizontal">
                    <li className="list-group-item list-group-item-success py-3 px-3">{this.state.prim_digito}</li>
                    <li className="list-group-item list-group-item-success py-3 px-3">{this.state.seg_digito}</li>
                    <li className="list-group-item list-group-item-success py-3 px-3">{this.state.ter_digito}</li>
                    <li className="list-group-item list-group-item-success py-3 px-3">{this.state.qua_digito}</li>
                    <li className="list-group-item list-group-item-success py-3 px-3">{this.state.qui_digito}</li>
                    <li className="list-group-item list-group-item-success py-3 px-3">{this.state.sex_digito}</li>
                  </ul>
                </div>
                <button
                  className='btn btn-primary w-100 mt-3'
                  type="button"
                  onClick={this.sortearNumeros}>
                  Gerar Jogo
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    )
  }
}

export default App
