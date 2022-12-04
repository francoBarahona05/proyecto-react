import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from "react-router-dom";
import '../App.css';
import { CartContext } from './ContextContainer';


export default function Example() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const {Cart , total, totalPrice,deleteFromCart}=useContext(CartContext);

 

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
      <ion-icon name="cart-outline" ></ion-icon >{total}
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><h4>carrito de compras</h4></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <>   
            {Cart.map((item)=>(
            <div key={item.idCategory}> 
              <b>categoria del producto </b> : {item.idCategory}<br/>
              <b>nombre del producto </b> : {item.name}<br/>
              <b> precio </b> : {item.price} <br/>
              <b>cantidad </b> : {item.count}<br/>             
              <button onClick={()=>deleteFromCart(item.idCategory)}>quitar producto del carrito</button>
              <br/>
              <br/>
            </div>
            ))}
            <div><b>total a pagar </b>: {totalPrice}</div>
            <br/>
            <Link to="/Checkout">terminar compra</Link>
          </>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
