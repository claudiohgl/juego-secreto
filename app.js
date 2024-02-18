
    

let numerosecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
 

function AsignarTextoElemento(elemento, texto){

    let elementoHTML = document.querySelector(elemento);

    elementoHTML.innerHTML = texto;


}

function verificarIntento(){
    
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos);
    
    
    if (numeroUsuario === numerosecreto){

     AsignarTextoElemento('p', `acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez'  : ' veces '}`); 
     
     document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        //el usuario no acerto 
        if (numeroUsuario > numerosecreto) {

            AsignarTextoElemento('p', ' el numero numero secreto es menor');  

        } else {
            AsignarTextoElemento('p', ' el numero secreto es mayor'); 
        }
        intentos++;

        limpiarCaja();
    }

        return;
}
function limpiarCaja() {

    document.querySelector('#valorUsuario').value = '';
   
}



function generarNumeroSecreto() {
    
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
		console.log(numeroGenerado);
		console.log(listaNumerosSorteados);
		// si sorteamos todos los numeros
		if (listaNumerosSorteados.length == numeroMaximo) {

AsignarTextoElemento('p', 'No hay mas numeros para sortear');

	} else {

		

    // si numero generado esta en la lista

    if (listaNumerosSorteados.includes(numeroGenerado)) {
					
			return generarNumeroSecreto();

    } else {
			listaNumerosSorteados.push(numeroGenerado);

			return numeroGenerado;


    }
    
 }
}


function condicionesIniciales(){

    AsignarTextoElemento('h1', 'Juego del numero Secreto!'); 
     AsignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);  
     numerosecreto = generarNumeroSecreto();
     intentos = 1;
               
    
      

}
function reiniciarJuego() {
     limpiarCaja();

     condicionesIniciales();

    //generar numero aleatorio
    
     
    
    //inicializar numero de intentos
  
    
    //desabilitar boton nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();
