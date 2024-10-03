

let menu = {
  comida: ['Parrillada , Fideos con salsa , Ñoquis ala crema, Sorrentinos con estofado , Ensalada Cesar '],
  bebida: ['Vino , Cerveza , Jugo , Agua , Bebidas gasificadas'],
  postre: ['Helados , Pasteles , Gelatinas'],
}

let nombre = prompt('Ingrese nombre y apellido').toUpperCase();
alert('Hola' + ' ' + nombre);

let edad = pedir_num('Ingrese su edad', 10, 95);

if(edad < 18) {
  alert ('No puedes ingresar al establecimiento')
}else {
  alert('Bienvenido al Establecimiento')
}


while (edad > 18) {

  let pregunta = pedir_num('Seleccione el Menu que desea ver \n1- Menu Comidas \n2- Menu Bebidas \n3- Menu Postres', 1, 3);

  if (pregunta == 1) {
    console.log('Aca tiene el menu de Comidas: ' + menu.comida);
  } else if (pregunta == 2) {
    console.log('Aca tiene el menu de Bebidas: ' + menu.bebida);

  } else {
    console.log('Aca tiene el menu de los Postres: ' + menu.postre);
  }

  if(confirm('¿Quieres salir?')) {
    break;
  }
}
 

while(true){
  pedido('Que va ordenar')
  alert('Pedido agregado')
  if(confirm('Desea salir?')) break ;
}







function pedido(texto) {
  let array = []
  array.push(prompt(texto))
  return console.log(array)
}

function pedir_num(texto, min, max) {

  let num = Number(prompt(texto))

  while (isNaN(num) || num < min || num > max) {
    alert('Ingrese un numero correcto porfavor')
    num = Number(prompt(texto))

  }
  return num
}
