import React, { createContext, useEffect, useState } from 'react';
export const CartContext = createContext()

export default function ContextContainer({children}) {
  const [Cart , setCart] = useState([])
  const [total , setTotal] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [qty , setQty] = useState()
  
  function posIsinCart(idCategory) {
    const pos =  Cart.findIndex((item)=> item.idCategory == idCategory )
    return pos;
  }

  function addItem(item , count) {
    const pos = posIsinCart(item.idCategory)
   if (pos == -1) {
     setCart([...Cart , {...item , count}])
   }else{
    const aux = [...Cart]
    aux[pos] = {...aux[pos],count: aux[pos].count + count }

    setCart(aux)
  }
  }

  useEffect(() => {
    setTotal(Cart.reduce((acc, item)=>acc + item.count, 0))
    setTotalPrice(Cart.reduce((acc,item)=> acc + item.count * item.price , 0 ))
    // setQty(Cart.reduce((acc, item)=>acc + item.count - item.count, setTotal))

  }, [Cart]);

  function deleteFromCart(idCategory) {
   setCart(Cart.filter((item)=>item.idCategory !== idCategory)) 
  }
  return (
    <CartContext.Provider value={{Cart, addItem , total , totalPrice,deleteFromCart}}>{children}</CartContext.Provider>
  )
}
