function Tocar(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const ListaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

while (contador < ListaDeTeclas.length) {
    ListaDeTeclas[contador].onclick = function () {
        Tocar('#som-tecla-toim');
    }
    contador = contador + 1;
    console.log(contador);
}