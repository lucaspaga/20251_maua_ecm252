import React from "react"
import Cartao from "./Cartao"
import FeedBack from "./FeedBack"

const App = () => {
  const textoOK = 'Aprovar'
  const textoNOK = 'Nãp aprovar'
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

  const comentario1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie odio in justo gravida facilisis. Maecenas eget pellentesque est. Nulla metus massa, gravida eget dui sit amet, vehicula facilisis lacus. Nulla vel dolor id magna porttitor malesuada. Pellentesque malesuada sit amet odio vitae bibendum. Fusce consequat ornare nibh sed gravida."
  const comentario2 = "Cras non dictum velit. Aliquam auctor, velit vitae vestibulum euismod, augue est imperdiet massa, et consectetur diam elit sed nunc. Mauris sodales, nunc sit amet lobortis pretium, purus libero tincidunt erat, nec viverra est neque molestie velit. Vestibulum lacinia a est a imperdiet"
  const comentario3 = "Sed ex nisi, viverra ut accumsan id, dapibus at mauris. Pellentesque aliquam enim nec lorem mollis interdum. Nullam iaculis consectetur justo eu malesuada. Quisque molestie risus maximus vehicula elementum. Nunc malesuada iaculis erat, at semper dolor auctor ut. Nam ac interdum velit."

 
  return (
    <div className="container border mt-2">
      <div className="row">
        <div className="col-lg-6 col-xxl-4">
          {/* .card>(.card-header+.card-body)*/}

          <Cartao
            cabecalho="Mary.Lockman69"
            comentario = {comentario1}>
            {componenteFeedback}
          </Cartao>

        </div>
        <div className="col-lg-6 col-xxl-4">
          <Cartao
            cabecalho="Brock_Reichel18"
            comentario = {comentario2}>
            {componenteFeedback}
          </Cartao>



        </div>
        <div className="col-lg-6 col-xxl-4">

          <Cartao
            cabecalho="Nils_Steuber"
            comentario = {comentario3}>
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