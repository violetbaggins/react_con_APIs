import React, { Component } from 'react';

class Gif extends Component {
    
    constructor(props){
        super(props);
        this.state= {
            gif:""
        }
    }

    apiCall(url, consecuencia){
        fetch(url)
            .then( response => response.json() )
            .then( data => consecuencia(data) )
            .catch( error => console.log(error))
    }

    mostrarGif = (data)=>{
        console.log(data);
        
       this.setState(
           {
            gif: data.data.image_url,
            title: data.data.title
           }
        )
        
    }

    componentDidMount(){
        console.log("Me monté!!");
        this.traerGifNuevo()
    }

    traerGifNuevo(){
        this.apiCall("https://api.giphy.com/v1/gifs/random?api_key=u0v6ngofcrY7dwgwgftKuWNMlgD12XOR&tag=&rating=G", this.mostrarGif)
    }

    componentDidUpdate(){
        console.log("Me Actualicé");
        
    }

    render() {
        console.log("estoy renderizando");
        
        let contenido;

        if (this.state.gif == ""){
            contenido = <p>Cargando...</p>
        }else{
        contenido = <div>
            <h4 className="text-white">{this.state.title}</h4>
            <img width="400px" src={this.state.gif}></img> 
            <p>{this.state.gif}</p>
             </div>
        }

        return (
            <div className="row bg-secondary">
                <div className="col-12 my-2">
                    {contenido}
                </div>
                <div className="col-12 my-2">
                    <button className="btn btn-warning" onClick={ () => this.traerGifNuevo() }>Random Gif</button>
                </div>

            </div>
        );
    }
}

export default Gif;