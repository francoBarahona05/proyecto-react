import React from 'react'
import { Link } from 'react-router-dom'

export default function item({item}) {
  return (
    <div className='item__container '>
      
    <div   className='item__card '>
      <h3>{item.name}</h3>
      <img src={item.image}></img>
      <div className='item__contenido'>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut dolorem cum, voluptates ullam at necessitatibus! Voluptatem quae debitis officiis nihil, sit voluptas explicabo ratione quisquam. Quidem officia temporibus ipsa nisi.
        </p>
        <Link className='linkk' to={"/item/" + item.id}>ver producto </Link>
      </div> 
    </div>
 </div>
  )
}
