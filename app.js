//1 --------------------------------------------------------
const mascotas = ["perro","gato","peces"];

//1.1
mascotas.push("canario");
console.log(mascotas);

//1.2
console.log(mascotas[0]);

//1.3
console.log(mascotas.length);

//1.4
console.log(mascotas.indexOf("canario"));

//2 --------------------------------------------------------
const nombres = ["Julia","Luisa","Pedro","Lanús","Ana"];
nombres.forEach(nombre => console.log(nombre));

//3 --------------------------------------------------------
const numeros = [2,3,45,100,50];

let sumaTodos = (lista) => {
    let num = 0;
    for (i of lista) {
        num += i;
    };
    return num;
};

console.log(sumaTodos(numeros));

//4 --------------------------------------------------------
const nombres2 = ["Juan","Pedro","Ana","Maria","Wally","Sofia"];

//4.1
console.log(nombres2.indexOf("Wally"));

//4.2
let indiceNombre = (nombres) => {
    nombres.forEach(nombre => console.log(nombre + ": " + nombres2.indexOf(nombre)));
};

indiceNombre(nombres2);

//4.3
let indiceWally = (nombres) => {
    let wally = nombres.indexOf(nombres.find(nombre => nombre === "Wally"));
    console.log(wally);
};

indiceWally(nombres2);

//5
let celular = {
    nombre: "celular",
    marca: "Samsung",
    modelo: "Galaxy A7",
    precio: 67000
}

//5.1
console.log(celular.modelo);

//5.2
let cambiaPrecio = (precio) => { 
    return celular.precio = precio;
};

cambiaPrecio(80000);
console.log(celular.precio);

//5.3
celular.color = "rojo";

console.log(celular.color);

//6 --------------------------------------------------------
const productos = [
    {
        nombre: "notebook",
        marca: "Dell",
        modelo: 7490,
        precio: 158000,
        color: "gris"
    },
    {
        nombre: "zapatillas",
        marca: "Adidas",
        modelo: "Wings",
        precio: 8500,
        color: "negro"
    },
    {
        nombre: "remera",
        marca: "Nike",
        modelo: "Dry Academy",
        precio: 3290,
        color: "azul"
    }
];

//6.1
productos.push(celular);
console.log(productos);

//6.2
let precioProductos = (lista) => {
    lista.forEach((producto) => console.log(producto.nombre + ": $ " + producto.precio))
}

precioProductos(productos);

//6.3
productos[1].precio = 9000;
console.log(productos[1].precio);

//6.4
function sumaPrecios(lista) {
    let sumaTotal = 0;
    let i = 0;
    for (items of lista) {
        sumaTotal += lista[i].precio;
        i++;
    }
    console.log(sumaTotal);
    return sumaTotal;
};

sumaPrecios(productos);