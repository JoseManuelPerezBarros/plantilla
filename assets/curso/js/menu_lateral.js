window.addEventListener('resize', () => {
    if (innerWidth <= 992) {
        document.getElementsByTagName('main')[0].style.paddingLeft = '0px';
    } else {
        document.getElementsByTagName('main')[0].style.paddingLeft = '300px';
        if(document.querySelector('.sidenav-overlay').style.display=='block')
        {
            document.querySelector('.sidenav-overlay').style.display='none';
            document.querySelector('.sidenav-overlay').style.opacity='0';
        }
        //slide.close()
    }
});
document.getElementsByClassName('sidenav-trigger')[0].addEventListener('click', (e) => {

    e.stopImmediatePropagation();
    if (slide.isOpen) {
        slide.close();
        document.getElementsByTagName('main')[0].style.paddingLeft = '0px';
    } else if (!slide.isOpen && innerWidth <= 992) {
        slide.open();
    } else if (!slide.isOpen && innerWidth > 992) {
        slide.open();
        document.getElementsByTagName('main')[0].style.paddingLeft = '300px';
    } else {
        console.error("Error")
    }
});

let lista = cur.lista;

cur.temas.forEach((tema, index) => {
    let elemento = cur.crearElementoLista(tema, index);
    lista.appendChild(elemento);
    cur.crearSubtemas(tema, lista, index);
    elemento.addEventListener('click', setTema);
    if (index == 0) {
        elemento.click();
    }
});

function setTema() {

    if (innerWidth <= 992 && slide.isOpen)
        document.getElementsByClassName('sidenav-trigger')[0].click();

    let ruta = this.getAttribute('data-ruta');
    let indice = this.getAttribute('data-index');
    let tema = cur.getRutaCompleta(ruta);
    let presente = document.getElementsByClassName('tema')[0].src;
    let pasado = tema.archivo;

    if (presente.match(/[a-zA-Z]?\d{2,}\.html/ig)[0] != pasado) {

        cur.ultimoClick === null ?
            this.classList.add('active') :
            document.querySelector('.active').classList.toggle('active');
        this.classList.add('active');

        document.getElementsByClassName('tema')[0].src = pasado;
        cur.ultimoClick = parseInt(indice);
        cur.temaProgreso.push({
            'indice': cur.ultimoClick,
            'ruta': ruta,
            'activo': true
        });

        if (cur.temaProgreso.length > 1 && !cur.temaCompletado.includes(cur.temaProgreso[cur.temaProgreso.length - 2].indice)) {
            cur.temaProgreso[cur.temaProgreso.length - 2].activo = false;
            if (cur.lista.querySelector(`li[data-index="${cur.temaProgreso[cur.temaProgreso.length - 2].indice}"]`).querySelector('i').classList.contains('green-text')) {
                cur.lista.querySelector(`li[data-index="${cur.temaProgreso[cur.temaProgreso.length - 2].indice}"]`).querySelector('i').classList.remove('green-text');
                cur.lista.querySelector(`li[data-index="${cur.temaProgreso[cur.temaProgreso.length - 2].indice}"]`).querySelector('i').classList.add('orange-text');
            }
            cur.lista.querySelector(`li[data-index="${cur.temaProgreso[cur.temaProgreso.length - 2].indice}"]`).querySelector('i').textContent = 'indeterminate_check_box';
        }


        document.querySelector('.card-title').textContent = tema.nombre;
        cur.actualizanumpag(parseInt(cur.ultimoClick) + 1);
        cur.gestionaTiempo(this, cur.temaProgreso[cur.temaProgreso.length - 1]);

        if (cur.ultimoClick == 0) {
            document.querySelector('.anterior').classList.add('disabled');
            document.querySelector('.principio').classList.add('disabled');
        } else {
            document.querySelector('.anterior').classList.remove('disabled');
            document.querySelector('.principio').classList.remove('disabled');
        }

        if (cur.ultimoClick == cur.numTemas - 1) {
            document.querySelector('.siguiente').classList.add('disabled');
            document.querySelector('.final').classList.add('disabled');
        } else {
            document.querySelector('.siguiente').classList.remove('disabled');
            document.querySelector('.final').classList.remove('disabled');
        }
    }
}

document.querySelector('.anterior').addEventListener('click', () => {

    if (cur.ultimoClick > 0) {
        lista.querySelector(`li[data-index="${cur.ultimoClick-1}"]`).click();
    }
});

document.querySelector('.siguiente').addEventListener('click', () => {

    if (cur.ultimoClick < cur.numTemas - 1) {
        lista.querySelector(`li[data-index="${cur.ultimoClick+1}"]`).click();
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

    if (cur.ultimoClick < cur.numTemas) {
        lista.querySelector(`li[data-index="${cur.numTemas -1}"]`).click();
    }
});