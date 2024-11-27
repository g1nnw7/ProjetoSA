//imput jogar dados no localstorage
document.addEventListener('DOMContentLoaded', (event) => {
    console.log('Documento carregado e pronto.');
    const form = document.getElementById('cadastroForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const alimento = document.getElementById('alimento').value;
        const caloria = document.getElementById('caloria').value;
        const proteina = document.getElementById('proteina').value;
        const carbo = document.getElementById('carbo').value;
        const gordura = document.getElementById('gordura').value;
        const macro = { alimento, caloria, proteina, carbo, gordura};
        let macros = JSON.parse(localStorage.getItem('macros')) || [];
        macros.push(macro);
        localStorage.setItem('macros', JSON.stringify(macros));
        alert('Alimento cadastrado com sucesso');
        form.reset();
    });
});

// jogar dados para a tabela
document.addEventListener('DOMContentLoaded', (event) => {
    let dados = JSON.parse(localStorage.getItem('macros')) || [];
    let tabela = document.getElementById('tabelaDados').getElementsByTagName('tbody')[0];    
       for (let dado of dados) {
        let linha = tabela.insertRow();
        let celulaalimento = linha.insertCell(0);
        let celulacal = linha.insertCell(1);
        let celulaprot = linha.insertCell(2);
        let celulacarbo = linha.insertCell(3);
        let celulagord = linha.insertCell(4);

        celulaalimento.innerHTML = dado.alimento;
        celulacal.innerHTML = dado.caloria;
        celulaprot.innerHTML = dado.proteina;
        celulacarbo.innerHTML = dado.carbo;
        celulagord.innerHTML = dado.gordura;
    }

});

// Obtém o modal
let modal = document.getElementById("myModal");
// Obtém o elemento <span> que fecha o modal
let span = document.getElementsByClassName("close")[0];
// Quando o usuário clicar no <span> (x), fecha o modal
span.onclick = function() {
    modal.style.display = "none";
}
// Quando o usuário clicar em qualquer lugar fora do modal-content, fecha o modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

