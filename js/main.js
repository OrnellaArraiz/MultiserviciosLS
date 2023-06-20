const productos = [
    {
        id: "inyectores-chevrolet",
        titulo: "Limpieza de inyectores para Chevrolet",
        imagen: "../css/img/Chevrolet DMAX/Limpieza chevrolet DMAX (1).jpg",
        categoria: {
            nombre: "Limpieza de Inyectores",
            id: "inyectores"
        },
        precio: 20
    },
    {
        id: "inyectores-fiat",
        titulo: "Limpieza de inyectores para Fiat",
        imagen: "../css/img/Fiat siena/Limpieza Fiat Sienna (1).jpg",
        categoria: {
            nombre: "Limpieza de Inyectores",
            id: "inyectores"
        },
        precio: 20
    },
    {
        id: "inyectores-toyota",
        titulo: "Limpieza de inyectores para Toyota",
        imagen: "../css/img/Toyota Terios/Limpieza toyota Terios (1).jpg",
        categoria: {
            nombre: "Limpieza de Inyectores",
            id: "inyectores"
        },
        precio: 20
    },
    {
        id: "inyectores-volskwagen",
        titulo: "Limpieza de inyectores para volskwagen",
        imagen: "../css/img/Volkswagen Gol/Limpieza Gol (1).jpg",
        categoria: {
            nombre: "Limpieza de Inyectores",
            id: "inyectores"
        },
        precio: 20
    },

    {
        id: "escaner-01",
        titulo: "Escaner Automotriz",
        imagen: "../css/img/escaner.png",
        categoria: {
            nombre: "Escaner",
            id: "escaner"
        },
        precio: 50
    },
    
    {
        id: "mecanica-01",
        titulo: "Mecánica general",
        imagen: "../css/img/mecanica.png",
        categoria: {
            nombre: "Mecánica",
            id: "mecanica"
        },
        precio: 100
    },
        
];

let categorias = [];
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
const productoCategoria = document.querySelector("productos.categoria");
let botonesAgregar = document.querySelectorAll(".boton-agregar");
let productosBoton = [];
let productosElegidos =[];

document.addEventListener("DOMContentLoaded", function() {
const contenedorProductos = document.querySelector("#contenedor-productos");

function cargarProductos(productosElegidos){
    contenedorProductos.innerHTML="";
    productos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
        <img class="producto-imagen" src="${producto.imagen}" height="300px" width="400px" alt="${producto.titulo}">
                    <div class="producto-detalles">
                        <h3 class="producto-titulo">${producto.titulo}</h3>
                        <p class="producto-precio">${producto.precio}</p>
                        <button class="producto-agregar" id= "${producto.id}>Agregar</button>
                    </div>
        `;

        contenedorProductos.append(div);
    });
    actualizarBotonesAgregar();
  }

  cargarProductos(productos);
});

function cargarProductos(productosBoton) {
    
  };

document.addEventListener("DOMContentLoaded", function() {
const botonesCategorias = document.querySelectorAll(".boton-categoria");

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {
        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");
        
        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find((producto) => productoCategoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id); 
            cargarProductos(productosBoton);
        } else {

            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }

        
        
    });
})
});

function actualizarBotonesAgregar (){
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton =>{
        boton.addEventListener("click", agregarAlCarrito);
    })
}

function agregarAlCarrito(e){
    const idboton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idboton);

        if (productosEnCarrito.some(producto =>producto.id === idboton)){
            productosEnCarrito.findIndex(producto => producto.id === idboton);
        }else{
            productoAgregado.cantidad=1;
            productosEnCarrito.push(productoAgregado);
        }

    
}