import { addDoc, collection, getFirestore } from "firebase/firestore";
import React, { useContext, useState } from 'react';
import { CartContext } from './ContextContainer';

export default function Checkout () {
  const {totalPrice,Cart} = useContext(CartContext)
  const [name , setName]= useState("");
  const [email, setEmail] = useState("");
  const [tel , setTel] = useState("");
  const [orderId , setOrderId] = useState("")

  // const validateEmail = (email,name , tel)=>{
  //   if(!email.includes("@",".com"))
  // return "el email debe tener `@` `.com`" 
  // if (name && tel == "")
  //   return " no se puede dejar el campo vacio"
  //   else{
  //     validar()
  //   }
  // }

function validar() {
  const ticket = {
    bayer:{name , tel , email},
    Cart,
    totalPrice 
  }
  const db = getFirestore();
  const orders = collection(db , "orders")
  addDoc(orders , ticket).then(({id})=>{
    setOrderId(id)
  })
}
  return (
  <>
    {orderId  ? ("gracias por confiar en nosotros , tu orden de compra es : " + orderId ) :
    (
    <div>
      
      <h1>ingrese datos</h1>
      <input type="text" placeholder='names'   onChange={(e)=>setName(e.target.value)}  />
      <input type="tel" placeholder='tell'  onChange={(e)=>setTel(e.target.value)}/>
      <input type="email" placeholder='email'  onChange={(e)=>setEmail(e.target.value)} />
      <button  onClick={validar}>terminar</button>
    
    </div>
    )
    }
  </>
  )
}
