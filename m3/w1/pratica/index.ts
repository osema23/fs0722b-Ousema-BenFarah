
var num = Math.floor(Math.random() * (100-1)+1);
console.log(num);
var num1 = 52 ;
var num2 = 99 ;
var num_1 = num-num1;
var num_2 = num-num2; 
if(num1 == num){
    console.log("Il giocatore 1 ha azzeccato il numero")
}
else if(num2 == num){
    console.log("il gicatore 2 ha azzeccatto il numero ")
}

if(num_1 < num_2){
    console.log("il giocatore 1 ci è andato più vicino con il numero: "+num1)
}else if(num_2 < num_1){
    console.log("il gicoarore 2 ci è andato più vicino con il numero: "+num2)

}else{
    console.log("Entrambi hanno inserito lo stesso numero")
}
