// keyword abstract -> classi base che non possono essere istanziate
// devono avere almeno un metodo su cui farò la dichiaraione senza che venga implementato

abstract class Veicolo {
    private colore: string;
    protected modello:string;
    protected marca:String;

    constructor(marca:string, modello:string,colore:string) {
        this.marca=marca;
        this.modello=modello;
        this.colore=colore  
      }
      public vernicia (colore:string):void {
        this.colore = colore;
      }
      public coloreCorrente():string {
        return this.colore;
      }
      public abstract dettagliVeicolo():string 
}
class Automobile extends Veicolo {
    constructor(marca:string, modello:string, colore:string) {
        super(marca,modello,colore);
    }
    dettagliVeicolo():string{
        return `${this.marca} - ${this.modello}` 
    }
}
const jaguar = new Automobile('Jaguar', 'F-Type','nero');
console.log(jaguar.dettagliVeicolo())  //Jaguar - F-Type
console.log(jaguar.coloreCorrente())  //nero
jaguar.vernicia('rosso');
console.log(jaguar .coloreCorrente());  //rosso