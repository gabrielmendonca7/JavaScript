function horas(){
    var msg = document.getElementById('msg')
    var imgs = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `<p>Agora são ${hora} horas e ${minuto} minutos</p>`

    if(hora >= 5 && hora < 12){
        msg.innerHTML += '<p>Tenha um bom dia!</p>'
        imgs.scr = 'img/manha.png'
        document.body.style.backgroundColor = '#0099BF'
           
    } else if (hora >= 12 && hora < 19){
        msg.innerHTML += '<p>Tenha uma boa tarde!</p>'
        imgs.src = 'img/tarde.png'
        document.body.style.backgroundColor = '#F27C38'
    } else{
        msg.innerHTML += '<p>Tenha uma boa noite!</p>'
        imgs.src = 'img/noite.png'
        document.body.style.backgroundColor = '#0E2B39'
    }
}

