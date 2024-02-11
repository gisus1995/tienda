const carrito = document.querySelector('#carrito');
const catalogoJuegos= document.querySelector('#catalogo-juegos');
const contenedorCarrito= document.querySelector('#lista-carrito');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
let articulosCarrito= [];

CargarEvenlisteners();
function CargarEvenlisteners() {
    catalogoJuegos.addEventListener('click', comprarJuego);
}

function comprarJuego(e){
    e.preventDefault();
    if (e.target.classList.contains('catalogo-juegos')){
        const juegoSeleccionado = e.target.parentElement.parentElement;
        leerDatos(juegoSeleccionado);
    }
}

function leerDatos(juego){
    // console.log(juego);

    const infoJuegos = {
        imagen: juego.querySelector('img').src,
        titulo: juego.querySelector('h2').textContent,
        precio: juego.querySelector('span').textContent,
        id:juego.querySelector('a').getAttribute('data-id'),
        cantidad: 1

        
        
    }

    articulosCarrito= [...articulosCarrito, infoJuegos];

    console.log(articulosCarrito);

    carritoHMTL();

}

function carritoHMTL() {

    limpiarHTML(); 

    articulosCarrito.forEach( juego =>{
        console.log(juego);
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${juego.imagen}" width="100">
            </td>
            <td>${juego.titulo}</td>
            <td>${juego.precio}</td>
            <td>${juego.cantidad}</td>
            <td>
                <a href="#" class="borrar-juego" data-id="${juego.id}">X</a>
            </td>


        
        
        `;
        contenedorCarrito.innerHTML += row.outerHTML;
    });
}

function limpiarHTML() {
    // contenedorCarrito.innerHTML = "";
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }



}