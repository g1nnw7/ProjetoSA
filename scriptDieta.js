function calcularGMT(){
    let genero, peso, altura, idade, tmb, tmt1, tmt2, tmt3, tmt4, tmt5, resultado

    let generoSelecionado = null;
    generos = document.getElementsByName("genero");
    event.preventDefault();
    for (genero of generos) {
      if (genero.checked) {
        generoSelecionado = genero.value;
        break;
      }
    }
    peso = document.getElementById("peso").value;
    altura = document.getElementById("altura").value;
    idade = document.getElementById("idade").value;

    if (generoSelecionado == "masculino"){
        tmb = 88.362 + (13.397 * peso) + (4.799 * altura) - (5.677 * idade);
    }
    else{
        tmb = 447.593 + (9.247 * peso) + (3.098 * altura) - (4.330 * idade);
    }

    tmt1 = tmb*1.2;
    tmt2 = tmb*1.375;
    tmt3 = tmb*1.55;
    tmt4 = tmb*1.725;
    tmt5 = tmb*1.9;
    // Para estimar o gasto calórico diário, é preciso multiplicar a TMB pelo fator de atividade física, que considera a energia gasta em atividades como trabalhar, limpar a casa e praticar exercícios. Os fatores de atividade física são: Sedentário: TMB x 1,2, Levemente ativo: TMB x 1,375, Moderadamente ativo: TMB x 1,55, Muito ativo: TMB x 1,725, Extremamente ativo: TMB x 1,9. 

    resultado = `
    Segue as taxas metabólicas totais:
    Sedentário: ${tmt1.toFixed(2)} kcal/dia
    Levemente ativo: ${tmt2.toFixed(2)} kcal/dia
    Moderadamente ativo: ${tmt3.toFixed(2)} kcal/dia
    Muito ativo: ${tmt4.toFixed(2)} kcal/dia
    Atleta: ${tmt5.toFixed(2)} kcal/dia`
    ;

    document.getElementById("resultado").innerText = resultado;

    
   
    
  }
function buttonTJ(){
    window.location.href="home.html"
}