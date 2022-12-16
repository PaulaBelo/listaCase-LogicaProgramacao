var siglaEstados = function(){
    let estado = ("sp");
    switch (estado){
      case "rj":
        return "Carioca";
        break;
      case "sp":
        return "Paulista";
        break;
      case "mg":
        return "Mineiro";
        break;
      default:
        return "Outros estados";
        break;
        
    }
  }
  console.log(siglaEstados())