function contar(idAudio) {
    document.querySelector(idAudio).play();
} 
 
const lista = document.querySelectorAll('.tecla');

let contador = 0;

for (let contador = 0; contador < lista.length; contador++) {
    tecla = lista[contador];
    const classe = tecla.classList[1];
    console.log(classe);

    const idAudio = `#som_${classe}`;
    console.log(idAudio);

    tecla.onclick = function () {
        contar(idAudio);
    }
    contador = contador + 1;
    console.log (contador);
    tecla.onkeydown = function(evento) {
        tecla.classList.add('ativa');
        console.log(evento.code === 'Enter' || evento.code === 'Space' || evento.code === 'NumpadEnter');
    }
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
   
}
