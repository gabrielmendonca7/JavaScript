function azul(){

    limpar();
    document.getElementById("title").classList.add('azul');
}

function vermelho(){

    limpar();
    document.getElementById("title").classList.add('vermelho');
}

function roxo(){

    limpar();
    document.getElementById("title").classList.add('roxo');
}

function limpar(){
    document.getElementById("title").classList.remove('azul');
    document.getElementById("title").classList.remove('vermelho');
    document.getElementById("title").classList.remove('roxo');
}