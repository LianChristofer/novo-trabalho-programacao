function Tocar(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const ListaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

while (contador < ListaDeTeclas.length) {
    ListaDeTeclas[contador].onclick = function () {
        Tocar('#som-tecla-toim');
    }
    const lista = ListaDeTeclas[0].classList[1]
    console.log(lista)

    contador = contador + 1;
    console.log(contador);
}