
let btnInfo    = document.querySelector('#btnInfo');
let btnFiltrar = document.querySelector('#btn-filtrar');
let form       = document.querySelector('#form');
let listGroup  = document.querySelector('#list-group');
// let main       = document.querySelector('.main');


function crearCliente(){
    
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

    if( dataUsers.length > 0 ){

        for( let i = 0; i < dataUsers.length; i++ ){
    
            if(dataUsers[i]['destino'] === 'canarias' || dataUsers[i]['destino'] === 'mayorca' 
            || dataUsers[i]['destino'] === 'galicia'){
    
                for( let key in dataUsers[i] ){
    
                    console.log(`${key}: ${dataUsers[i][key]}`);
    
                }

                let div = document.createElement('div');
                div.classList.add('lista')
    
                let h3 = document.createElement('h3');        
                h3.innerText = `Usuario ${i+1}`;
    
                div.append( h3 );
        
                for( let key in dataUsers[i] ){
                    let p = document.createElement('p');
                    p.innerText = `${key}: ${dataUsers[i][key]}`;
                    div.append( p );
                }
    
                listGroup.append( div );

            }
    
        }

    }

}

let dataUsers = [];

btnInfo.addEventListener('click', crearCliente);

btnFiltrar.addEventListener('click', filtrar)




