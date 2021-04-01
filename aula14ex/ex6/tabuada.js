function gerar(){
    let numero = document.getElementById('n1')
    let resultado = document.getElementById('resposta')
    
    resultado.innerHTML = ''

    if(numero.value.length == 0){
        alert('Por favor digite um número')
    }
    else{
        numero = Number(numero.value)
        
        for(let m=0; m<=10; m++){
            let item = document.createElement('option') //crie uma option
            item.text += `${m} X ${numero} = ${m*numero}` //cria o conteudo dentro da option
            resultado.appendChild(item) //adiciona a option dentro do select
        }
    }
}