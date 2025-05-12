const result = document.querySelector('.result');
const resultImag = document.getElementById("result-img");
const humanScore = document.querySelector('#human-score');
const machineScore = document.querySelector('#machine-score');

let humanScoreNumber = 0
let machineScoreNumber = 0



const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playMachine())
}


const playMachine = () => {
    const choices = ['rock', "paper", 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}


const playTheGame = (human, machine) => {

    console.log('Humano: ' + human + ' Maquina: ' + machine)


    if (human === machine) {
        result.innerHTML = "Deu empate!&#x1F612;"
        resultImag.src = "imag/one.jpg";
    } else if (human === 'paper' && machine === 'rock' ||
        human === 'rock' && machine === 'scissors' ||
        human === 'scissors' && machine === "paper") {
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber

        result.innerHTML = "Você Ganhou!&#x1F601;"
        resultImag.src = "imag/goku.jpg";
    } else {

        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber

        result.innerHTML = "Você perdeu!&#x1F916;"
        resultImag.src = "imag/robot.jpg";
    }

}










function gerarCorAleatoria() {
    const r = Math.floor(Math.random() * 256); // vermelho
    const g = Math.floor(Math.random() * 256); // verde
    const b = Math.floor(Math.random() * 256); // azul
    return `rgb(${r}, ${g}, ${b})`;
}

function mudarCorDeFundo() {
    const fundo = document.getElementById('my-background');
    fundo.style.backgroundColor = gerarCorAleatoria();
}

// Muda a cor ao carregar a página
mudarCorDeFundo();

// Muda a cor ao clicar nos botões
['rock', 'paper', 'scissors'].forEach(id => {
    const botao = document.getElementById(id);
    botao.addEventListener('click', mudarCorDeFundo);
});
