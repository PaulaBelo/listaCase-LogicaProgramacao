var numeroDivisivel = function(){
    let numero = (21);
    let numeroDivisao = ((numero%3)&&(numero%7));
    if(numeroDivisao == 0){
      console.log("É divisivel por 3 e 7!")
    }else{
      console.log("Não é divisivel poe 3 e 7!")
    }
  }
  numeroDivisivel()