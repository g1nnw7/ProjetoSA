document.addEventListener("DOMContentLoaded", function(){

  let IMC = JSON.parse(localStorage.getItem("imcResultado"))
  if(IMC < 18.5){
    // document.getElementById("texto-1").innerHTML = "Necessário Ganho de peso saudável - Dieta hipercalórica (Acima das necessidades diárias)";
    document.getElementById("caixaid1").innerHTML = `Necessário Ganho de peso saudável - Dieta hipercalórica (Acima das necessidades diárias)`;
    document.getElementById("caixaid2").innerHTML = `Focar em alimentos ricos em nutrientes e calorias densas (ex: abacate, castanhas, óleos saudáveis). Incluir proteínas para ganho muscular (ex: carnes magras, ovos, leguminosas).</p>`
    document.getElementById("caixaid3").innerHTML = "Fracionar as refeições em 5-6 vezes ao dia";
  }
  else if(IMC >= 18.5 && IMC <= 24.9){
    document.getElementById("caixaid1").innerHTML = "Dieta equilibrada com a quantidade adequada de calorias";
    document.getElementById("caixaid2").innerHTML = "Consumir alimentos ricos em fibras (ex: vegetais, frutas, grãos integrais). 	- Manter uma ingestão de proteínas moderada para manutenção de massa muscular.";
    document.getElementById("caixaid3").innerHTML = "Manter uma ingestão de proteínas moderada para manutenção de massa muscular. Manter o consumo de gorduras saudáveis (ex: azeite de oliva, abacate, peixes ricos em ômega-3).";
  }
  else if(IMC >= 25 && IMC <= 29.9){
    document.getElementById("caixaid1").innerHTML = `Dieta hipocalórica, com déficit calórico controlado.`
    document.getElementById("caixaid2").innerHTML = "Focar em alimentos de baixo índice glicêmico (ex: vegetais, legumes, proteínas magras)."
    document.getElementById("caixaid3").innerHTML = "Reduzir carboidratos refinados (ex: pães brancos, massas, doces). Aumentar a ingestão de fibras e proteínas para maior saciedade (ex: frango, peixe, tofu, lentilhas). Controlar o consumo de gorduras saturadas e aumentar gorduras insaturadas (ex: abacate, azeite de oliva, nozes)."
  }
  else if(IMC >= 30 && IMC <= 34.9){
    document.getElementById("caixaid1").innerHTML = `Dieta rigorosamente hipocalórica com acompanhamento profissional.`
    document.getElementById("caixaid2").innerHTML = "Aumento do consumo de proteínas para preservar a massa muscular durante o emagrecimento (ex: frango, ovos, peixe)."
    document.getElementById("caixaid3").innerHTML = "Evitar alimentos altamente processados e ricos em açúcares e gorduras trans. Refeições pequenas e frequentes, controlando porções."
  }  else if(IMC >= 34.9){
    document.getElementById("caixaid1").innerHTML = `Dieta rigorosamente hipocalórica com acompanhamento profissional.`
    document.getElementById("caixaid2").innerHTML = "Aumento do consumo de proteínas para preservar a massa muscular durante o emagrecimento (ex: frango, ovos, peixe)."
    document.getElementById("caixaid3").innerHTML = "Evitar alimentos altamente processados e ricos em açúcares e gorduras trans. Refeições pequenas e frequentes, controlando porções."
  }
})


  
  
  
  
  
  



