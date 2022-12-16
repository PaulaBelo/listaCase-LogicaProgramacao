var salarioLiquido = function(){
  let valorHora = (10);
  let numeroAulas = (24);
  let descontoInss = (9);
  let calculoDesconto= (valorHora*numeroAulas/100)*descontoInss;
console.log('O salario liquido é:'+(valorHora*numeroAulas-calculoDesconto));
}
salarioLiquido ()