


let pedido_1 = 'Si'
let pedido_2= 'No'

let nombre = prompt('Ingrese su Nombre y Apellido').toUpperCase()
alert('Hola' +' '+ nombre)
let edad = Number(prompt('Ingrese su Edad'))
while (isNaN(edad) || edad < 18){
    alert('Ingrese un Numero Porfavor')
    edad = Number(prompt('Ingrese su Edad'))
}

if (edad >= 18){
    alert("Bienvenido al Establecimiento")
    
  }else if (edad < 17) {
 console.log('No puede ingresar al Establecimiento')
  }
  
  comprar('Comidas')
  comprar ('Bebidas')
 

  

 

function comprar (comidas, bebidas){
    let pregunta = prompt('Que ver el menu de ' + ' ' + comidas )
    
    if (pregunta == pedido_1.toLowerCase()){

        console.log("En un momento se lo alcamzamos")
        
    } else if (pregunta == pedido_2.toLowerCase()){

        console.log("Muchas Gracias")
        
    }
    
}

