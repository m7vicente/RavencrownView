function NightMode(){
    localStorage.setItem('mode', (localStorage.getItem('mode') || 'dark') === 'dark' ? 'light' : 'dark'); 
    localStorage.getItem('mode') === 'dark' ? document.querySelector('body').classList.add('dark') : document.querySelector('body').classList.remove('dark')
    
    if(localStorage.getItem('mode') === 'dark'){
        document.getElementById("configuracoes").setAttribute("class", "font");
        document.getElementById("aulas").setAttribute("class", "font");
        document.getElementById("auto").setAttribute("class", "font");
        document.getElementById("code").setAttribute("class", "font");
        document.getElementById("reformas").setAttribute("class", "font");
        document.getElementById("culinaria").setAttribute("class", "font");
        document.getElementById("domesticos").setAttribute("class", "font");
        document.getElementById("configuracoes").setAttribute("class", "font");
        document.getElementById("vestuario").setAttribute("class", "font");
    } else {
        document.getElementById("configuracoes").setAttribute("class", "font");
        document.getElementById("aulas").removeAttribute("class", "font");
        document.getElementById("auto").removeAttribute("class", "font");
        document.getElementById("code").removeAttribute("class", "font");
        document.getElementById("reformas").removeAttribute("class", "font");
        document.getElementById("culinaria").removeAttribute("class", "font");
        document.getElementById("domesticos").removeAttribute("class", "font");
        document.getElementById("configuracoes").removeAttribute("class", "font");
        document.getElementById("vestuario").removeAttribute("class", "font");
    }
}

export default NightMode;