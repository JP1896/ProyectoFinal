function enviarJSON(){ 
  let n =[0,0,0,0,0,0]
  n[0] = parseInt(document.querySelector('#n1').value)
  n[1] = parseInt(document.querySelector('#n2').value)
  n[2] = parseInt(document.querySelector('#n3').value)
  n[3] = parseInt(document.querySelector('#n4').value)
  n[4] = parseInt(document.querySelector('#n5').value)
  n[5] = parseInt(document.querySelector('#n6').value)

  // XHR object
  let request = new XMLHttpRequest();
  let reqUrl = "http://localhost:8085/shoppingSpreeBack/obtenerArticulos"
  
  // Crear conexion
  request.open('GET', reqUrl);
  
  request.responseType = 'json';
  request.send();

  request.onload = function() {
    articulos = request.response
    let m = [0,0,0,0,0,0]
    let j = 0

    for(let i = 0; i < m.length; i++){
      
      if(n[i] != 0){
        m[i] = n[i]*articulos[i].monto
        j+=1

        // XHR object
        let xhr = new XMLHttpRequest()
        let url = "http://localhost:8085/shoppingSpreeBack/agregarOrden"

        // Crear conexion
        xhr.open("POST", url)
        xhr.setRequestHeader("Content-Type", "application/json")
        var data = JSON.stringify({ "id": j, "nombre": articulos[i].nombre, "cantidad": n[i], "monto": m[i] })
        xhr.send(data)
        console.log(data)
      }  
    }
    
    location.href = "http://localhost:8084/shoppingSpree/orden"

    // console.log("contador: ", contador)
    // console.log(m,n)
    // console.log(Object.keys(articulos).length)
  }
}

function borrarOrden(){
  // XHR object
  let xhr = new XMLHttpRequest()
  let url = "http://localhost:8085/shoppingSpreeBack/borrarOrdenAll"
  
  // Crear conexion
  xhr.open('GET', url);
  xhr.responseType = 'json';
  xhr.send();

  xhr.onload = function() {
    console.log("Elementos borrados")
  }
}

function enableBtn(){
  document.getElementById("placeOrderbtn").disabled = false;
}


/*
fetch("http://localhost:8085/shoppingSpreeBack/obtenerOrden")
      .then(res=>res.json())
        .then(datos=>{
          console.log(datos)



        })
        .catch(err=>{
          console.log("Servidor desconectado")
          console.log(err)
        })*/
