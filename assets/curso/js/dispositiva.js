/*document.getElementsByClassName("col")[0].addEventListener('click', () =>
    document.getElementsByClassName("col")[0].classList.toggle('flow-text'));*/

if (document.querySelector('.contenido').style.fontSize == '') {
    document.querySelector('.disminuye').classList.add('disabled');
}

document.querySelector('.aumenta').addEventListener('click', () => {
    //console.log(document.querySelector('.contenido').style.fontSize);
    document.querySelector('.disminuye').classList.remove('disabled');
    if (document.querySelector('.contenido').style.fontSize.substr(-2) == 'em') {
        document.querySelector('.contenido').style.fontSize = (parseFloat(document.querySelector('.contenido').style.fontSize.match(/^\d{1}(\.\d{1,2})?/)) + 0.1).toFixed(1) + 'em';
        //console.log((parseFloat(document.querySelector('.contenido').style.fontSize.match(/^\d{1}(\.\d{1,2})?/)) + parseFloat(0.1)).toFixed(1));
        if (parseFloat(document.querySelector('.contenido').style.fontSize.match(/^\d{1}(\.\d{1,2})?/)) >= 3.0) {
            document.querySelector('.aumenta').classList.add('disabled');
        }
    } else if (document.querySelector('.contenido').style.fontSize.substr(-2) == 'px') {
        document.querySelector('.contenido').style.fontSize = '1.1em';
    } else {
        document.querySelector('.contenido').style.fontSize = '1.1em';

    }
});

document.querySelector('.disminuye').addEventListener('click', () => {
    document.querySelector('.aumenta').classList.remove('disabled');
    if (document.querySelector('.contenido').style.fontSize.substr(-2) == 'em') {
        document.querySelector('.contenido').style.fontSize = (parseFloat(document.querySelector('.contenido').style.fontSize.match(/^\d{1}(\.\d{1,2})?/)) - 0.1).toFixed(1) + 'em';
        if (parseFloat(document.querySelector('.contenido').style.fontSize.match(/^\d{1}(\.\d{1,2})?/)) == 1.0) {
            document.querySelector('.disminuye').classList.add('disabled');
        }
    }

});