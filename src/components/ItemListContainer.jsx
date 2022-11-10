import React from 'react'
import '../App.css';
import { useState ,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import {data} from './data.js'

export default function ItemListContainer() {
  const {idcategory}= useParams()
  const [productos, setProductos]=useState([])

useEffect(() => {
  const productosPromise = new Promise((res , rej)=>{
    setTimeout(() => {
      res(data)
    },2000 );
   })

   productosPromise.then((res)=>{ 
    if (idcategory) {
      setProductos(res.filter((item)=> item.category == idcategory))
    }else{
      setProductos(res)
    }

  })

}, [idcategory])

  return (
    <div className='container__item__list'>
      {!productos.length && " loading..."}
      {productos.map((item)=>(
       <ItemList item={item}/>
      ))}
    </div>   )
}