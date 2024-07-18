import React from "react";

function FooterComponent() {
    return (
        <footer style={{ backgroundColor: '#282c34', padding: '1rem', color: 'white', textAlign: 'center' }}>
            <div style={{ marginBottom: '1rem' }}>
                <p>© 2024 Mi Aplicación. Todos los derechos reservados.</p>
                <p>Dirección: Calle 12334, Ciudad Quito, Ecuador</p>
                <p>Teléfono: +593 234 567 890</p>
                <p>Email: info@miaplicacion.com</p>
            </div>
            <div>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white', margin: '0 1rem' }}>
                    Facebook
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white', margin: '0 1rem' }}>
                    Twitter
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white', margin: '0 1rem' }}>
                    Instagram
                </a>
            </div>
        </footer>
    );
}

export default FooterComponent;
