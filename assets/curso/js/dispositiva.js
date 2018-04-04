/*document.getElementsByClassName("col")[0].addEventListener('click', () =>
    document.getElementsByClassName("col")[0].classList.toggle('flow-text'));*/
let contenido = document.querySelector('.contenido');
let mas = document.querySelector('.aumenta');
let menos = document.querySelector('.disminuye')

if (contenido.style.fontSize == '') {
    menos.classList.add('disabled');
}

mas.addEventListener('click', () => {
    //console.log(contenido.style.fontSize);
    menos.classList.remove('disabled');
    if (contenido.style.fontSize.substr(-2) == 'em') {
        contenido.style.fontSize = (parseFloat(contenido.style.fontSize.match(/^\d{1}(\.\d{1,2})?/)) + 0.1).toFixed(1) + 'em';
        //console.log((parseFloat(contenido.style.fontSize.match(/^\d{1}(\.\d{1,2})?/)) + parseFloat(0.1)).toFixed(1));
        if (parseFloat(contenido.style.fontSize.match(/^\d{1}(\.\d{1,2})?/)) >= 3.0) {
            mas.classList.add('disabled');
        }
    } else if (contenido.style.fontSize.substr(-2) == 'px') {
        contenido.style.fontSize = '1.1em';
    } else {
        contenido.style.fontSize = '1.1em';

    }
});

menos.addEventListener('click', () => {
    mas.classList.remove('disabled');
    if (contenido.style.fontSize.substr(-2) == 'em') {
        contenido.style.fontSize = (parseFloat(contenido.style.fontSize.match(/^\d{1}(\.\d{1,2})?/)) - 0.1).toFixed(1) + 'em';
        if (parseFloat(contenido.style.fontSize.match(/^\d{1}(\.\d{1,2})?/)) == 1.0) {
            menos.classList.add('disabled');
        }
    }
});