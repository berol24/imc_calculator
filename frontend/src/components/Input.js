import React from 'react'
import "./styles/Input.css"
function Input(props) {



  return (
    <div className='row'>
        <label htmlFor="weight">Entrer votre {props.type} :</label> <br/><br/>
       <div className='input_row'><input type="number" id="weight" name="weight"  value={props.value} onChange={props.onChange} required /> <span className='span_unite'>{props.unite}</span></div> 
       <span style={{color:'red', width:"50%",margin:"10px auto", display: 'flex', textAlign: 'center' }}>{props.messageError}</span>
    </div>
  )
}

export default Input