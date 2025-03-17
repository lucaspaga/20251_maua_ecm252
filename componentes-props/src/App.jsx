import Pedido from "./Pedido"
import Cartao from "./Cartao"
import FeedBack from "./FeedBack"

const App = () => {
  const textoOK = 'Já chegou'
  const textoNOK = 'Nãp chegou ainda'
  const funcaoOK = () => alert('Agradecemos a confirmação')
  const funcaoNOK = () => alert('Verificamos o ocorrido')
  const componenteFeedback = (
    <FeedBack
      textoOK={textoOK}
      textoNOK={textoNOK}
      funcaoOK={funcaoOK}
      funcaoNOK={funcaoNOK}
    />
  )
  return (
    <div className="container border mt-2">
      <div className="row">
        <div className="col-12">
          {/* .card>(.card-header+.card-body)*/}

          <Cartao
            cabecalho={new Date().toDateString()}>
            <Pedido
              titulo="SSD"
              descricao="Um SSD de 512Gb"
              icone="hdd" />
              {componenteFeedback}
          </Cartao>

        </div>
        <div className="col-12">
          <Cartao
            cabecalho={new Date().toDateString()}>
            <Pedido
              titulo="Livro"
              descricao="Harry Potter"
              icone="book" />
              {componenteFeedback}
          </Cartao>



        </div>
        <div className="col-lg-6 col-xxl-4">

          <Cartao
            cabecalho={new Date().toDateString()}>
            <Pedido
              data="22/02/2024"
              titulo="Hipopótamo"
              descricao="Sim, um hipo!"
              icone="hippo" />
              {componenteFeedback}
          </Cartao>


        </div>
        <div className="col-lg-6 col-xxl-4">
          <Cartao
            cabecalho={new Date().toDateString()}>
            <Pedido
              data="22/02/2024"
              titulo="Boneco de Neve"
              descricao="Um boneco de neve que balança sozinho"
              icone="snowman fa-shake" />
              {componenteFeedback}
          </Cartao>


        </div>

      </div>
      <div className="row">

      </div>

    </div>
  )
}
export default App