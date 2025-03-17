import React from 'react'

const FeedBack = props => {
  return (
    //.d-flex.justify-content-evenly.m-2
   <div className="d-flex justify-content-evenly m-2">
    <>
        <button 
            className='btn btn-primary me-2'
            type = "button" onClick={props.funcaoOK}>
        {props.textoOK}
        </button>
        <button 
            className='btn btn-danger me-2'
            type = "button" 
            onClick={props.funcaoNOK}
        >
        {props.textoNOK}
        </button>
    </>
   </div>
  )
}

export default FeedBack