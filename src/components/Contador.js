import React, { Component } from 'react';

class Contador extends Component {
    
    constructor(props){
        super(props);
        this.state ={
            numero : props.inicial
        }
    }

    incrementar(){
        this.setState( { numero: this.state.numero +1 } )
    }

    decrementar(){
        this.setState( { numero: this.state.numero -1 } )
    }
    
    componentDidMount(){
        console.log("Me monté!!");
    }

    componentDidUpdate(){
        console.log("Me Actualicé");
        
    }

    render() {
        console.log("estoy renderizando");
        
        return (
            <div className="bg-light">

                <p>Soy el número: {this.state.numero}</p>
                {/* Para q la funciones anden en el boton hay q escribirlas como arrow functions  */}
                <button onClick= { () => this.incrementar () } >Incrementar</button>
                <button onClick= { () => this.decrementar ()} >Decrementar</button>

            </div>
        );
    }
}

export default Contador;