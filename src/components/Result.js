import React from 'react'
import "./styles/Result.css"
function Result(props) {
    // {}
  return (
    <div className='result'> <p>{props.imc}</p> <span>Kg/m²</span> </div>
  )
}

export default Result