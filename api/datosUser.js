let url = "https://jsonplaceholder.typicode.com/users"

const obtenerUsuarios = () => {
    let response = fetch(url)
    if(response.ok){
        throw new Error ("Ocurrio un error")
    }

    let data = response.json()
    pintarUsuarios(data)
}

obtenerUsuarios()

const pintarUsuarios = (data) => {
    let body = ""
    for (let i = 0; i <= data.length ; i++){
        body += `<tr><td>${data[i],id}</tr></td>`
    }
    document.getElementById("data").innerHTML = body
}