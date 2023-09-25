function Tocar(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const ListaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

while (contador < ListaDeTeclas.length) {
    ListaDeTeclas[contador].onclick = function () {
        Tocar(idElementoAudio);
    }
    const lista = ListaDeTeclas[contador].classList[1]
    console.log(lista)
    const idAudio = '#som_$(lista)';
    console.log(idElementoAudio);
    contador = contador + 1;
    console.log(contador);
}