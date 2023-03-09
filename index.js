function validate(){
    var nombre1 = document.getElementById("nombre1").value;
    var nombre2 = document.getElementById("nombre2").value;
    var symbol = document.getElementById("symbol").value;
    var json = '{"nombre1":'+ nombre1+ ',"nombre2":'+ nombre2+ ',"symbol":'+ symbol+ '}'
    nombre1=parseInt(nombre1);
    nombre2=parseInt(nombre2)
    const xhr = new XMLHttpRequest();
    xhr.open("POST","http://localhost/calculate/"+nombre1+"/"+nombre2+"/"+symbol);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onload = () => {
      alert("calcul de "+nombre1 + " " + symbol + " " + nombre2 + " = " + xhr.response)
      if (xhr.status == 200) {
        data = xhr.response;
        
      } else {
        console.log(`Error: ${xhr.status}`);
      }
    };
    xhr.send(json);
}  