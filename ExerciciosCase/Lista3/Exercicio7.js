let data= ['29-03-2022']

var imprimaData= function(listaDatas){
    let dataRevertida = []
    for (let i=0;i<listaDatas.length;i++)
{
    let data= listaDatas[i]
    data = data.split('-')
    let novaData = data.reverse().join('-')
    dataRevertida.push(novaData)
}
    return dataRevertida
}
console.log(imprimaData(data))