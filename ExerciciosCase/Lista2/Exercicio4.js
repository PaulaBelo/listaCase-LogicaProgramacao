var numeroQuadrado = function(){
    let numero = (-5);
    let tratadoNumero = parseInt(numero);
    if(numero > 0){
      console.log(Math.sqrt(tratadoNumero));
    }else if (numero < 0){
      console.log(tratadoNumero*tratadoNumero);
    }
  }
  numeroQuadrado()