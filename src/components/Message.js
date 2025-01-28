import React from 'react'
import './styles/Message.css'


function Message(props) {
//   const style = {
//     border: 1px solid  red;
//     width: 370px;
//     height: auto;
//     font-weight: bold;
    
//     margin: 40px auto ;
//   }


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