import React from 'react';

function Pelicula(props) {
    let generos = props.generos;
    
    
    
    return (
    <div className="card">
        <div className="card-title">
            <h2>{props.title}</h2>
        </div>
        
        <div className="card-body">
            <div className="card-text text-left">
                <p><b>Rating:</b> {props.rating}</p>
                <p><b>Géneros: </b></p>
            <ul>
                    {generos.map(genero => <li>{genero}</li>)}
                </ul> 
            </div>
        </div>
     </div>
    );
  }

export default Pelicula;