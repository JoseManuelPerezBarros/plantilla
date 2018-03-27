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

			}]
		},
		{
			'id': 1,
			'padre': null,
			'nombre': 'prueba2',
			'codigo': null,
			'archivo': 'a002.html',
			'needtime': true
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
		this.estadoPasado = {
			'indice': null,
			'activo': false
		};
		this.estadoPresente = {
			'indice': null,
			'activo': false
		};
		infocurso.temas.sort((a, b) => a.id - b.id)
		this.temaProgreso = [{}];
	}

	get curso() {
		return infocurso;
	}

	get nombre() {
		return infocurso.nombre_curso;
	}

	get temas() {
		return infocurso.temas

	}

	set actual(archivo) {
		this.tema_archivo = archivo;
	}

	get temaRuta() {
		return this.tema_archivo
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

	/*set startTemp (info)
	{
		this.startTemp=info;
	}*/

	crearElementoLista(tema, index) {
		let check = document.createTextNode("check_box_outline_blank");
		let estadoTema = document.createElement("i");
		estadoTema.classList.add("material-icons");
		estadoTema.classList.add("green-text");
		estadoTema.appendChild(check);

		let textoEnlace = document.createTextNode(tema.nombre);
		let span = document.createElement("span");
		span.appendChild(textoEnlace);

		let enlace = document.createElement("a");
		enlace.href = "#!";
		enlace.appendChild(estadoTema);
		enlace.appendChild(span);

		let col = document.createElement("div");
		col.classList.add("col");
		col.classList.add("s12");
		col.appendChild(enlace);

		let row = document.createElement("div");
		row.classList.add("row");
		row.appendChild(col);

		let li = document.createElement("li");
		li.setAttribute("data-index", index);
		li.classList.add("hoverable");
		li.appendChild(row);

		return li;
	}

	actualizanumpag(pagina) {
		let pag = document.querySelector('.numpag p');
		pag.textContent = `${pagina}/${this.temas.length}`;
	}

	gestionaTiempo(elemento, info) {
		//indeterminate_check_box

		elemento.getAttribute("data-index")
		//console.log(this.estadoPasado.indice);
		if (!this.temaCompletado.includes(parseInt(elemento.getAttribute('data-index')))) {
			console.log("hola");
			//console.log(this.curso.tiempo);
			if (this.temas[elemento.getAttribute('data-index')].needtime) {

				setTimeout(() => {
					//console.log(info);
					if (info.activo && info.indice == this.ultimoClick) {
						//TO-DO quitar del array los antiguos con array.splice
						//TO-DO quitar del array lo que ya son completados y no entran aqui
						document.querySelector("#slide-out").children.item(this.ultimoClick).querySelector("i").textContent = "check_box";
						this.temaCompletado.push(parseInt(elemento.getAttribute('data-index')));
						this.temaProgreso.splice(-1);
					} else {
						document.querySelector("#slide-out").children.item(info.indice).querySelector("i").textContent = "indeterminate_check_box";
						/*this.temaProgreso.forEach((ob) => {
							Array.prototype.splice
						});*/
					}
				}, this.curso.tiempo, this, info);

			} else {
				document.querySelector("#slide-out").children.item(this.ultimoClick).querySelector("i").textContent = "check_box";
				this.temaCompletado.push(parseInt(elemento.getAttribute('data-index')));
			}
		}

	}
}
var cur = new Curso();

/*pos = function(pos){

	this.posp = pos;
	this.algo = null;
	this.getpos = function()
	{
		return this.posp;
	}

	this.setpos = function(pos)
	{
		this.posp = pos;
	}
}
document.getAttribute
p = new pos();
console.log(p.getpos());
p.setpos(4);
console.log(p.getpos()) */