document.getElementById('calcular').addEventListener("click",function(){
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const elementResult = document.getElementById('resultado');

//validação
   if( isNaN(peso) || isNaN(altura) || peso === 0 || altura === 0 ){
    document.getElementById('resultado').textContent='Por Favor, entre com valores validos.'
    return;
   }
   let imc = peso / (altura * altura);
   const result = `Seu IMC é ${imc.toFixed(2)}`   
   if(imc > 24){
    alert('você está sobrepeso')
   }
  
   elementResult.textContent = result;
   
   //se dados for válidos

});