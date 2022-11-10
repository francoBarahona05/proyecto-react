import React from 'react'
import '../App.css';
import { useState ,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { data } from './data.js';
import ItemList from './ItemList';

export default function ItemListContainer() {
  const {iditem}= useParams()
  const [producto, setProducto]=useState({})
  console.log(setProducto)

 useEffect(() => {
  const productoPromise = new Promise((res , rej)=>{
    setTimeout(() => {
      res(data.find((item)=> item.id == iditem))
    },0);
   })

   productoPromise.then((res)=>{ 

    setProducto(res)
  })

}, [iditem])

  return (
    <div className='item__detail'>
    <ItemList item={producto}/>
    </div>
  )
}