function tocar(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}
const ListaTeclas = document.querySelectorAll('.tecla');

let Contador = 0;

for (let Contador = 0; Contador < ListaTeclas.length; Contador++) {
    const botão = ListaTeclas[Contador];
    const tecla = botão.classList[1];
    const idAudio = `#som_${tecla}`;
    botão.onclick = function () {
        tocar(idAudio);
    }
    botão.onkeydown = function (Evento) {
        if (Evento.code === 'Space' || Evento.code === 'Enter') {
            botão.classList.add('ativa');
        }
    }
    botão.onkeyup = function () {
        botão.classList.remove('ativa');
    }
}