//importando libreria de react
import React from 'react';
// Archivo JS de App.js
import './App.css';
// Importamos Header
import Header from './components/Header'
// importamos NavBar
import NavBar from './components/NavBar'


function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
    </div>
  );
}

export default App;

