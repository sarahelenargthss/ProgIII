class Filme {
    constructor(titulo, ano, genero) {
        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero;
    }

    toString() {
        return "[" + this.titulo +
            ", " + this.ano +
            ", " + this.genero + "]";
    }
}

var obj1 = new Filme("Minority report", 2002, "Ficção científica");
var obj2 = new Filme("Parasita", 2019, "Suspense");
var obj3 = new Filme("Como eu era antes de você", 2016, "Romance/Drama");

document.getElementById("objetos").innerHTML = "<li>obj1 = " + obj1.toString() + "</li>" +
    "<li>obj2 = " + obj2.toString() + "</li>" +
    "<li>obj3 = " + obj3.toString() + "</li>";