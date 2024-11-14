function calcularIMC(){
    let peso, altura, imc
    let resultado2
    peso = document.getElementById("imcpeso").value;
    altura = document.getElementById("imcaltura").value;
     imc = peso / (altura * altura)
     imc = imc.toFixed(2);
   document.getElementById("resultado").innerHTML = `O seu IMC é: ${imc}`;
   document.getElementById("imcpeso").value = null;
   document.getElementById("imcaltura").value = null;
   if(imc <= 18.5){
    resultado2 = "Abaixo do Normal"
   } else if(imc <= 24.9){
    resultado2 = "Normal"
   } else if(imc <= 29.9){
    resultado2 = "Sobrepeso"
   } else if(imc <= 34.9){
    resultado2 = "Obesidade Grau I"
   } else if(imc <= 39.9){
    resultado2 = "Obesidade Grau II"
   } else {
    resultado2 = "Obesidade Grau III"
   }
   document.getElementById("resultado").innerHTML = `O seu IMC é: ${ imc } (${ resultado2 })`;
   document.getElementById("imagem").style.display= ''
}
function redirecionar(){
  window.location.href = "home.html";
}