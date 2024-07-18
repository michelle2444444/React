import React from "react";

function ButtonComponent() {
    return (
        <div style={{ textAlign: 'center', margin: '2rem' }}>
            <button
                type="button"
                style={{
                    padding: '1rem 2rem',
                    fontSize: '1.5rem',
                    backgroundColor: '#007bff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#0056b3'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#007bff'}
            >
                Click
            </button>
            <h1>Imagenes</h1>
        </div>
    );
}

export default ButtonComponent;
