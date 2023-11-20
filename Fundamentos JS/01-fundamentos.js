console.log("Hello JS")

//comentario de una linea
/*  comentario 
        multi
            linea*/

//primero es necesario inicializar la variable con let, o const 

let PuntosVida //para definir una variable cambiante
let Saldo 

let dato = 1 //numerico
dato = 12.4 //float
dato = "hola" //String
dato = '@' //caracter especial
dato = true //booleano
dato = [12, true, 89] //arreglo
dato = { // libreria
    nombre: "Cristhian",
    edad: 23
}
console.log(dato)

const variable = 12 // es una variable de valor constante

let nombreJuego = "Mario Kart"
console.log(typeof nombreJuego) //tipo de variable
console.log("Palabras a mayusculas",nombreJuego.toUpperCase())

let PuntosDVida = "45 p"
console.log(nombreJuego +" "+ PuntosDVida)
console.log(`${nombreJuego} ${PuntosDVida}`) //permite mezclar variables con texto (TEMPLATE LITERAL)

const numerodeVidas = 20
const numerodePuntos = "21"
console.log(`Total = ${numerodeVidas + +numerodePuntos}`) //cambia de String a Number aumentando un + a la variable con String (+numerodePuntos)

console.log(3 + 4 * 5)


//booleans
let saldo1 = 500
let saldo2 = 1000

if (saldo1 > saldo2){
    console.log("Pagar")
}else{
    console.log("Seguir consumiendo")
}

//operador ternario

const respuesta = saldo1 > saldo2 ? "pagar" : "Seguir consumiendo"
console.log(respuesta)

const tareas = ["trabajar", "comer", "Dormir"]
const usuario = {
    nombre:"Joe",
    sjkills:true
}

tareas.forEach((t,i)=>console.log(i,t)) //es una funcion callback 

const nuevasTareas = tareas.map(t => t. toUpperCase()) //map me devuelve un nuevo arreglo, y el arreglo original no se ve afectado
console.log(nuevasTareas)
console.log(tareas)

//funciones
console.log('\n' + "**************" + '\n')
function hello(){
    console.log("Demo de funciones")
}
hello()
hello()
hello()

function declarada (){
    console.log("funcion declarada")
}
declarada()

const expresada = function(){
    console.log("funcion expresada")
}
expresada()

console.log(function (){
    return "Funcion anonima"
}())

function parametros (par1,par2){
    console.log(`${par1} ${par2}`)
}
parametros('JS','React')

const preciofinal = function (a,b,...args){
    console.log(a,b,args)
}
preciofinal(10,22,55,45,11,33,22) //a partir del 55 se guardan los valores en args como arreglo y pueden añadirse otros mas


//funcion que retorne funcion anonima
function saved(){
    return function(){
        return "hello NextJS"
    }()
}
console.log(saved())

function login (user, password){
    console.log("Usuario y contraseña")
}
/*
const validar = function(user, password){
    console-log("Usuario y contraseña")
} 
*/
//funcion flecha
const validar = (user, password) => {
    console-log("Usuario y contraseña")
}

//