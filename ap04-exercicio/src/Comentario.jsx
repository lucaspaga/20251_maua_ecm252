import React from 'react'

const Comentario = props => {
  return (
    <div >
      <div className="d-flex justify-content-center">
      <img 
        src={`${props.foto}`} 
        className="img-fluid rounded-start" 
        alt="Usuario"
        style={{ width: "80px", height: "80px", objectFit: "cover", flexShrink: 0 }} />
        <div className="d-flex flex-column ms-2"> 
          <p className="card-text">{props.comentario}</p>
          <p className="card-text"><small className="text-body-secondary">{props.data}</small></p> 
        </div>
      </div>
    </div>

  )
}

export default Comentario