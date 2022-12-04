import { addDoc, collection, getFirestore } from "firebase/firestore";
import React, { useContext, useState } from 'react';
import { CartContext } from './ContextContainer';

export default function Checkout () {
  const {totalPrice,Cart} = useContext(CartContext)
  const [name , setName]= useState("");
  const [email, setEmail] = useState("");
  const [tel , setTel] = useState("");
  const [orderId , setOrderId] = useState("")
function validar() {
  const ticket = {
    bayer:{name , tel , email},
    Cart,
    totalPrice
    
  }

  // if (eval.target|| ticket.bayer.email || ticket.bayer.tel == "") {
  //   alert("llenar todos los datos para poder terminar la compra")
  // }


    // const login = (name , tel , email)=>{
    
        const db = getFirestore();
        const orders = collection(db , "orders")
        addDoc(orders , ticket).then(({id})=>{
          setOrderId(id)
        })
      
    // }

    const validateEmail = (email,name , tel)=>{
      if(!email.includes("@",".com"))
    return "el email debe tener `@` `.com`" 
    if (name == "")
      return " no se puede dejar el campo vacio"
    
    if (tel == "") 
      return "no se puede dejar el campo vacio"
    
  }
  const errorM = validateEmail()

}

  return (
  <>
    {orderId  ? ("gracias por confiar en nosotros , tu orden de compra es : " + orderId ) :
    (
    <div>
      <form onSubmit={ev=>{
        ev.preventDefault()
        
      }} > 
      <h1>ingrese datos</h1>
      <input type="text" placeholder='name' value={name}  onChange={(e)=>setName(e.target.value)}  />
      <input type="tel" placeholder='tel' value={tel} onChange={(e)=>setTel(e.target.value)}/>
      <input type="email" placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
      <button disabled={errorM} onClick={validar}>terminar</button>
      </form>
    </div>
    )
    }
  </>
  )
}
