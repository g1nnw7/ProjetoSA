function carregarTabela() {
    // Função para carregar e exibir os dados da tabela
    const tabela = document.getElementById('tabelaDados').getElementsByTagName('tbody')[0];
    tabela.innerHTML = '';
    // Obter os usuários armazenados no LocalStorage ou um array vazio se não houver dados
    let macros = JSON.parse(localStorage.getItem('macros')) || [];
    // Iterar sobre cada usuário para criar as linhas da tabela dinamicamente
    for (let macro of macros) {
        let linha = tabela.insertRow()
        let celulaalimento = linha.insertCell(0);
        let celulacal = linha.insertCell(1);
        let celulaprot = linha.insertCell(2);
        let celulacarbo = linha.insertCell(3);
        let celulagord = linha.insertCell(4);
        let celulaAcoes = linha.insertCell(5);

        celulaalimento.innerHTML = macro.alimento;
        celulacal.innerHTML = macro.caloria;
        celulaprot.innerHTML = macro.proteina;
        celulacarbo.innerHTML = macro.carbo;
        celulagord.innerHTML = macro.gordura;
        celulaAcoes.innerHTML = `<button class="excluirBtn" data-id="${macro.id}" data-nome="${macro.nome}">Excluir</button>`;
    }
    // Adicionar um ouvinte de evento para cada botão de excluir gerado dinamicamente
    let botoes = document.querySelectorAll('.excluirBtn');
    for (let button of botoes) {
        button.addEventListener('click', function () {
            let macroAlimento = this.getAttribute('data-nome');
            let idAlimento = this.getAttribute('data-id');
            mostrarModal(macroAlimento, idAlimento); // Chamar função para exibir o modal de confirmação
        });
    }
}


//imput jogar dados no localstorage
document.addEventListener('DOMContentLoaded', (event) => {
    console.log('Documento carregado e pronto.');
    const form = document.getElementById('cadastroForm');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const alimento = document.getElementById('alimento').value;
        const caloria = document.getElementById('caloria').value;
        const proteina = document.getElementById('proteina').value;
        const carbo = document.getElementById('carbo').value;
        const gordura = document.getElementById('gordura').value;
        let macros = JSON.parse(localStorage.getItem('macros')) || [];
        let id = macros.length ? macros[macros.length - 1].id + 1 : 1;
        // Verifica se o ID já está em uso. Se estiver, incrementa o ID até encontrar um valor único.
        while (macros.some(macro => macro.id === id)) {
            id++;
        }
        const macro = { id, alimento, caloria, proteina, carbo, gordura };

        macros.push(macro);
        localStorage.setItem('macros', JSON.stringify(macros));
        myModal.style.display = "block"
        form.reset();
        carregarTabela();
    });
});
// Obtém o modal
let myModal = document.getElementById("myModal");

// Obtém o elemento <span> que fecha o modal
let span = document.getElementsByClassName("close")[1];

// Quando o usuário clicar no <span> (x), fecha o modal
span.onclick = function () {
    myModal.style.display = "none";
}
// Quando o usuário clicar em qualquer lugar fora do modal, fecha o modal
myModal.onclick = function (event) {
    if (event.target == myModal) {
        myModal.style.display = "none";
    }
}
let modalExcluir = document.getElementById("modalExcluir");
let spanExcluir = document.getElementsByClassName("close")[0];
let confirmarExcluir = document.getElementById("confirmarExcluir");
let cancelarExcluir = document.getElementById("cancelarExcluir");
let usuarioNomeElemento = document.getElementById("macroAlimento");
let usuarioParaExcluirId = '';
function mostrarModal(macroAlimento, idAlimento) {
    usuarioParaExcluirId = idAlimento;
    usuarioNomeElemento.textContent = macroAlimento;
    modalExcluir.style.display = "block";
}
// TABELA
document.addEventListener('DOMContentLoaded', (event) => {
    // Esta função é executada quando o documento HTML é completamente carregado

    carregarTabela(); // Chamar a função para carregar a tabela quando o documento é carregado
    // Definição das variáveis para o modal de confirmação

    // Função para exibir o modal de confirmação

    // Ouvinte de evento para fechar o modal quando clicar no 'x'
    spanExcluir.onclick = function () {
        modalExcluir.style.display = "none";
    }
    // Ouvinte de evento para fechar o modal ao clicar no botão Cancelar
    cancelarExcluir.onclick = function () {
        modalExcluir.style.display = "none";
    }
    // Ouvinte de evento para confirmar a exclusão quando clicar no botão Excluir
    confirmarExcluir.onclick = function () {
        // Obter os usuários do LocalStorage ou um array vazio se não houver dados
        let macros = JSON.parse(localStorage.getItem('macros')) || [];
        // Filtrar o usuário a ser excluído pelo ID
         macros = macros.filter(macro => macro.id != usuarioParaExcluirId);
        // Atualizar o LocalStorage sem o usuário excluído
        localStorage.setItem('macros', JSON.stringify(macros));
        // Fechar o modal após a exclusão e recarregar a tabela
        modalExcluir.style.display = "none";
        carregarTabela(); // Recarregar a tabela após exclusão
    }
    // Ouvinte de evento para fechar o modal ao clicar fora dele
    window.onclick = function (event) {
        if (event.target == modalExcluir) {
            modalExcluir.style.display = "none";
        }
    }
});



document.getElementById('resetCalorias').addEventListener('click', () => {
    
})
