
let btnInfo    = document.querySelector('#btnInfo');
let btnFiltrar = document.querySelector('#btn-filtrar');
let form = document.querySelector('#form');


function crearCliente(){
    
    console.log('Hola');
    
    let persona = {
        
        nombre: '',
        origen: '',
        destino: '',
        numeroPersonas: 1,
        fechaEntrada: '',
        fechaSalida: '',
    };

    let nombre         = document.querySelector('#nombre').value.toLowerCase();
    let origen         = document.querySelector('#origen').value.toLowerCase();
    let destino        = document.querySelector('#destino').value.toLowerCase();
    let numeroPersonas = parseInt( document.querySelector('#nPersonas').value );
    let fechaEntrada   = document.querySelector('#fechaEntrada').value;
    let fechaSalida    = document.querySelector('#fechaSalida').value;

    persona.nombre         = nombre;
    persona.origen         = origen;
    persona.destino        = destino;
    persona.numeroPersonas = numeroPersonas;
    persona.fechaEntrada   = fechaEntrada;
    persona.fechaSalida    = fechaSalida;
    
    dataUsers.push( persona );

    form.reset();

}

let filtrar = () =>{

    console.log('hola');

    for( let i = 0; i < dataUsers.length; i++ ){

        if(dataUsers[i]['destino'] === 'canarias' || dataUsers[i]['destino'] === 'mayorca' 
        || dataUsers[i]['destino'] === 'galicia'){

            for( let key in dataUsers[i] ){

                console.log(`${key}: ${dataUsers[i][key]}`);

            }

        }

    }

}

let dataUsers = [];

btnInfo.addEventListener('click', crearCliente);

btnFiltrar.addEventListener('click', filtrar)




