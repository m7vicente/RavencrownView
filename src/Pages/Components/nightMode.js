function NightMode(){

    var swt = document.getElementById("someSwitchOptionWarning");

    if(swt.checked){
    document.getElementById("body").setAttribute("class", "body");
    var label = document.getElementsByTagName('label');
    
    for(var i = 0; i < label.length; i++){
        label[i].setAttribute("class", "font");
    }

    var h5 = document.getElementsByTagName("h5");

    for(var i = 0; i < h5.length; i++){
        h5[i].setAttribute("class", "font");
    }
}

}

export default NightMode;