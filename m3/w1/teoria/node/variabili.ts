// sintassi per dichiarare una variabile
// let nome:string = "Mary" //la variabile memorizza un tipo di dato stringa
//let nome:string      //la variabile è una stringa e il valore è undefined
//let nome ="mary"    // il tipo di dato è dedotto dal valore -> la varaibile è di tipo stringa
//let name             //il tipo di dato è any e il valore è undefined 
let nome:string = "jhon";
let score1:number = 50;
let score2:number = 42.59;
let sum = score1 + score2;
console.log("name"+nome);
console.log("first score :" +score1);
console.log("second score: "+score2);
console.log("sum of the scores: " + sum);

// Type Assertion (per cambiare il tipo della variabile)
let code:any = 123; 
let employedCode = <number> code;
console.log(typeof(employedCode));

//Inferred typing 
var num = 2; //data type inferred as number 
console.log("value of number "+num);
// num ="12"; dà errore perche ormai num è num:number (tipo di dato number)

//ambiti delle variabili 
var global_num = 12   //global variabile
class Numbers {
    num_val = 14;   //class variabile
    static sval = 18;   //static field

    storeNum():void {
        var local_num = 15; //local variabile
    }
}
console.log("Global num: "+global_num)
console.log(Numbers.sval)
var obje = new Numbers();
console.log("global num: " obje.num_val)
// console.log("Local num "+local_num) // non lo stampa (si tenta di avvedere alla varaibile locale da fuori dal metodo )