import React from 'react';
import './App.css';
import ButtonComponent from './complementos/complemento';
import exampleImage from './imagenes/876e5335-376d-430f-9dc2-f0195985845c.jpeg';
import FooterComponent from './complementos/piedepagina';
import NavComponent from './complementos/navegacion';
import exampledosImage from './imagenes/bdfb7459-43de-47d4-bca9-d55c245ea170.jpeg';
import exampletresImage from './imagenes/KIRBY HAPPY BIRTHDAY BANNER.jpeg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavComponent />
        <h1>MI PRIMER REACT</h1>
        <ButtonComponent />
        <p>BIENVENIDOS A MI PRIMER REACT</p>
        <img src={exampleImage} alt="Example" style={{ margin: '2rem 0', borderRadius: '10px', width: '300px', height: '200px', objectFit: 'cover' }} />
        <img src={exampledosImage} alt="Example" style={{ margin: '2rem 0', borderRadius: '10px', width: '300px', height: '370px', objectFit: 'cover' }} />
        <img src={exampletresImage} alt="Example" style={{ margin: '2rem 0', borderRadius: '10px', width: '300px', height: '230px', objectFit: 'cover' }} />
      </header>
      <FooterComponent />
    </div>
  );
}

export default App;
