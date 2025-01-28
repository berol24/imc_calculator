import React from 'react'
import './styles/Message.css'


function Message(props) {

  return (
    <>
    <div className='message'style={{backgroundColor:props.backgroundColor}}>
       <p>{props.message}</p> 
    </div>
     {props.affiche_icone && <div className='image_message'> <img src= {props.image_icone}  alt='' /> </div>}
     </>
  )
}

export default Message