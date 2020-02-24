import React, {Component} from 'react';
import Pelicula from './Pelicula'

class TiraPeliculas extends Component {

    constructor(){
        super();
            this.state ={
                color : "cadetblue",
        }
    }
    cambiarColor(){
        this.setState({
            color: "seafoam"
        })
    }

    lanzaAlerta(){
        alert("me clickeaste!");
    }

    cambiarSalmon(){
        document.querySelector('body').style.backgroundColor = "salmon"
    }
    
    cambiarRosa(){
        document.querySelector('body').style.backgroundColor = "pink"
        
    }
    cambiarCard(){
        document.querySelector('#App').style.backgroundColor = "golden"
    }

    render(){
        return (
            <div className="card-deck m-2 border" 
            /* onClick={this.lanzaAlerta} */
            onMouseOver={this.cambiarSalmon}
            onMouseOut={this.cambiarRosa}>

                <div className="row">
                    <div className="col-12 border">
                        <p>{this.state.color}</p>
                        <button className="btn btn-primary mb-2" onClick={ () => this.cambiarColor()}>Click Me!</button>
                    </div>

                <Pelicula
                
                generos={["Horror", "Fantasia", "Terror"]}
                    title="Beetlejuice"
                    rating="8.9"
                />
                <Pelicula 
                
                generos={["fantasia", "aventuras"]}
                title="Laberinto"
                rating="7.8"
                />
                <Pelicula 
                
                generos={["Animacion"]}
                title="Parque Gordasico"
                rating="5.3"
                />
                <Pelicula
                
                generos={["Ciencia Ficción"]}
                title="Juanito y los clonosaurios"
                rating="9.7"
                />
                <Pelicula
                
                generos={["Acción", "aventuras"]}
                title="El hombre Radiactivo"
                rating="5.6"
                />
            </div>
            </div>
        );
    }
  }

export default TiraPeliculas;