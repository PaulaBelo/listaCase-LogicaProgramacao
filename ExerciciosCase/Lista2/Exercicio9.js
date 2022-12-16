var emprestimoPrefeitura = function(){
    let salarioBruto = (1000);
    let porcentagemSalario = (salarioBruto*(30/100));
    let prestacaoEmprestimo = (330);
    if (prestacaoEmprestimo <= porcentagemSalario){
      console.log("Emprestimo concebido!")
    }else {
      console.log("Emprestimo negado!")
    }
  }
  emprestimoPrefeitura()