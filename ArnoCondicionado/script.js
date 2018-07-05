class ArCondicionado {
    constructor(marca, potencia, tempMax, tempMin) {
            this.marcadoar = marca;
            this.potenciadalinha = potencia;
            this.temperaturaatual = 0;
            this.arligado = false;
            this.tempMaxima = tempMax;
            this.tempMinima = tempMin;
    }
    toString() {
        return 'A temperatura atual é ' + this.temperaturaatual + '°C';
    }
    ligar() {
            if (this.arligado === false) {
                    this.arligado = true;
                    this.temperaturaatual = this.tempMinima;
            }
    }
    desligar() {
            if (this.arligado === true) {
                        this.arligado = false;
                        this.temperaturaatual = 0;
            }
    }
    aumentarGrau() {
        if(this.temperaturaatual < this.tempMaxima && this.arligado === true){
            this.temperaturaatual += 1
        }
    }
    diminuirGrau() {
        if(this.temperaturaatual > this.tempMinima && this.arligado === true){
            this.temperaturaatual -= 1
        }
    }
    get potencia() {
            return this.potenciadalinha;
    }
    get marca() {
            return this.marcadoar;
    }
    get temperatura() {
            return this.temperaturaatual;
    }
    get ligado() {
            return this.arligado;
    }
}


const ArnoCondicionado = new ArCondicionado('Arno', 30000, 28, 22);
console.log(ArnoCondicionado.potencia === 30000); //true
console.log(ArnoCondicionado.marca === 'Arno'); // true
console.log(ArnoCondicionado.ligado === false); // true
console.log(ArnoCondicionado.temperatura === 0); // true
ArnoCondicionado.ligar(); // liga
console.log(ArnoCondicionado.ligado === true); // true
console.log(ArnoCondicionado.temperatura === 22); // true
ArnoCondicionado.aumentarGrau(); // aumenta 1 grau
console.log(ArnoCondicionado.ligado === true); //true
console.log(ArnoCondicionado.temperatura === 23); // true
console.log(ArnoCondicionado.toString())
ArnoCondicionado.aumentarGrau(); // aumenta 1 grau
console.log(ArnoCondicionado.ligado === true); //true
console.log(ArnoCondicionado.temperatura === 24); // true
ArnoCondicionado.diminuirGrau(); // diminui 1 grau
console.log(ArnoCondicionado.temperatura === 23); //true
ArnoCondicionado.diminuirGrau();
console.log(ArnoCondicionado.ligado === true); //true
console.log(ArnoCondicionado.temperatura === 22); //true
ArnoCondicionado.desligar();
console.log(ArnoCondicionado.ligado === false); //true
console.log(ArnoCondicionado.temperatura === 0); //true
ArnoCondicionado.aumentarGrau();
console.log(ArnoCondicionado.ligado === false); //true
console.log(ArnoCondicionado.temperatura === 0); //true
ArnoCondicionado.ligar(); // liga
console.log(ArnoCondicionado.ligado === true); // true
console.log(ArnoCondicionado.temperatura === 22); // true
ArnoCondicionado.diminuirGrau();
console.log(ArnoCondicionado.ligado === true); //true
console.log(ArnoCondicionado.temperatura === 22); //true

//desculpa o trocadilho do nome, abraço \o/