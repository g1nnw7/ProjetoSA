const campoNovoLogin = document.getElementById("novoLogin");
const campoNovaSenha = document.getElementById("novaSenha");
const campoRepSenha = document.getElementById("repSenha");

function cadastra(){

    if(campoNovaSenha.value == campoRepSenha.value){
        const usuario = {
            login: campoNovoLogin.value,
            senha:campoNovaSenha.value,
        };
        let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados"));
        if (bancoDeDados == null){
            bancoDeDados = [];
        }

        bancoDeDados.push(usuario);
        localStorage.setItem("bancoDeDados", JSON.stringify(bancoDeDados));
        alert("Usuário cadastrado com sucesso!");
        campoNovoLogin.value = null;
        campoNovaSenha.value = null;
        campoRepSenha.value = null;
    }
    else{
        alert("As senhas são diferentes!")
    }
    window.location.href= "login.html";
}