let pessoa = [
    {nome:"paula",idade:'21',cpf:"123456789"},
    {nome:"cris",idade:"30",cpf:"123456785"},
    {nome:"edu",idade:"25",cpf:"123456788"}]
  console.table(pessoa)
   unico = 0
   distinto = [];
   quantidade = 0
  
  for(i=0;i<pessoa.length;i++){
    unico=pessoa[i].cpf
    for(p=0;p<pessoa.length;p++){
    if(i!==p){ 
      if(unico==pessoa[p].cpf){
      distinto.push(pessoa[p])
      quantidade++
        }
      }
    }
  }

  console.log(`Possui ${quantidade} CPFs iguais!`)
