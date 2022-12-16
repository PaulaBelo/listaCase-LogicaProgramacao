var imprimeRicci= function(){
    let primeiroTermo = (1);
    let segundoTermo = (2);
    let termoSequencias = (4);
    
   let array = [primeiroTermo,segundoTermo];
    for(i=1;i<termoSequencias-1;i++){
      parseInt(array.push(array[i]+array[(i-1)]))
    }
    let somaTermos=(fatoresAcumulados,intervalo)=> fatoresAcumulados+intervalo;
      console.log(array);
      console.log(`O primeiro termo é:${array[0]},
      e o segundo termo:${array[1]}.
      A soma da série para os dois primeiros termos é:${array.reduce(somaTermos)}`);
      
  }
  imprimeRicci()