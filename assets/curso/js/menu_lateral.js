document.getElementsByClassName("button-collapse")[0].addEventListener('click', () => {
    document.getElementsByClassName("side-nav")[0].classList.toggle('hide');
    document.getElementsByClassName("button-collapse")[0].classList.toggle('pulse');
    if (document.getElementsByTagName('main')[0].style.paddingLeft == '300px' || document.getElementsByTagName('main')[0].style.paddingLeft == '') {
        document.getElementsByTagName('main')[0].style.paddingLeft = '0px';
    } else {
        document.getElementsByTagName('main')[0].style.paddingLeft = '300px';
    }
    if (document.querySelector('.button-collapse .material-icons').textContent == 'arrow_back') {
        document.querySelector('.button-collapse .material-icons').textContent = 'arrow_forward'
    } else {
        document.querySelector('.button-collapse .material-icons').textContent = 'arrow_back'
    }
})

let lista = cur.lista;

cur.temas.forEach((tema, index) => {
    let enlace = document.createElement('a');
    let elemento = document.createElement('li');
    let texto = document.createTextNode(tema.nombre);
    enlace.href = '#!';
    enlace.appendChild(texto);
    elemento.appendChild(enlace);
    elemento.setAttribute('data-index', index)
    elemento.classList.add('hoverable')
    lista.appendChild(elemento);
    cur.actual = tema.archivo;
    elemento.onclick = setTema
    if (index == 0) {
        elemento.click();
    }
});

function setTema(elemen) {
    document.getElementsByClassName('tema')[0].src = cur.temas[this.getAttribute('data-index')].archivo;
    cur.ultimoClick = this.getAttribute('data-index');


    if (cur.ultimoClick == 0) {
        document.querySelector(".anterior").classList.add('disabled')
    } else {
        document.querySelector(".anterior").classList.remove('disabled')
    }

    if (cur.ultimoClick == cur.temas.length - 1) {
        document.querySelector(".siguiente").classList.add('disabled')
    } else {
        document.querySelector(".siguiente").classList.remove('disabled')
    }

}

document.querySelector(".anterior").addEventListener('click', () => {
    if (cur.ultimoClick > 0) {
        lista.getElementsByTagName('li').item(cur.ultimoClick - 1).click()
    }
});

document.querySelector(".siguiente").addEventListener('click', () => {

    if (cur.ultimoClick < cur.temas.length) {
        lista.getElementsByTagName('li').item(parseInt(cur.ultimoClick) + 1).click()
    }

});