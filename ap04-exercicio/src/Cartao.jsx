import Comentario from "./Comentario"

const Cartao = (props) => {

    return (
        <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="" alt="" />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{props.cabecalho}</h5>
                        <Comentario
                            comentario={props.comentario}
                        />
                    </div>
                </div>
            </div>
            <div className="card-footer  text-body-secondary">
                {props.children}
            </div>
        </div>
    )
}

export default Cartao