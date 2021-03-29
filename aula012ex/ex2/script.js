function carregar(){
    var msg = document.getElementById('msg') //variavel de acesso a primeira div onde sera colocado as horas
    var img = document.querySelector('img#imagem') //variavel de acesso a segunda div onde sera colocado as imagens
    var data = new Date() //objeto que permite o acesso a hora e minuto do sistema
    var hora = data.getHours() //guarda o valor das horas do sistema
    var min = data.getMinutes() //guarda o valor dos minutos do sistema

    msg.innerHTML = `Agora são ${hora}h${min}m` //imprimi na pagina, dentro da div msg as horas

    if(hora>=5 && hora<12){ //entrre 5h e 11h59 esta de manhã
        //Bom dia
        img.src = 'manha.png' //imprimi a imagem que simboliza a manhã
        document.body.style.background = '#a28d5f' //altera a cor do background
    }
    else if(hora>=12 && hora<19){ //entre 12h e 18h59 esta de tarde
        //Boa tarde
        img.src = 'tarde.png' //imprimi a imagem que simboliza a tarde
        document.body.style.background = '#b9846f' //altera a cor do background
    }
    else{ //entre 19h e 4h59 esta de noite
        //Boa noite
        img.src = 'noite.png' //imprimi a imagem que simboliza a noite
        document.body.style.background = '#515154' //altera a cor do background
    }
}