function createVersionMovil(){
    /*1 = Es PC  2 = Móvil*/

    const buscador = document.getElementById('buscador');
    var contenedorPC = document.getElementById('container-buscador-pc');
    var contenedorMovil = document.getElementById('container-buscador-movil');

    contenedorMovil.innerHTML = buscador.innerHTML;
    contenedorPC.innerHTML = '';
}

function getSystem(){ //Obtiene sistema operativo.
    //Navegadores:
    switch(navigator.platform) {
        case 'Linux x86_64':
            createVersionMovil();
        
        default:
            break;
    }
}

function main(){
    setInterval(getSystem, 1);

}

main();