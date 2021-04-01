function contarIntervalo(){
    var ini = document.getElementById('inicio')
    var fim = document.querySelector('#fim')
    var passo = document.querySelector('#passo')
    var msg = document.getElementById('msg')
    var resultado = document.querySelector('#resultado')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){ //Verifica se os campos foram todos preenchidos
        alert('[ERRO] Verifique se todos os campos estão preenchidos')
    }
    else{
        ini = Number(ini.value)
        fim = Number(fim.value)
        passo = Number(passo.value)

        msg.innerHTML = 'Contando:' //mensagem de contagem na tela
        resultado.innerHTML = '' //limpa a linha a cada nova contagem

        if(passo==0){ //verifica se o passo é zero e emite um alerta 
            alert('[ERRO] Passo inválido')
        }
        else if(fim>ini){ //verifica se é uma contagem crescente
            for(ini; ini<=fim; ini += passo){
                resultado.innerHTML += `${ini}👉`
            }
        }
        else{ //senão, é uma contagem decrescente
            for(ini; ini>=fim; ini -= passo){
                resultado.innerHTML += `${ini}👉`
            }
        }
        resultado.innerHTML += `Fim` //contagem finalizada
    }
}