
let carro = {
    nome: 'BMW',
    modelo: '320i',
    ligado:false,

    ligar:function() {
        this.ligar = true;
        
    },

    acelerar:function() {
        if (this.ligar == true){
            console.log("Carro ligado!")
            console.log("Acelerar")
            
            console.log("BMW " + carro.modelo + " esta ligado");
        } else{
            console.log("O carro esta desligado!")
        }
        
    }
};



carro.ligar();
carro.acelerar();




   