//consultar la api
const consultarPokemon = (id,number) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(response=>{ //para trabajar con promesas se requiere el then
        return response.json()
    })
    .then(data=>{
        pintarPokemon(data,number)
    })
    .catch(error=>{
        console.log(error)
    })
}

//generar los pokemones de forma random
const btnSeleccionar = () => {
    let primerpokemon = Math.round(Math.random()*150)
    let segundopokemon = Math.round(Math.random()*150)
    consultarPokemon(primerpokemon,1)
    consultarPokemon(segundopokemon,2)
}

//invocar la funcion
btnSeleccionar()

//Obtener la referencia dek div donde se va a pintar los pokemon
const lista = document.getElementById("listarpokemon")

//Funcion para poder presentar los pokemon
const pintarPokemon = (data, id) =>{
    let item = lista.querySelector(`#pok-${id}`)
    item.getElementsByTagName("img")[0].setAttribute("src", data.sprites.front_default)
    item.getElementsByTagName("p")[0].innerHTML = data.name
}