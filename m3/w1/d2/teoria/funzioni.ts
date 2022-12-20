//definizione di una funzione
function function_name() {
    //function body
    console.log("Function called")
}

//chiamata di funzione 
function test() {
    console.log("Function called")
}
test()   //invocazione della funzione

//restituzione di una funzione
function greet():string {  //la funzione restituisce una stringa
    return "Hello world"
}

function caller() {
    var msg = greet() //function freet invoked  
    console.log(msg)
}

//invoke function
caller()

//funzioni con parametri opzionali -> gli argomenti non vengono passati obbligatoriamente
function disp_details(id:number, name:string, mail_id?:string) {
    console.log("ID:",id);
    console.log("Name;",name)

    if(mail_id!=undefined)
    console.log("Email ID", mail_id)

}
disp_details(123,"Jhon");
disp_details(111,"mary","email_producted")

//parametri rest ... in TypeScript -> devono essere tutti dello stesso tipo
function addNumbers(...nums:number[]){
    var i;
    var sum:number = 0;

    for(i = 0;i<nums.length;i++) {
        sum = sum + nums[i];

    }
    console.log("sum of the numbers", sum)
}
addNumbers(1,2,3)
addNumbers(10,10,10,10,10)


// parametri predefiniti -> esempio funzione che calcola un prezzo che ha auno sconto
function calculate_discount(price:number,rate:number = 0.50) {
    var discount = price * rate;
    console.log("Discount Amount",discount)

}
calculate_discount(1000)
calculate_discount(1000,0.30)

//funzioni anonime 
var msg = function(){
    return "helo world"
}
console.log(msg())

//funxioni anonime con parametri
var res = function(a:number,b:number) {
    return a*b
}
console.log(res(12,2))

// anche TypeScipt supporta il costruttore function 
var myFunction = new Function("a","b","retur a*b");
var k = myFunction(2,4);
console.log(k);

