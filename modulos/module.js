const login = (user, pass) => {
    if (!user && pass) return console.log("No autorizado")
    console.log(`Welcome ${user}`)
}
const LIKES = 500
// importar y exportar con commonjs y es modules

//COMMONJS
/*
//es para exportar la funcion, o cualquier cosa
// Debe ser del mismo nombre de la funcion
module.exports = login 
*/
/*
//Para exportar varias cosas

module.exports = {
    login,
    LIKES
}
*/

//ES MODULES
//Para crear el package ingresamos (npm init --y) en el terminal
//Para ello debemos dirigirnos a package.json y añadir "type": "module", debajo del main
export default login //1 dato

//exportar varios datos
export {
    login, 
    LIKES
}