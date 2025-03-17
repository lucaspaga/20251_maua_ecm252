import React from "react";

const ListaComentarios = ({children}) => {
    return (
        <div className="container border border-warning rounded my-3 p-3">
            {children}
        </div>
    )
}

export default ListaComentarios