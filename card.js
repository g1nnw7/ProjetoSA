let verificarUsuario = JSON.parse(localStorage.getItem("bancoDeDados"));
let user = JSON.parse(localStorage.getItem("user"));
function saibaMais1(){
    
    window.location.href= "index.html";
}

function saibaMais2(){
    window.location.href= "calcMacro.html"
}

function SaibaMais3(){
    window.location.href= "dieta.html"
}
document.addEventListener("DOMContentLoaded", function(){

    console.log(verificarUsuario);

    if(verificarUsuario == null){
        document.getElementById("registrarButton").style.display = 'block';
        document.getElementById("loginButton").style.display = 'block';
        document.getElementById("botaoRegistrar");
    }
    else{
        document.getElementById("registrarButton").style.display = 'none';
        document.getElementById("loginButton").style.display = 'none';
        document.getElementById("botaoRegistrar").innerText = user;

    }
})