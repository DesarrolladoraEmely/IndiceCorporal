//alert("estoy vinculado")
let inputPesoUsuario=document.getElementById("pesousuario")
let inputAlturaUsuario=document.getElementById("alturausuario")
let botonFormulario=document.getElementById("boton")

//Detectando evento de clic eventos en pantalla
// Un evento es una interaccion del usuario (humano) con el codigo (la pagina web)
botonFormulario.addEventListener("click",function(evento){

    //1.se inica desactivando el comportamiento por defecto
    evento.preventDefault()

    //2.provamos  que el evento se escucha con exito
    //3.creamos variables para almacenar los datros del usuario
let estaturaUsuario=inputAlturaUsuario.value
let pesoUsuario=inputPesoUsuario.value

    //4.se crea  una variable para el rersultado
let resultado=document.getElementById("resultado") 

    //5.se modifica el resultado con los value

    //6.se calcula lo pedido
let calculoIMC=pesoUsuario/(estaturaUsuario*estaturaUsuario)
    //6A.se crea variable para almacenar la imagen 
let imagen=document.getElementById("foto")

    //7.se debe decidir sobre el resultado 
if(calculoIMC<18.5){
    resultado.textContent="Estas llevados, alimentate"
    imagen.src="./img/bajopeso.png"
}
else if(calculoIMC>=18.5 && calculoIMC<24.9){
    resultado.textContent="Estas melo, felicitaciones"
    imagen.src="./img/normal.png"
}
else if(calculoIMC>=24.9 && calculoIMC<29.29){
    resultado.textContent="Deja de mecatiar lengua e' burro, tienes sobre peso"
    imagen.src="./img/obeso.png"
}
else if(calculoIMC>=29.9 && calculoIMC<34.9){
    resultado.textContent="No consumas comida chatarra, estas obes@"
}
else{
    resultado.textContent="San pedro te espera, hasta siempre..."
}

    /*Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
      });*/
})