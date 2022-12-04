import React from 'react'
import ItemCount from './ItemCount'

export default function item({item}) {

  return (
    <div className='item__container '>
      
    <div   className='item__card '>
      <h1>{item.name}</h1>
      <img src={item.image}></img>
      <div className='item__contenido'>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut dolorem cum, voluptates ullam at necessitatibus! Voluptatem quae debitis officiis nihil, sit voluptas explicabo ratione quisquam. Quidem officia temporibus ipsa nisi.
        </p>
        <span>precio {item.price}</span>
        <br/>
        <span>stock {item.stock}</span>
        <br/>
        <br/>
        <ItemCount item = {item}/>

      </div> 
    </div>
 </div>
  )
}