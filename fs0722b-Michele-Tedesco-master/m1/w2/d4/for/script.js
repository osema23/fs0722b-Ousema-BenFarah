//for per ciclare basandosi su un indice a scelta
for(let i = 0; i < 10; i++) {
    if(i == 2){
        continue;//passo all'iterazione successiva
    }
    document.write(i);
}

document.write('<hr>');


//for per ciclare array
let animali = ['Tigre','Leone','Gatto','Cane','Alpaca'];
for(let i = 0; i < animali.length; i++) {
    document.write( animali[i] + ' - ' );
}

document.write('<hr>');

//for of per ciclare array
for(let animale of animali){
    document.write( animale + ' - ' );
}

document.write('<hr>');
//for of per ciclare stringhe

let stringa = 'Ciao, come va?';
for(let lettera of stringa){
    document.write( lettera + '<br>' );
}


//for in per ciclare oggetti
let utente = {
    nome:'Mario',
    cognome: 'Rossi',
    anni: 30
}

let propAccettate = ['nome', 'cognome','anni']//la lista delle proprietà che voglio mostrare

document.write('<ul>')
for(let proprietà in utente ){
    if(propAccettate.includes(proprietà)){
        document.write(`<li>${proprietà}: ${ utente[proprietà] }</li>`)
    }
}
document.write('</ul>')




//me lo ha chiesto Dino
//let [a1,a2,a3,a4,a5] = animali;
//console.log(a1,a2,a3,a4,a5)



