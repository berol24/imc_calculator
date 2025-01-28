import React from 'react'
import "./styles/Validate.css"
function Button(props) {
  return (
    <div className='validate'>
        <button onClick={props.onClick}>{props.nom} </button>
    </div>
  )
}

export default Button