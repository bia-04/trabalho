function contar(idAudio) {
    document.querySelector(idAudio).play();
} 
 
const lista = document.querySelectorAll('.tecla');

let contador = 0;

while (contador < lista.length) {
    lista[contador].onclick = function () {
        tocar('#som_tecla_toim');
    }
    const classe = lista[contador].classsList[1];
    console.log(classe);
    contador = contador + 1;
    console.log (contador);
}