// PUNTOS SEGUNDA PREENTREGA
// PARA APROBAR, DEBEMOS HACER USO DE: ARRAYS, OBJETOS, FUNCIONES, MÉTODOS DE ARRAYS DE ITERACIÓN O MÉTODOS DE ARRAYS COMO PUSH, SPLICE, ETC, LOS QUE QUIERAN USAR
// TIENEN QUE INTERACTUAR CON EL USUARIO A TRAVÉS DE PROMPT
// PUEDEN DEVOLVER LA RESPUESTA AL USUARIO CON UN ALERT O CONSOLE.LOG
// TODOS LOS PUNTOS TIENEN QUE TRABAJAR CON ARRAYS DE OBJETOS
// SE DEBEN INSTANCIAR NUEVOS OBJETOS Y ESTOS DEBEN SER PUSHEADOS A UN ARRAY VACÍO

// CASO ECOMMERCE
// Generen con un función constructora o class constructor 5 objeto relativos a productos.
// Este objeto tiene que tener los siguientes propiedades:
// - nombre, precio, cantidad, categoria, id.
// Estos objetos deben ser pusheados a un array vacío que se llame productos
// al tener la data de nuestros productos, se debe hacer uso de un método de array que ordene a los elementos por su nombre (sort).
// luego debemos mandar un prompt, que se aloje en una variable, que le pregunte al usuario qué quiere comprar.

// productos : teclado, maouse, auriculares, pc , pantalla

class Producto {
    constructor (id, nombre , precio, cantidad, categoria) {
        this.id = id ;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.categoria = categoria; 
    } 
}
const producto1 = new Producto (0, "Teclado",20000,16,"periferico")
const producto2 = new Producto (1, "Mouse",17000,3,"periferico")
const producto3 = new Producto (2, "Auriculares",50000,10,"periferico")
const producto4 = new Producto (3, "Pc",210000,19,"computadora")
const producto5 = new Producto (4, "Pantalla",76000,4,"periferico")
    
const PRODUCTOS = []

PRODUCTOS.push(producto1, producto2, producto3, producto4, producto5)

const productosOrdenados = PRODUCTOS.slice().sort(( a, b ) => {
    if ( a.nombre < b.nombre ) {
        return -1;
    } else if ( a.nombre > b.nombre ) {
        return 1;
    } else {
        return 0;
    }
})
console.log(productosOrdenados)



const productosListado = PRODUCTOS.map(producto => "• "+producto.nombre).join("\n")

const carrito = []

while(true){

    const productoDeseado = prompt(`¿Que producto desea comprar? : \n${productosListado}`)
    if(!productoDeseado){
        break
    }
    const productoEncontrado = PRODUCTOS.find(producto => producto.nombre.toLowerCase() === productoDeseado.toLowerCase())

    if (productoEncontrado){
        if (productoEncontrado.cantidad > 0){
            carrito.push(productoEncontrado)
            alert(`Su producto esta en camino :
            Nombre : ${productoEncontrado.nombre}
            Precio : ${productoEncontrado.precio}
            Categoria : ${productoEncontrado.categoria}
            ID : ${productoEncontrado.id}
            ${productoEncontrado.cantidad --}
            Stock despues de compra : ${productoEncontrado.cantidad}
            Carrito de compras :\n${carrito.map(producto => "• "+ producto.nombre).join("\n")}`)
        } else {
            alert(`Producto agotado`)
        }
    } else {
        alert(`Producto no encontrado elija uno de la lista`)
    } 
    console.log(carrito)
    
}
