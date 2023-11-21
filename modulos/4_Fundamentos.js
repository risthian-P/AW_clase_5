//COMMONJS
/*
//import de una cosa
const login = require('./module')
//para importar es necesario nombrar en require el archivo donde se encuentra la funcion
login('Peter', "123")
*/

/* 
//import de n cosas
const {login,LIKES} = require('./module')
login('Peter', "123")
console.log(LIKES)
*/

//ES MODULES
/* 
//1 dato
import login from './module.js'
login ("Peter", "123")
*/
/* 
//VARIOS archivos
import {login, LIKES} from './module.js'
login("Peter","123")
console.log(LIKES)
*/
