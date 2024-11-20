document.addEventListener("DOMContentLoaded", function(){

    let IMC = JSON.parse(localStorage.getItem("imcResultado"))
    if(IMC < 18.5){
      resultado3 = "Necessário Ganho de peso saudável	- Dieta hipercalórica (acima das necessidades diárias). Focar em alimentos ricos em nutrientes e calorias densas (ex: abacate, castanhas, óleos saudáveis). Incluir proteínas para ganho muscular (ex: carnes magras, ovos, leguminosas). Fracionar as refeições em 5-6 vezes ao dia."
    } else if(IMC >= 18.5 && IMC <= 24.9){
      resultado3 = "Dieta equilibrada com a quantidade adequada de calorias, proteínas, carboidratos e gorduras saudáveis. Consumir alimentos ricos em fibras (ex: vegetais, frutas, grãos integrais). 	- Manter uma ingestão de proteínas moderada para manutenção de massa muscular. Manter o consumo de gorduras saudáveis (ex: azeite de oliva, abacate, peixes ricos em ômega-3)."
    } else if(IMC >= 25 && IMC <= 29.9){
      resultado3 = "Dieta hipocalórica, com déficit calórico controlado. Focar em alimentos de baixo índice glicêmico (ex: vegetais, legumes, proteínas magras). Reduzir carboidratos refinados (ex: pães brancos, massas, doces). Aumentar a ingestão de fibras e proteínas para maior saciedade (ex: frango, peixe, tofu, lentilhas). Controlar o consumo de gorduras saturadas e aumentar gorduras insaturadas (ex: abacate, azeite de oliva, nozes)."
    } else if(IMC >= 30 && IMC <= 34.9){
      resultado3 = "Dieta rigorosamente hipocalórica com acompanhamento profissional.  Aumento do consumo de proteínas para preservar a massa muscular durante o emagrecimento (ex: frango, ovos, peixe). Evitar alimentos altamente processados e ricos em açúcares e gorduras trans. Refeições pequenas e frequentes, controlando porções."
    }
       document.getElementById("resultado2").innerHTML = `De acordo com seu IMC: ${ IMC } (${ resultado3 })`;
       console.log("DOM pronto!")
    })

