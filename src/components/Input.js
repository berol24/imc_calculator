import React from 'react'
import "./styles/Input.css"
function Input(props) {
  const handleChange = (event) => {
    props.onChange(event.target.value);
  };


  return (
    <div className='row'>
        <label htmlFor="weight">Entrer votre {props.type} :</label> <br/><br/>
       <div className='input_row'><input type="number" id="weight" name="weight" required  value={props.value} onChange={handleChange} /> <span>{props.unite}</span></div> 
    </div>
  )
}

export default Input