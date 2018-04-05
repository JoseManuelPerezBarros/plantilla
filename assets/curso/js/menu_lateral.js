document.getElementsByClassName('button-collapse')[0].addEventListener('click', () => {
    document.getElementsByClassName('side-nav')[0].classList.toggle('hide');
    document.getElementsByClassName('button-collapse')[0].classList.toggle('pulse');
    if (document.getElementsByTagName('main')[0].style.paddingLeft == '300px' || document.getElementsByTagName('main')[0].style.paddingLeft == '') {
        document.getElementsByTagName('main')[0].style.paddingLeft = '0px';
    } else {
        document.getElementsByTagName('main')[0].style.paddingLeft = '300px';
    }
    if (document.querySelector('.button-collapse .material-icons').textContent == 'keyboard_arrow_left') {
        document.querySelector('.button-collapse .material-icons').textContent = 'keyboard_arrow_right';
    } else {
        document.querySelector('.button-collapse .material-icons').textContent = 'keyboard_arrow_left';
    }
});


let lista = cur.lista;

cur.temas.forEach((tema, index) => {

    //let elemento = cur.crearElementoLista(tema, '0-' + index);
    let elemento = cur.crearElementoLista(tema, index);

    lista.appendChild(elemento);
    cur.crearSubtemas(tema, lista, index);


    elemento.onclick = setTema;
    if (index == 0) {
        elemento.click();
    }

});

function setTema(elemen) {
    let ancestros = cur.separaDataindex(this.getAttribute('data-index'));
    let indice = ancestros[0];
    let profundidad = ancestros.length;
    let tema = cur.getRutaCompleta(ancestros);
    console.log(cur.getRutaCompleta(ancestros));

    let presente = document.getElementsByClassName('tema')[0].src;
    let pasado;

    pasado = profundidad == 0 ? tema.archivo : tema.archivo;
    if (presente.match(/[a-zA-Z]?\d{2,}\.html/ig)[0] != pasado) {

        if (cur.ultimoClick === null) {

            this.classList.add('active');
        } else {
            document.querySelector('.active').classList.toggle('active');
        }

        document.getElementsByClassName('tema')[0].src = pasado;

        cur.ultimoClick = parseInt(indice);

        cur.temaProgreso.push({
            'indice': cur.ultimoClick,
            'profundidad': 0,
            'activo': true
        });

        if (cur.temaProgreso.length > 1 && !cur.temaCompletado.includes(cur.temaProgreso[cur.temaProgreso.length - 2].indice)) {
            cur.temaProgreso[cur.temaProgreso.length - 2].activo = false;
            if (cur.lista.children.item(cur.temaProgreso[cur.temaProgreso.length - 2].indice).querySelector('i').classList.contains('green-text')) {
                cur.lista.children.item(cur.temaProgreso[cur.temaProgreso.length - 2].indice).querySelector('i').classList.remove('green-text');
                cur.lista.children.item(cur.temaProgreso[cur.temaProgreso.length - 2].indice).querySelector('i').classList.add('orange-text');
            }
            cur.lista.children.item(cur.temaProgreso[cur.temaProgreso.length - 2].indice).querySelector('i').textContent = 'indeterminate_check_box';
        }

        this.classList.add('active');

        cur.actualizanumpag(parseInt(cur.ultimoClick) + 1);

        cur.gestionaTiempo(this, cur.temaProgreso[cur.temaProgreso.length - 1]);

        if (cur.ultimoClick == 0) {
            document.querySelector('.anterior').classList.add('disabled');
            document.querySelector('.principio').classList.add('disabled');
        } else {
            document.querySelector('.anterior').classList.remove('disabled');
            document.querySelector('.principio').classList.remove('disabled');
        }

        if (cur.ultimoClick == cur.temas.length - 1) {
            document.querySelector('.siguiente').classList.add('disabled');
            document.querySelector('.final').classList.add('disabled');
        } else {
            document.querySelector('.siguiente').classList.remove('disabled');
            document.querySelector('.final').classList.remove('disabled');
        }
    }
}

document.querySelector('.anterior').addEventListener('click', () => {

    if (cur.ultimoClick > 0) { //Dintinto de 0 0-0 0-0-0
        lista.getElementsByTagName('li').item(cur.ultimoClick - 1).click();
        //lista.getElementsByTagName('li').item(cur.ultimoClick).previousElementSibling.click();
    }
});


document.querySelector('.siguiente').addEventListener('click', () => {

    if (cur.ultimoClick < cur.temas.length - 1) {
        lista.getElementsByTagName('li').item(parseInt(cur.ultimoClick) + 1).click();
    }

});

document.addEventListener('keyup', (e) => {

    if (e.keyCode == 39 || e.which == 39) {
        document.querySelector('.siguiente').click();
    } else if (e.keyCode == 37 || e.which == 37) {
        document.querySelector('.anterior').click();
    }
});

document.querySelector('.principio').addEventListener('click', () => {

    if (cur.ultimoClick > 0) {
        lista.getElementsByTagName('li').item(0).click();
    }
});

document.querySelector('.final').addEventListener('click', () => {

    if (cur.ultimoClick < cur.temas.length) {
        lista.getElementsByTagName('li').item(cur.temas.length - 1).click();
    }
});