let estadoSelect = document.getElementById("estado");
estadoSelect.addEventListener("change", function(){
    let selectEstado = estadoSelect.value;
    console.log("Estado seleccionado: " + selectEstado);
});