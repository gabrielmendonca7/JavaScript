var hora = agora.getHours()

var agora = new Date()

if(hora >= 5 && hora < 12){
    console.log('Bom dia')
} else if (hora >= 12 && hora < 19){
    console.log('Boa tarde')
} else{
    console.log('Boa noite')
}

console.log(`São exatamente ${hora} horas`)