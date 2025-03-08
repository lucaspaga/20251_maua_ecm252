import Pedido from "./Pedido"
const App = () => {
  return (
    <div className="container border mt-2">
      <div className="row">
        <div className="col-sm-12 col-lg-6 col-xxl-3">
          {/* .card>(.card-header+.card-body)*/}

          <Pedido 
            data = "22/02/2024"
            titulo = "SSD"
            descricao="Um SSD de 512Gb"
            icone="hdd"/>

        </div>
        <div className="col-sm-12 col-lg-6 col-xxl-3">

          <Pedido 
            data = "22/02/2024"
            titulo = "Livro"
            descricao="Harry Potter"
            icone="book"/>
            

        </div>
        <div className="col-sm-12 col-lg-6 col-xxl-3">

          <Pedido 
            data = "22/02/2024"
            titulo = "Hipopótamo"
            descricao="Sim, um hipo!"
            icone="hippo"/>

        </div>
        <div className="col-sm-12 col-lg-6 col-xxl-3">

          <Pedido 
            data = "22/02/2024"
            titulo = "Boneco de Neve"
            descricao="Um boneco de neve que balança sozinho"
            icone="snowman fa-shake"/>

        </div>

      </div>
      <div className="row">

      </div>

    </div>
  )
}
export default App