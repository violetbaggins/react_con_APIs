import React from 'react';
import logo from './logo.svg';
import './App.css';
import TiraPeliculas from "./components/TiraPeliculas"
import Contador from "./components/Contador"
import Gif from "./components/Gif"
import Clima from "./components/Clima"

function App() {
  return (
    <div className="App">
      <header className="bg-dark text-white" >
        este es un header
      </header>
      <main>
        <div className="row">
          <div className="col-6">
            <Clima/>
          </div>
          <div className="col-6">
            <Gif/>
          </div>
        </div>
        <TiraPeliculas/>
       <Contador inicial={0}/>
      </main>
    </div>
  );
}

export default App;
