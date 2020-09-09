//Creamos el array con los envases que se van a mostrar e el DOM.
objetos = []


// Otra forma de instanciar objetos: usar un constructor.
// Nombramos una función con un sustantivo más genérico y 
// declaramos los parámetros que pasarán a ser los valores de las propiedades inicializadas.


function Envase(nombre,capacidadTotal){

  //Propiedades
  this.nombre = nombre;
  this.capacidadTotal = parseInt(capacidadTotal);
  this.capacidadLibre = parseInt(capacidadTotal);

  //Métodos
  this.llenar = function(){
    this.capacidadLibre = 0;
  };
  this.vaciar = function(){
    this.capacidadLibre = this.capacidadTotal;
  };
  this.cargar = function(cant){
    cantidad = parseInt(cant);
    if(cant <= this.capacidadLibre){
      this.capacidadLibre = this.capacidadLibre - cantidad
    }else{
      alert("No hay capacidad libre para cargar esa cantidad")
    }
  };
  this.descargar = function(cant){
    cantidad = parseInt(cant);
    if(cantidad <= this.capacidadTotal - this.capacidadLibre){
      this.capacidadLibre += cantidad;
    }else{
      alert("No se puede descargar tanto.")
    }
  };
  this.trasvasar = function(otroEnvase,cantidad){
    //¿Tengo suficiente cantidad de líquido?
    if(this.capacidadTotal - this.capacidadLibre < cantidad ){
      alert("No hay suficiente líquido.")

    //¿El otro envase tiene suficiente capacidad libre?
    }else if(window[otroEnvase].capacidadLibre < cantidad){
      alert(`El envase ${otroEnvase} no tiene capacidad suficiente.`)
    }else{
      this.descargar(cantidad);
      window[otroEnvase].cargar(cantidad);
    }

  }  

}

vaso = new Envase("vaso",250)
botella = new Envase("botella",1000);
taza = new Envase("taza", 300)

objetos.push(vaso,botella,taza)

