import React from 'react';
import './CardWidget.css';

const CardWidget = () => {
    const imgCarrito = "https://img.freepik.com/vector-premium/icono-realista-carro-compra-ilustracion-vectorial-3d-pictograma-color-linea-aislada-sombras-transparentes_277697-447.jpg";

  return (
    <div>
        <img className='imageCarrito' src={imgCarrito} alt="imagen de carrito de compras" />
        <strong className='ctdcarrito'>2</strong>
    </div>
  )
}

export default CardWidget