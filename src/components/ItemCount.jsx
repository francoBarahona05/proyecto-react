import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './ContextContainer';


export default function ItemCount({item}) {
    const [count , setCount] = useState(0);
    const [removeButton, setRemoveButton] = useState(false)
    const { addItem} = useContext(CartContext)
    function add() {
        if (count < item.stock) {
            setCount(count + 1)
        }
        
    }

    function subtract() {
        if (count >= 2) {
            setCount(count - 1)
        }
        
    }

    function onAdd() {
        addItem(item , count)
        setRemoveButton(true)
    }
  return (
    <div>
        <button onClick={add}>+</button>
        {count}
        <button onClick={subtract}> - </button>
        <br/>
       {removeButton?(
        <>
        "producto! agregado!"
        <br/>
        <Link to={"/"}>seguir con mi compra</Link>
        <br/>
        </>
       ):(
       <button onClick={onAdd}>agregar al carro</button>)}
    </div>
  )
}
