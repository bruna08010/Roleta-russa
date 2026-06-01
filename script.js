const desafios = [
    "1 - Conte da vez que você riu na hora errada.",
    "Desafio - Faça 40 polichinelos",
    "2 - Conte um apelido ridículo que você já teve.",
    "3 - Conte a vez que você mandou mensagem para a pessoa errada.",
    "4 - Fale sobre a pior roupa que usou publicamente.",
    "5 - Conte um segredo de família que te deixa envergonhada.",
    "Desafio - Fale um eu te amo para alguma pessoa",
    "6 - Fale um momento que você cantou ou dançou sem saber que tinha gente perto.",
    "7 - Conte a pior situação que te fez chegar atrasada.",
    "8 - Qual foi a pior mentira que você contou e foi descoberta?",
    "9 - Conte um momento em que você ficou sem jeito com um desconhecido.",
    "Desafio - Haja como um cachorro por 5 minutos",
    "10 - Lembre de um momento que você confundiu uma pessoa achando que era outra."
];

const botao = document.getElementById("spinBtn");
const wheel = document.getElementById("wheel");
const resultado = document.getElementById("resultado");

botao.addEventListener("click", () => {

    const sorteado = Math.floor(Math.random() * desafios.length);

    const giro = 1440 + Math.floor(Math.random() * 720);

    wheel.style.transform = `rotate(${giro}deg)`;

    resultado.textContent = "Girando a roleta...";

    setTimeout(() => {
        resultado.textContent = desafios[sorteado];
    }, 4000);

});