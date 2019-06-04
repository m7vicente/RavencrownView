import React from 'react';

function mudaFoto(){
    var valor = document.getElementById("fileInput").files;
    console.log(valor);
    document.getElementById("foto").src = window.URL.createObjectURL(valor);
}

export default mudaFoto;