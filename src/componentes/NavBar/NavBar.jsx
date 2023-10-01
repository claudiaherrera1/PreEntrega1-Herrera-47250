import React from 'react'
import './NavBar.css';
import CardWidget from '../CardWidget/CardWidget';



const NavBar = () => {
  return (
    <header>
        <h1 className='titulo'>Astrológica</h1>
        <nav>
            <ul>
                <li>Cursos</li>
                <li>Servicios</li>
                <li>Productos</li>
            </ul>
        </nav>

        <CardWidget/>

        

    </header>
  )
}

export default NavBar