import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import imagenes from '../media/imagenes';
import './Cart';
import Example from './Cart';

export default function Navbar() {
  return (
    
    <div>
      <nav className='nav__container'>
        <div className='logo'>
          <img src= {imagenes.img2} className='logo__imagen'/>,
        </div>
           <ul className='nav__orizontal'>
              <li className='nav__li'>
                 <Link to=':'>inicio</Link> 
              </li>

              <li className='nav__li'>
                <Link to='/Checkout'>contacto</Link>
              </li>

              <li className='nav__li'>
                 <Link to='Contact'>sobre nosotros</Link>
              </li>

              <li className='nav__li'>
                <Link to='/'>productos</Link>
                <ul className='nav__vertical'>
                  <li>
                    <Link to='/category/femenino'>femenino</Link>
                  </li>
                  <li>
                    <Link to='/category/masculino'>masculino</Link>
                  </li>
                </ul>
              </li>

              <li className='example'>
                <Example/>
              </li>
           </ul>
       </nav>
    </div>

  )
}
