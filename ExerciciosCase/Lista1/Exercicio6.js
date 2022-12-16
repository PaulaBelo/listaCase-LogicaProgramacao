var calculaQuilowatts = function(){
    let salarioMinimo = (1100);
    let quillowatts = (200);
    let valorquillowatts = ((salarioMinimo/7)/100);
    let valorPagamento = valorquillowatts*quillowatts;
    let desconto = (valorquillowatts*quillowatts/10)*9;
    console.log('O valor do quilowatt:R$', valorquillowatts.toFixed(2));
      console.log('O valor a ser pago:R$', valorPagamento.toFixed(2));
      console.log('O valor com desconto:R$', desconto.toFixed(2));
   }
  calculaQuilowatts()