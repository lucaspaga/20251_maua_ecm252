import Comentario from "./Comentario"

const Cartao = (props) => {
    return(
        <div className="card border rounded m-2 p-2 shadow" style={{minHeight: 350}}>
            <div className="card-header text-muted">
                {props.cabecalho}
            </div>
            <div className="card-body">

                <Comentario
                    foto = {props.foto}
                    comentario = {props.comentario}
                    data = {props.data}
                />
            </div>
            <div className="card-footer">
            <div className="d-flex justify-content-center">
                {props.children}
            </div>
            </div>
        </div>

    )

}

export default Cartao