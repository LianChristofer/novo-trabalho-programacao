function Tocar(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const ListaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

while (contador < ListaDeTeclas.length) {
    ListaDeTeclas[contador].onclick = function () {
        Tocar('#som-tecla-toim');
    }
    const lista = ListaDeTeclas[contador].classList[1]
    console.log(lista)
    const idAudio = som_$(classe);
    contador = contador + 1;
    console.log(contador);
}