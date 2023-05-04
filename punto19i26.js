class Nodo {
    constructor(valor, peso) {
      this.valor = valor;
      this.peso = peso;
      this.hijos = [];
    }
  
    agregarHijo(nodo) {
      this.hijos.push(nodo);
    }
  
    obtenerPeso() {
      let pesoTotal = this.peso;
      for (let i = 0; i < this.hijos.length; i++) {
        pesoTotal += this.hijos[i].obtenerPeso();
      }
      return pesoTotal;
    }
  }
  //Añadir subnodos a los Nodos
  const nodoA = new Nodo('4');
  const nodoB = new Nodo('4', 1, 2, 5);
  const nodoC = new Nodo('5', 1, 4);
  const nodoD = new Nodo('1', 3);

  nodoA.agregarHijo(nodoB);
  nodoA.agregarHijo(nodoC);
  nodoA.agregarHijo(nodoD);
  //obtiene peso
  console.log(nodoA.obtenerPeso()); 