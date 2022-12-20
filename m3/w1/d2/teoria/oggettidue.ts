class Person {
    nome:string;
    cognome:string;
    visualizzaNomeCognome() {       //se non dichiaro nulla è pubblico e quindi accessibile dall'esterno .... invece se metto private prima di (visualizzaNomeCognome) diventa privata e non accessibile dall'esterno 
        return this.nome + ' ' + this.cognome
    }
}
var marioRossi = new Person();
marioRossi.nome = "mario";
marioRossi.cognome = "Rossi";
console.log(marioRossi.visualizzaNomeCognome()); //Mario Rossi

//static -> si usa quando voglio usare un metodo senza necessità di creare un'istanza della classe
class Persone {
    nome:string;
    cognome:string;
    constructor(nome:string,cognome:string) {
        this.nome = nome;
        this.cognome = cognome;
    }
    static concatena(a:string,b:string){
        return a+" "+ b;
    }
}
console.log(Persone.concatena("Mario","Rossi"));

//extends -> estendo una classe
class Shape {
    Area:number
    constructor(a:number) {
        this.Area = a;
    }
}
class Circle extends Shape {   //la classe figlia eredita dalla classe genitore (accede implicitamente)
    disp():void {
        console.log("Area of the circle: "+this.Area)
    }
}
var obj1 = new Circle(223);
obj1.disp();

//extend multilivello
class Root {
    str:string
}
class Child extends Root {}
class Leaf extends Child {} //eredita indirettamente da Root
var obj2 = new Leaf();
obj2.str = "Hello";
console.log(obj2.str)
