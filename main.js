function contar(idAudio) {
    document.querySelector(idAudio).play();
} 
 
const lista = document.querySelectorAll('.tecla');

let contador = 0;

while (contador < lista.length) {
    lista[contador].onclick = function () {
        contar('#som_tecla_toim');
    }
    const classe = lista[contador].classList[1];
    console.log(classe);
    contador = contador + 1;
    console.log (contador);
    const idAudio = `#som_${classe}`;
    console.log(idAudio);
}
