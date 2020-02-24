import React, { Component } from 'react';

class Clima extends Component {
    
    constructor(props){
        super(props);
        this.state= {
            city: "",
            main: "",
            temp: "",
            
        }
    }

    apiCall(url, consecuencia){
        fetch(url)
            .then( response => response.json())
            .then( data => consecuencia(data) )
            .catch( error => console.log(error))
    }

    traerClima(elegirCiudad){
        
        this.apiCall(`http://api.openweathermap.org/data/2.5/weather?q=${elegirCiudad}&appid=cbf70166c750c640906414963fe4fa1b`, this.mostrarClima)
    }

    mostrarClima = (data)=>{
        console.log(data);
        
       this.setState(
           {
           city: data.name,
           main: data.weather[0].main,
           temp: Math.round((data.main.temp)/10)
           }
        ) 
        
    }

    componentDidMount(){
        console.log("Soy el Clima y Me monté!!");
              
        this.traerClima()
    }

    componentDidUpdate(){
        console.log("Soy el Clima y Me Actualicé");
        
    }

    render() {
        console.log("Soy el Clima y estoy renderizando");
        
        let contenido;

        if (this.state.city === ""){
            contenido = <p>Elegi una ciudad</p>
        }else{
        contenido = <div>
             
            <p>Ciudad: {this.state.city}</p>
            <p>clima: {this.state.main}</p>
            <p>{this.state.temp}° Grados</p>
            

             </div>
        }

        return (
            <div className="row bg-light">
                <div className="col-12 my-2">
                    {contenido}
                </div>
                <div className="col-12 my-2">
                    <button className="btn btn-warning mr-1" onClick={ () => this.traerClima("Buenos+Aires,ar") }>Clima Buenos Aires</button>
                    <button className="btn btn-info mr-1" onClick={ () => this.traerClima("London") }>Clima London</button>
                    <button className="btn btn-success mr-1" onClick={ () => this.traerClima("San+Diego") }>Clima San Diego</button>
                    <button className="btn btn-secondary mr-1" onClick={ () => this.traerClima("Osaka") }>Clima Osaka</button>
                </div>

            </div>
        );
    }
}

export default Clima;