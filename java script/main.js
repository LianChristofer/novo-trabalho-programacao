function TocaSomPom () {
    document.querySelector('#som_tecla_pom').play();
}

const ListaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

while (contador) {
    ListaDeTeclas[0].onclick = TocaSomPom;
}