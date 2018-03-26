let infocurso = {
	'nombre_curso': 'nombre_curso_prueba',
	'descripcion': 'descripcion',
	'codigo_curso': 'codigo_prueba',
	'tiempo': 10000, //en milisegundos
	//La propiedad archivo debe de usar el siguiente formato: /[a-zA-Z]?\d{2,}\.html/i
	'temas': [{
			'nombre': 'prueba1',
			'codigo': null,
			'archivo': 'a001.html',
			'needtime': true
		},
		{
			'nombre': 'prueba2',
			'codigo': null,
			'archivo': 'a002.html',
			'needtime': true
		},
		{
			'nombre': 'prueba3',
			'codigo': null,
			'archivo': 'a003.html',
			'needtime': true
		},
		{
			'nombre': 'prueba4',
			'codigo': null,
			'archivo': 'a004.html',
			'needtime': true
		},
		{
			'nombre': 'prueba5',
			'codigo': null,
			'archivo': 'a005.html',
			'needtime': true
		},
		{
			'nombre': 'prueba6',
			'codigo': null,
			'archivo': 'a006.html',
			'needtime': true
		},
		{
			'nombre': 'prueba7',
			'codigo': null,
			'archivo': 'a007.html',
			'needtime': true
		},
		{
			'nombre': 'prueba8',
			'codigo': null,
			'archivo': 'a008.html',
			'needtime': true
		},
		{
			'nombre': 'prueba9',
			'codigo': null,
			'archivo': 'a009.html',
			'needtime': true
		},
		{
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

	actualizanumpag(pagina)
	{
		let pag = document.querySelector('.numpag p');
		pag.textContent=`${pagina}/${this.temas.length}`;
	}

	completado() {
		console.log("hola");
		document.querySelector("#slide-out").children.item(this.ultimoClick).querySelector("i").textContent = "check_box";
	}
}
var cur = new Curso();