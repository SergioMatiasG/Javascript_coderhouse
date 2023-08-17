// **Actividad 1: Ecommerce**

// 1. **Objetivo**: Comenzar a desarrollar un ecommerce que permita mostrar productos, agregarlos al carrito y guardar la selección en el almacenamiento local.

// 2. **Instrucciones**:

//    a. Abre un archivo HTML y crea un contenedor con el id "productos-container" donde se mostrarán las tarjetas de productos.

//    b. En un archivo JavaScript, crea un array de objetos con 10 productos.

//    c. Escribe una función llamada `generarTarjetas` que reciba el array de productos como argumento. Dentro de esta función, utiliza un reduce para crear elementos HTML para cada producto, estilízalos mínimamente y agrega un botón "Agregar al Carrito" que al hacer clic lo agregue al almacenamiento local.

const productosEcommer = [
    {
        id: 1,
        producto: "Tarjeta Gráfica",
        categoria: "Componentes",
        precio: 399.99,
        marca: "Radeom",
        imagen: "img/D_NQ_NP_679139-MLU52584390334_112022-O.webp",
        descripcion: "Potente tarjeta gráfica para gaming de última generación.",
    },
    {
        id: 2,
        producto: "Monitor",
        categoria: "Periféricos",
        precio: 249.99,
        marca: "LG",
        imagen: "img/D_NQ_NP_853000-MLA32992632905_112019-O.webp",
        descripcion: "Monitor de alta resolución y excelente calidad de color.",
    },
    {
        id: 3,
        producto: "SSD",
        categoria: "Almacenamiento",
        precio: 89.99,
        marca: "Kingston",
        imagen: "img/D_NQ_NP_751939-MLA46221843872_052021-O.webp",
        descripcion: "Unidad de estado sólido de gran capacidad y velocidad.",
    },
    {
        id: 4,
        producto: "Teclado Mecánico",
        categoria: "Periféricos",
        precio: 129.99,
        marca: "Corsair",
        imagen: null || "img/imagen-no-disponible - copia (2).jpg" ,
        descripcion: "Teclado mecánico con retroiluminación RGB personalizable.",
    },
    {
        id: 5,
        producto: "Procesador",
        categoria: "Componentes",
        precio: 299.99,
        marca: "Intel",
        imagen: "img/no disponible.jpg",
        descripcion: null || "No hay descripcion" ,
    },
    {
        id: 6,
        producto: "Mouse Inalámbrico",
        categoria: "Periféricos",
        precio: 39.99,
        marca: "Logitech",
        imagen: "img/D_NQ_NP_977588-MLA51172463642_082022-O.webp",
        descripcion: "Mouse ergonómico inalámbrico con precisión óptica.",
    },
    {
        id: 7,
        producto: "Memoria RAM",
        categoria: "Componentes",
        precio: 79.99,
        marca: "Fury",
        imagen: "img/D_NQ_NP_612752-MLA48636149729_122021-O.webp",
        descripcion: "Módulo de memoria RAM de alta velocidad para mejorar el rendimiento.",
    },
    {
        id: 8,
        producto: "Disco Duro Externo",
        categoria: "Almacenamiento",
        precio: 119.99,
        marca: "Western Digital",
        imagen: "img/D_NQ_NP_632778-MLA53352128101_012023-O.webp",
        descripcion: "Disco duro externo de gran capacidad para almacenar tus archivos.",
    },
    {
        id: 9,
        producto: "Fuente de Alimentación",
        categoria: "Componentes",
        precio: 89.99,
        marca: "EVGA",
        imagen: null || "img/imagen-no-disponible.jpg" ,
        descripcion: "Fuente de alimentación eficiente y de alta potencia.",
    },
    {
        id: 10,
        producto: "Auriculares Gaming",
        categoria: "Audio",
        precio: 69.99,
        marca: "Razer",
        imagen: "img/D_NQ_NP_756516-MLA41158138136_032020-O.webp",
        descripcion: "Auriculares gaming con sonido envolvente y micrófono retráctil.",
    },
];

const contenedorTarjetas = document.querySelector("#contenedor-tarjetas")

const cartas = array =>{
    const data = array.reduce((acc,elemento) =>{
        return acc += 
        `
        <div class="card mb-6 text-center " style="max-width: 540px;">
            <div class="row g-0" >
                <div class="col-md-4">
                    <img src="${elemento.imagen}" class="img-fluid rounded-start" alt="${elemento.producto}">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                    <h5 class="card-title">${elemento.producto}</h5>
                    <p class="card-text">Categoria: ${elemento.categoria}</p>
                    <p class="card-text">Precio: ${elemento.precio}</p>
                    <p class="card-text"></p>
                    <p class="card-text"><small class="text-muted">${elemento.descripcion}</small></p>
                    <button class="btn btn-dark btn-lg agregar">Agregar al carrito</button>
                </div>
            </div>
        </div>
        </div>
        `
    }, "")
    contenedorTarjetas.innerHTML = data
}
cartas(productosEcommer)

const botoncarrito = document.querySelectorAll(".agregar")

botoncarrito.forEach((boton,i) => {
    boton.addEventListener("click", () =>
    agregarAlCarrito(productosEcommer[i]))
})


function agregarAlCarrito(producto) {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || []
    carrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    alert(`¡Se agrego al carrito exitosamente!`)
}

const mostrarCarrito = document.querySelector(".btncarrito")

mostrarCarrito.addEventListener("click", () =>{
    const carrito = JSON.parse(localStorage.getItem("carrito"))
    if ( carrito && carrito.length > 0){
        const productosEnCarrito = carrito.map(producto => producto.producto).join(`\n`)
        alert(`Productos en el carrito: \n${productosEnCarrito}`)
    }else{
        alert("El carrito esta vacio")
    }
})

const borrarCarrito = document.querySelector(".btnborrarcarrito")

borrarCarrito.addEventListener("click",() => {
    localStorage.removeItem("carrito")
    alert("El carrito fue borrado del almacenamiento")
})