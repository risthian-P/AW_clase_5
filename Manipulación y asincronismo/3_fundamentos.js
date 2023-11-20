
// const conexionBD = (datosConexion) => {

//     return new Promise((resolve,reject)=>{

//         setTimeout (()=>{
//             datosConexion ? resolve("conexion Ok") : reject("Conexion Error")
//         })

//     })
// }

// conexionBD(true)
//     .then((respuesta)=>{console.log(respuesta)})
//     .catch((error)=>{console.log(error)})

//ejemplos de trabajar con promesas, forma 1
// let url = "https://jsonplaceholder.typicode.com/users"
// const obtenerDatos = fetch(url)
//     .then(peticion => peticion.json())
//     .then(respuesta => console.log(respuesta))
//     .catch(error => console.log(error))


//ejemplos de trabajar con promesas, forma 2
// const conectarAPI = async() => { //contracionn de funcion nfn, async capturar forma asincrona
//     try{
//         const respuesta = await fetch(url) 
//         const data = await respuesta.json()
//         console.log(data)
//     }catch(error){
//         console.log(error)
//     }
//  }

// conectarAPI()

const conexionBD = async () => {
    try {
        const r = await conexionBD(true)
        console.log(r)
    } catch (error) {
        console.log(error)
    }
 }

 