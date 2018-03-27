/*document.getElementsByClassName("col")[0].addEventListener('click', () =>
    document.getElementsByClassName("col")[0].classList.toggle('flow-text'));*/

document.querySelector('.aumenta').addEventListener('click', () => {
    let fuente = document.querySelector('.contenido').style.fontSize;
    if (fuente.substr(-2) == 'em') {
    document.querySelector('.contenido').style.fontSize = parseFloat(fuente.match(/^\d+\.\d*/))+0.1
    console.log(parseFloat(fuente.match(/^\d+\.\d*/))+0.1)
    } else if (fuente.substr(-2) == 'px') {
        document.querySelector('.contenido').style.fontSize = '1.1em'
        console.log('px')
    } else {
        document.querySelector('.contenido').style.fontSize = '1.2em'
        console.log('otro')
    }
    
    
});

document.querySelector('.disminuye').addEventListener('click', () => {

});