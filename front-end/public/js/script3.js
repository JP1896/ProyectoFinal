async function getOrden() {
    let url = 'http://localhost:8085/shoppingSpreeBack/obtenerOrden'
    try {
        let res = await fetch(url)
        return await res.json()
    } catch (error) {
        console.log(error)
    }
}

async function renderOrden() {
    let orden = await getOrden()
    let total = 0
    let cantidad = 0
    orden.forEach(orden => {
        let suma = orden.monto
        total += suma
        cantidad++
    })

    console.log(orden)
    document.getElementById('cantidadNum').innerHTML = `<strong>${cantidad}</strong>`
    document.getElementById('totalNum').innerHTML = `<strong>$${total}</strong>`
}

function postPerfil(){
    nombre = document.querySelector('#nombre').value
    calle = document.querySelector('#calle').value
    noExt = parseInt(document.querySelector('#noExt').value)
    tel = parseInt(document.querySelector('#tel').value)
    email = document.querySelector('#email').value

    var now = new Date();
    console.log(now)

    let xhr = new XMLHttpRequest()
    let url = "http://localhost:8085/shoppingSpreeBack/agregarPerfil"

    // Crear conexion
    xhr.open("POST", url)
    xhr.setRequestHeader("Content-Type", "application/json")
    var data = JSON.stringify({ "nombre": nombre, "calle": calle, "noExterior": noExt, "telefono": tel, "email": email, "fecha": now})
    xhr.send(data)
    console.log(data)
    location.href = "http://localhost:8084/shoppingSpree/pago"
}

function postPago(){
    noTarjeta = parseInt(document.querySelector('#noTarjeta').value)
    nombreT = document.querySelector('#nombreT').value
    exp = document.querySelector('#exp').value
    codigo = parseInt(document.querySelector('#codigo').value)

    var now = new Date();
    console.log(now)

    let xhr = new XMLHttpRequest()
    let url = "http://localhost:8085/shoppingSpreeBack/agregarPago"

    // Crear conexion
    xhr.open("POST", url)
    xhr.setRequestHeader("Content-Type", "application/json")
    var data = JSON.stringify({ "numero": noTarjeta, "nombre": nombreT, "fechaExp": exp, "codigo": codigo })
    xhr.send(data)
    console.log(data)
    location.href = "http://localhost:8084/shoppingSpree/gracias"
}