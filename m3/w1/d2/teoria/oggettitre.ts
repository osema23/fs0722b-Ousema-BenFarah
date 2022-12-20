// get e set
class Persons {
nome:string;
cognome:string;
constructor(nome,cognome) {
    this.nome = nome;
    this.cognome = cognome;
    }
    get nomeCompleto():string {
        return this.nome + ' ' + this.cognome
    }
    set nomeCompleto(valore:string){
        var parti = valore.toString().split(' ');
        this.nome = parti[0]  || '';
        this.cognome = parti[1] || '';
    }
}
var marioRossi2 = new Persons("Mario", "Rossi");
console.log(marioRossi2.nomeCompleto);
marioRossi2.nomeCompleto = 'Giuseppe Verdi'; 
console.log(marioRossi2.nomeCompleto);
console.log(marioRossi2.nome);
console.log(marioRossi2.cognome);