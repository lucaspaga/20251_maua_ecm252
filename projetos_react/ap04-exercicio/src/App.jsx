import React from "react"
import Cartao from "./Cartao"
import FeedBack from "./FeedBack"
import ListaComentarios from"./ListaComentarios"

const App = () => {
  const textoOK = 'Aprovar'
  const textoNOK = 'Nãp aprovar'
  const funcaoOK = () => alert('Comentário aprovado!')
  const funcaoNOK = () => alert('Comentário reprovado!')
  const componenteFeedback = (
    <FeedBack
      textoOK={textoOK}
      textoNOK={textoNOK}
      funcaoOK={funcaoOK}
      funcaoNOK={funcaoNOK}
    />
  )

  return (
    <ListaComentarios>
      <div className="row">
        <div className="col-lg-6 col-xxl-4">
          {/* .card>(.card-header+.card-body)*/}

          <Cartao
            cabecalho="Mary.Lockman69"
            comentario =  "Lorem ipsum dolor sit amet. Eum voluptatem veritatis est tempore voluptas eum ipsum enim. Qui quia magnam sit consectetur amet 33 Quis obcaecati."
            foto = "https://img.freepik.com/fotos-premium/menina-com-fones-de-ouvido-em-fundo-laranja-vibrante-em-perfil_767466-25360.jpg?semt=ais_hybrid"
            data = {new Date().toDateString()}
            >
            {componenteFeedback}
          </Cartao>

        </div>
        <div className="col-lg-6 col-xxl-4">
          <Cartao
            cabecalho="Brock_Reichel18"
            comentario = "Est quidem voluptatem At voluptatem rerum id doloremque eveniet et velit magni eum sunt vero. Sit deleniti molestiae et deleniti quia qui exercitationem accusantium. "
            foto = "https://wallpapers.com/images/hd/best-profile-pictures-wqm0z83avja0y31c.jpg"
            data = {new Date().toDateString()}
            >
            {componenteFeedback}
          </Cartao>



        </div>
        <div className="col-lg-6 col-xxl-4">

          <Cartao
            cabecalho="Nils_Steuber"
            comentario = "Sit quam quam et dolor sunt non nemo perferendis nam inventore dolorem rem corrupti quia est dolorem earum ut unde quaerat. "
            foto = "https://preview.redd.it/ot8wvzl7snd71.png?width=356&format=png&auto=webp&s=43b677fd94fe01e3b2b104eec753481139dbec3b"
            data = {new Date().toDateString()}
            >
            {componenteFeedback}
          </Cartao>


        </div>
  
      </div>
    </ListaComentarios>
  )
}
export default App