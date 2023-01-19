function calcular () {
    let formatarDigito = (digito) => `0${digito}`.slice(-2); //Concatena um 0 antes da variável dígitos e retira o 0 quando digito tem 2 algarismos
    let atualizar = (tempo) => {
        let segundos = document.getElementById('segundos'); 
        let minutos = document.getElementById('minutos');
        let horas = document.getElementById('horas');
        let dias = document.getElementById('dias');

        let qtdSegundos = tempo % 60; //Calcula e exibe o resto da divisão do input por 60 no campo segundos.
        let qtdMinutos = Math.floor((tempo % 3600) / 60); //Calcula e exibe o valor em segundos inseridos no input (Math.floor admite apenas inteiros sem arredondamento.)
        let qtdHoras = Math.floor((tempo % 86400) / 3600); //Calcula e exibe a quantidade de horas inseridas no input.
        let qtdDias = Math.floor(tempo / 86400); //Calcula e exibe a quantidade de dias inseridos no input.

        segundos.textContent = formatarDigito(qtdSegundos); 
        minutos.textContent = formatarDigito(qtdMinutos); 
        horas.textContent = formatarDigito(qtdHoras); 
        dias.textContent = qtdDias; 
    }
    let contagemRegressiva = (tempo) => { //Função responsável por realizar a contagem regressiva
    let pararContagem = () => clearInterval(id); //Para a contagem quando chega no 0
    let contar = () => {
        if (tempo == 0){ //Verifica se a contagem chegou no 0
        pararContagem();
        }
        atualizar(tempo); //Atualiza o tempo
        tempo--; //Retira um segundo do tempo inserido na contagemRegressiva
    }
    let id = setInterval(contar,1000); //Seta o intervalo de 1000 milissegundos para a função atualizar
    }

let tempoRestante = () => {
    const hoje = new Date();
    const input = document.getElementById('date') //Carrega o valor inserido no input dentro de uma variável
    const dataPrazo = new Date(input.value); //Carrega a variável input dentro do objeto data e armazena em outra variável.    
    if(dataPrazo<hoje){
        window.alert("Data inválida. Selecione uma data posterior a hoje.");
        window.location.reload();
    } else {
        return Math.floor((dataPrazo - hoje)/1000);//Efetua o cálculo
    }
}

contagemRegressiva(tempoRestante());

}
function limpar() {
    window.location.reload();
}

