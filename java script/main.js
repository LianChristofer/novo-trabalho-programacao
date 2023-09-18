function Tocar(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const ListaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

while (contador < ListaDeTeclas.length) {
    ListaDeTeclas[0].onclick = function () {
        Tocar(ListaDeTeclas);
    }
    contador = contador + 1;
    console.log(contador);
}