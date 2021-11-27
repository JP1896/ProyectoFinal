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
    let html = ''
    let total = 0
    orden.forEach(orden => {
        let suma = orden.monto
        let htmlSegment = `<div class="row mt-3">
                            <div class="col-md-6">
                                <p>Producto: ${orden.nombre}</p>
                            </div>
                            <div class="col-md-2">
                                <select class="form-select" id="n${orden.id}" name="n${orden.id}" onchange="actualizarOrden(${orden.id},${orden.precioIndiv})">
                                    <option value="${orden.cantidad}">${orden.cantidad}</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                </select>
                            </div>
                            <div class="col-md-2"></div>
                            <div class="col-md-2">
                                <p><strong>$ ${orden.monto}</strong></p>
                            </div>
                            <div class="col-md mt-2">
                                <button type="button" class="btn btn-outline-danger" id="btn${orden.id}" onclick="borrarOrden(${orden.id})">Borrar</button>
                            </div>
                        </div>
                        <hr class="row mt-3"/>`;

        html += htmlSegment
        total += suma
    })

    console.log(orden)
    document.getElementById('inicio').innerHTML = html
    document.getElementById('total').innerHTML = `<h5>Total: <strong>$${total}</strong></h5>`
}

async function borrarOrden(id){

    // XHR object
    let xhr = new XMLHttpRequest()
    let url = "http://localhost:8085/shoppingSpreeBack/borrarOrden"

    // Crear conexion
    xhr.open("POST", url)
    xhr.setRequestHeader("Content-Type", "application/json")
    var data = JSON.stringify({ "id": id })
    xhr.send(data);
    console.log("borrar: " + data)
    renderOrden()
}

async function actualizarOrden(id,precioI){
    let idVar = "n"+id
    var selectBox = document.getElementById(idVar);
    var cantidad = selectBox.options[selectBox.selectedIndex].value;

    // XHR object
    let xhr = new XMLHttpRequest()
    let url = "http://localhost:8085/shoppingSpreeBack/actualizarOrden"

    // Crear conexion
    xhr.open("POST", url)
    xhr.setRequestHeader("Content-Type", "application/json")
    var data = JSON.stringify({ "id": id , "cantidad": cantidad, "monto": precioI*cantidad})
    xhr.send(data);
    console.log("actualizar: " + data)
    renderOrden()
}

function perfil(){
    location.href = "http://localhost:8084/shoppingSpree/perfil"
}