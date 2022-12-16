function recebeCortaNumero(numeroCortar) {
    let recebeNumero = String(numeroCortar);
    
    if(recebeNumero.length != 4){
      recebeNumero = prompt("Insira um número de quatro casas.");
    } else {
        let numeroCortado = recebeNumero.slice(0,2);
        return Number(numeroCortado);
    }
    
  }
  
  console.log( 
    (recebeCortaNumero(1252)%4 === 0) ? "É divisivel por 4!" : "Não é divisivel por 4!");