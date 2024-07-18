import React from "react";

function NavComponent() {
    return (
        <nav style={{ backgroundColor: '#333', padding: '1rem', color: 'white' }}>
            <ul style={{ listStyleType: 'none', display: 'flex', justifyContent: 'space-around', padding: 0, margin: 0 }}>
                <li style={{ margin: '0 1rem' }}>
                    <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Inicio</a>
                </li>
                <li style={{ margin: '0 1rem' }}>
                    <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Sobre Nosotros</a>
                </li>
                <li style={{ margin: '0 1rem' }}>
                    <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Servicios</a>
                </li>
                <li style={{ margin: '0 1rem' }}>
                    <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Contacto</a>
                </li>
            </ul>
        </nav>
    );
}

export default NavComponent;
