let infocurso = {
	'nombre_curso': 'nombre_curso_prueba',
	'descripcion': 'descripcion',
	'codigo_curso': 'codigo_prueba',
	'tiempo': 5000, //en milisegundos
	//La propiedad archivo debe de usar el siguiente formato: /[a-zA-Z]?\d{2,}\.html/i
	// Padre o Subtemas ?
	'temas': [{
			'id': 0,
			'padre': null,
			'nombre': 'prueba1',
			'codigo': null,
			'archivo': 'a001.html',
			'needtime': true,
			'subtemas': [{
				'id': 100,
				'padre': null,
				'nombre': 'pruebaHijo',
				'codigo': null,
				'archivo': 'a0020.html',
				'needtime': true,
				'subtemas': [{
					'id': 102,
					'padre': null,
					'nombre': 'pruebaNieto',
					'codigo': null,
					'archivo': 'a0021.html',
					'needtime': true
				}, {
					'id': 103,
					'padre': null,
					'nombre': 'pruebaNieto2',
					'codigo': null,
					'archivo': 'a0022.html',
					'needtime': true
				}]
			}]
		},
		{
			'id': 1,
			'padre': null,
			'nombre': 'prueba2',
			'codigo': null,
			'archivo': 'a002.html',
			'needtime': true,
			'subtemas': [{
					'id': 200,
					'padre': null,
					'nombre': 'pruebaHijo2',
					'codigo': null,
					'archivo': 'a00201.html',
					'needtime': true,
					'subtemas': [{
						'id': 202,
						'padre': null,
						'nombre': 'pruebaNieto2',
						'codigo': null,
						'archivo': 'a00212.html',
						'needtime': true
					}, {
						'id': 203,
						'padre': null,
						'nombre': 'pruebaNieto23',
						'codigo': null,
						'archivo': 'a00223.html',
						'needtime': true
					}]
				},
				{
					'id': 207,
					'padre': null,
					'nombre': 'pruebaHijo24',
					'codigo': null,
					'archivo': 'a002014.html',
					'needtime': true,
					'subtemas': [{
						'id': 218,
						'padre': null,
						'nombre': 'pruebaNieto276',
						'codigo': null,
						'archivo': 'a002125.html',
						'needtime': true
					}, {
						'id': 209,
						'padre': null,
						'nombre': 'pruebaNieto234',
						'codigo': null,
						'archivo': 'a002235.html',
						'needtime': true
					}]
				}
			]
		},
		{
			'id': 2,
			'padre': null,
			'nombre': 'prueba3',
			'codigo': null,
			'archivo': 'a003.html',
			'needtime': true
		},
		{
			'id': 13,
			'padre': null,
			'nombre': 'prueba4',
			'codigo': null,
			'archivo': 'a004.html',
			'needtime': true
		},
		{
			'id': 4,
			'padre': null,
			'nombre': 'prueba5',
			'codigo': null,
			'archivo': 'a005.html',
			'needtime': false
		},
		{
			'id': 55,
			'padre': null,
			'nombre': 'prueba6',
			'codigo': null,
			'archivo': 'a006.html',
			'needtime': true
		},
		{
			'id': 16,
			'padre': null,
			'nombre': 'prueba7',
			'codigo': null,
			'archivo': 'a007.html',
			'needtime': true
		},
		{
			'id': 97,
			'padre': null,
			'nombre': 'prueba8',
			'codigo': null,
			'archivo': 'a008.html',
			'needtime': true
		},
		{
			'id': 8,
			'padre': null,
			'nombre': 'prueba9',
			'codigo': null,
			'archivo': 'a009.html',
			'needtime': true
		},
		{
			'id': 9,
			'padre': null,
			'nombre': 'prueba10',
			'codigo': null,
			'archivo': 'a0010.html',
			'needtime': true
		}
	]
};

class Curso {
	constructor() {
		this.tema_nombre = null;
		this.tema_archivo = null;
		this.activo = null;
		this.temaCompletado = [];
		this.startTemp = {};
		this.temaProgreso = [];
		this.contSubtema = 1;
		this.numTemas = this.ordenayCuenta(this.temas, true);
		this.indexTemas = 0;
	}

	get curso() {
		return infocurso;
	}

	get nombre() {
		return infocurso.nombre_curso;
	}

	get temas() {
		return infocurso.temas;
	}

	set actual(archivo) {
		this.tema_archivo = archivo;
	}

	get temaRuta() {
		return this.tema_archivo;
	}

	set ultimoClick(activo) {
		this.activo = activo;
	}
	get ultimoClick() {
		return this.activo;
	}

	get lista() {
		return document.getElementById('slide-out');
	}

	crearSubtemas(tema, lista, padre) {
		if (tema.subtemas && tema.subtemas.length > 0) {

			let sublista = document.createElement('ul');
			sublista.classList.add('subtema');
			sublista.classList.add('col');
			sublista.classList.add('s12');

			let row = document.createElement('li');
			row.classList.add('row');
			row.classList.add('hijo');

			tema.subtemas.forEach((subtema, subindex) => {
				let subelemento = this.crearElementoLista(subtema, `${padre}-${subindex}`);
				subelemento.onclick = setTema;
				sublista.appendChild(subelemento);
				if (subtema.subtemas && subtema.subtemas.length > 0) {
					this.crearSubtemas(subtema, sublista, `${padre}-${subindex}`);
				}
			});
			row.appendChild(sublista);
			lista.appendChild(row);
		}
	}

	crearElementoLista(tema, index) {

		let check = document.createTextNode('check_box_outline_blank');
		let estadoTema = document.createElement('i');
		estadoTema.classList.add('material-icons');
		estadoTema.classList.add('green-text');
		estadoTema.appendChild(check);

		let textoEnlace = document.createTextNode(tema.nombre);
		let span = document.createElement('span');
		span.appendChild(textoEnlace);

		let enlace = document.createElement('a');
		enlace.href = '#!';
		enlace.appendChild(estadoTema);
		enlace.appendChild(span);

		let col = document.createElement('div');
		col.classList.add('col');
		col.classList.add('s12');
		col.appendChild(enlace);

		let row = document.createElement('div');
		row.classList.add('row');
		row.appendChild(col);

		let li = document.createElement('li');
		li.setAttribute('data-ruta', index);
		li.setAttribute('data-index', this.indexTemas++);
		li.classList.add('hoverable');
		li.classList.add('padre');
		li.appendChild(row);

		return li;
	}

	actualizanumpag(pagina) {
		let pag = document.querySelector('.numpag p');
		pag.textContent = `${pagina}/${this.numTemas}`;
	}

	gestionaTiempo(elemento, info) {
		if (!this.temaCompletado.includes(parseInt(elemento.getAttribute('data-index')))) {
			if (this.getRutaCompleta(elemento.getAttribute('data-ruta')).needtime) {
				setTimeout(() => {
					if (info.activo && info.indice == this.ultimoClick) {
						if (document.querySelector('#slide-out').querySelector(`li[data-index="${this.ultimoClick}"]`).querySelector('i').classList.contains('orange-text')) {
							document.querySelector('#slide-out').querySelector(`li[data-index="${this.ultimoClick}"]`).querySelector('i').classList.remove('orange-text');
							document.querySelector('#slide-out').querySelector(`li[data-index="${this.ultimoClick}"]`).querySelector('i').classList.add('green-text');
						} else {
							document.querySelector('#slide-out').querySelector(`li[data-index="${this.ultimoClick}"]`).querySelector('i').classList.add('green-text');
						}
						document.querySelector('#slide-out').querySelector(`li[data-index="${this.ultimoClick}"]`).querySelector('i').textContent = 'check_box';
						this.temaCompletado.push(parseInt(elemento.getAttribute('data-index')));
						this.temaProgreso.splice(-1);
					}
				}, this.curso.tiempo, this, info);

			} else {
				document.querySelector('#slide-out').querySelector(`li[data-index="${this.ultimoClick}"]`).querySelector('i').textContent = 'check_box';
				this.temaCompletado.push(parseInt(elemento.getAttribute('data-index')));
			}
		}
	}

	getRutaCompleta(ancestros, tema = this.temas, hijos = false) {
		!hijos ? ancestros = ancestros.split('-') : ancestros.shift();
		return ancestros.length > 1 ? this.getRutaCompleta(ancestros, tema[ancestros[0]].subtemas, true) : tema[ancestros[0]];
	}

	ordenayCuenta(temas = this.temas, ordenar = true) {
		let cont = temas.length;
		for (let i = 0; i < temas.length; i++)
			if (temas[i].subtemas) {
				if (ordenar) temas[i].subtemas.sort((a, b) => a.id - b.id);
				cont += this.ordenayCuenta(temas[i].subtemas, ordenar)
			}
		if (ordenar) temas.sort((a, b) => a.id - b.id);
		return cont;
	}
}

var cur = new Curso();

//FUNCIONA sin esto; quitar del array los antiguos con array.splice
//FUNCIONA sin esto; quitar del array lo que ya son completados y no entran aqui
//TO-DO mejor responsive, 480px
//DONE cursor pointer, tooltips botones control
//DONE Añadir check indeterminado naranja cuando se accedió pero no se acabó
//DONE Varios tamaños de letra texto contenido
//TO-DO Varios tamaños letra encabezados
//TO-DO aria-labels
//DONE Subtemas
//TO-DO Usar clearTimeOut
//TO-DO Tutorial materialize css
//DONE Funcional con subtemas recursivos ?
//DONE funcion ruta completa
//DONE actualizarnumpagina data-indexTotal y data-ruta

//Código Desechado

/*cur.temaProgreso.some((el, ind, arr) => {
	if (el.indice == cur.ultimoClick) {
		el.activo = false;
		return true;
	} else {
		return false;
	}
})*/

//Expresion regular lineas sin ;
// ^.+[^{},;]$