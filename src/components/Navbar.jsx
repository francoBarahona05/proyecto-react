import React from "react";

import Example from "./Cart";
import imagenes from "../media/imagenes";

import "../App.css";
import "./Cart";

export default function () {
  return (
    <div>
      <div className="ul__container">
        <div className="logo">
          <img src={imagenes.img2} className="logo__imagen" />,
        </div>

        <ul className="navbar">
          <li>
            <a href="">inicio</a>
          </li>

          <li>
            <a href="">contacto</a>
          </li>

          <li>
            <a href="">sobre nosotros</a>
          </li>

          <li className="example">
            <Example />
          </li>
        </ul>
      </div>
    </div>
  );
}
