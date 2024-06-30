const productoInput =document.querySelector("#producto");
const valorInput=document.querySelector("#valor");
const agregarInput=document.querySelector("#agregar");
let suma=0;
const productos=document.querySelector("#productos")
let nombreProducto=null;
let valorProducto=null;
let precioTotal=document.querySelector("#producto-total")

function agregarProducto(e){
    if(productoInput.value!==""){
        nombreProducto=productoInput.value;
        console.log(nombreProducto);
    }
   
    
}
function agregarValor(){
    if(valorInput.value!==""){
        valorProducto=valorInput.value;
        console.log(valorProducto)
    }
    
}
function agregarYsumar(e){
    e.preventDefault();
    let productoNuevo=document.createElement("p");
    productoNuevo.textContent=productoInput.value;
    console.log(productoNuevo);
    if(nombreProducto!==null&& valorProducto!==null){
        productos.appendChild(productoNuevo)
        suma+=parseFloat(valorProducto);
        precioTotal.textContent=`total:$ ${suma}`;
        nombreProducto=null;
        valorProducto=null;
        valorInput.value=null;
        productoInput.value=null;
    
    }
    else{

    alert("error");
    console.log("error");
    }   
}

valorInput.addEventListener("input",agregarValor);
productoInput.addEventListener("input",agregarProducto);
agregarInput.addEventListener("click",agregarYsumar);