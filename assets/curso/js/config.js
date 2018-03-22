let infocurso = {
	'nombre_curso': 'nombre_curso_prueba',
	'descripcion': 'descripcion',
	'codigo_curso': 'codigo_prueba',
	'temas': [{
			'nombre': 'prueba1',
			'codigo': null,
			'archivo': 'a001.html'
		},
		{
			'nombre': 'prueba2',
			'codigo': null,
			'archivo': 'a002.html'
		},
		{
			'nombre': 'prueba3',
			'codigo': null,
			'archivo': 'a003.html'
		},
		{
			'nombre': 'prueba4',
			'codigo': null,
			'archivo': 'a004.html'
		},
		{
			'nombre': 'prueba5',
			'codigo': null,
			'archivo': 'a005.html'
		},
		{
			'nombre': 'prueba6',
			'codigo': null,
			'archivo': 'a006.html'
		},
		{
			'nombre': 'prueba7',
			'codigo': null,
			'archivo': 'a007.html'
		},
		{
			'nombre': 'prueba8',
			'codigo': null,
			'archivo': 'a008.html'
		},
		{
			'nombre': 'prueba9',
			'codigo': null,
			'archivo': 'a009.html'
		},
		{
			'nombre': 'prueba10',
			'codigo': null,
			'archivo': 'a0010.html'
		}

	]
};

class Curso {
	constructor() {
		this.tema_nombre = null;
		this.tema_archivo = null;
		this.activo = null;
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

}
var cur = new Curso();