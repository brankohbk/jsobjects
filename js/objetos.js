objetos = []
// Instanciamos un objeto "vaso".
vaso = {
    // Propiedades.
    // Serían las cualidades del objeto en la vida real
    nombre: "vaso",
    capacidadTotal: undefined,
    capacidadLibre: undefined,

    // Métodos.
    // ¿Qué función puede cumplir el vaso?
    // Son verbos, acciones que puede realizar este objeto.
    setCapacidadTotal: function (ml) {
        this.capacidadTotal = ml
        this.capacidadLibre = ml
    },
    vaciar: function () {
        this.capacidadLibre = this.capacidadTotal;
    },
    llenar: function () {
        this.capacidadLibre = 0
    },
    cargar: function (cant) {
        cantidad = parseInt(cant)
        if (this.capacidadLibre >= cantidad) {
            this.capacidadLibre = this.capacidadLibre - cantidad
        } else {
            alert(`No hay capacidad libre suficiente en ${this.nombre} para contener esa cantidad.\nSi agregamos ${cantidad} ml teniendo ${this.capacidadLibre} ml libres van a sobrar ${(this.capacidadLibre - cantidad) * -1} ml`)
        }
    },
    descargar: function (cant) {
        cantidad = parseInt(cant)
        cantidad < this.capacidadTotal ?
            this.capacidadLibre = this.capacidadLibre + cantidad
            : this.capacidadLibre = this.capacidadTotal
    },
    getCapacidadLibre: function () {
        return this.capacidadLibre + " ml"
    },
    getCapacidadTotal: function () {
        return this.capacidadTotal + " ml"
    },
    trasvasar: function (otroEnvase, cantidad) {
        // Como el value del dropdown es un string, tengo que buscar dentro
        // del objeto window (la ventana del navegador) un objeto con el nombre que coincida con ese string.
        if (this.capacidadTotal - this.capacidadLibre < cantidad) { alert("No hay suficiente líquido para trasvasar") }
        else if (window[otroEnvase].capacidadLibre < cantidad) { alert(`No hay capacidad libre suficiente en ${window[otroEnvase].nombre}.\nSi agregamos ${cantidad} ml teniendo ${window[otroEnvase].capacidadLibre} ml libres van a sobrar ${(window[otroEnvase].capacidadLibre - cantidad) * -1} ml.\nSeleccione otro envase, o trasvase menos líquido.`) }
        else {
            this.descargar(cantidad);
            window[otroEnvase].cargar(cantidad);
        }
    }
}

vaso.setCapacidadTotal(250)
objetos.push(vaso)

// Otra forma de instanciar objetos: usar un constructor.
// Nombramos una función con un sustantivo más genérico y 
// declaramos los argumentos que pasarán a ser los valores de las propiedades inicializadas.

function Envase(nombre, capacidadTotal) {
    //Propiedades
    this.nombre = nombre;
    this.capacidadTotal = parseInt(capacidadTotal);
    this.capacidadLibre = parseInt(capacidadTotal);

    // Métodos.
    this.vaciar = function () {
        this.capacidadLibre = this.capacidadTotal;
    }
    this.llenar = function () {
        this.capacidadLibre = 0
    }
    this.cargar = function (cant) {
        cantidad = parseInt(cant)
        if (this.capacidadLibre >= cantidad) {
            this.capacidadLibre = this.capacidadLibre - cantidad
        } else {
            alert(`No hay capacidad libre suficiente en ${this.nombre} para contener esa cantidad.\nSi agregamos ${cantidad} ml teniendo ${this.capacidadLibre} ml libres van a sobrar ${(this.capacidadLibre - cantidad) * -1} ml`)
        }
    }
    this.descargar = function (cant) {
        cantidad = parseInt(cant);
        if (cantidad <= this.capacidadTotal - this.capacidadLibre) {
            this.capacidadLibre += cantidad;
        } else {
            alert("No se puede descargar tanto.")
        }
    }
    this.getCapacidadLibre = function () {
        return this.capacidadLibre + " ml"
    }
    this.getCapacidadTotal = function () {
        return this.capacidadTotal + " ml"
    }
    // Creamos un método para interactuar con otros objetos.
    this.trasvasar = function (otroEnvase, cantidad) {
        
        //¿Tengo suficiente cantidad de líquido?
        if (this.capacidadTotal - this.capacidadLibre < cantidad) { alert("No hay suficiente líquido para trasvasar") }

        //¿El otro envase tiene suficiente capacidad libre?
        else if (window[otroEnvase].capacidadLibre < cantidad) { alert(`No hay capacidad libre suficiente en ${window[otroEnvase].nombre}.\nSi agregamos ${cantidad} ml teniendo ${window[otroEnvase].capacidadLibre} ml libres van a sobrar ${(window[otroEnvase].capacidadLibre - cantidad) * -1} ml.\nSeleccione otro envase, o trasvase menos líquido.`) }
        else {
            this.descargar(cantidad);
            window[otroEnvase].cargar(cantidad);
        }
    }
}

// "botella", "taza" y "pinta" son objetos instanciados a partir del constructor "envase".
// En este caso puntual, al constructor le pasamos como parámetro la capacidad total del objeto.
taza = new Envase("taza", 300)
pinta = new Envase("pinta", 480)
botella = new Envase("botella", 1000)
objetos.push(botella, taza, pinta)
