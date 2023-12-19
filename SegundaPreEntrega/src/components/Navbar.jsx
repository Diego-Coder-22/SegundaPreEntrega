import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="logo">
                <div className='char'>I</div>
                <div className='char'>K</div>
                <div className='char'>K</div>
                <div className='char'>A</div>
                <div className='char'>.</div>
            </Link>
            <ul className="menu">
                <li><Link className="menu-link" to="/">Inicio</Link></li>
                <li><Link className="menu-link" to="/productos">Productos</Link></li>
                <li><Link className="menu-link" to="/productos/Aceites">Aceites Esenciales</Link></li>
                <li><Link className="menu-link" to="/productos/Lociones">Lociones Corporales</Link></li>
                <li><Link className="menu-link" to="/productos/Aguas">Aguas Florales</Link></li>
                <li><Link className="menu-link" to="/contacto">Contacto</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar