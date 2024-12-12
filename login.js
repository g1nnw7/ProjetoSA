const campoLogin = document.getElementById("login");
const campoSenha = document.getElementById("password");
function login(){

    let login = campoLogin.value;
    let senha = campoSenha.value;
    let mensagem = "Usuário ou senha incorreta!";
    let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados"));
    if (bancoDeDados == null){
        mensagem = "Nenhum usuário cadastrado até o momento";
    }
    else{
        for(let usuario of bancoDeDados){
            if(usuario.login == login && usuario.senha == senha){
                mensagem = "Parabéns, você logou!";
                localStorage.setItem("logado", JSON.stringify(usuario));
                localStorage.setItem("user", JSON.stringify(usuario.login));
                window.location.href= "card.html";
                break;
            }
        }
    }
    alert(mensagem);
}
