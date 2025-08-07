import React from 'react'
import "./styles/Validate.css"
function Button(props) {

  const style = {
    backgroundColor: props.backgroundButton

  }
  return (
    <div className='validate'>
        <button onClick={props.onClick} style={style}>{props.nom} </button>
    </div>
  )
}

export default Button