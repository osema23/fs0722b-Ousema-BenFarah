var alphas:string[]; //dichiaro
alphas = ["1","2","3","4"] //inizializzo
console.log(alphas[0]);
console.log(alphas[1]);

var nums:number[]=[1,2,3,4]
console.log(nums[0]);
console.log(nums[1]);
console.log(nums[2]);
console.log(nums[3]);


//creo usando l'array
// argomento -> un valore numerico che rappresenta la dimensione del mio array oppure un elenco di valori 
var arr_names:number[] = new Array(4)
for(var i = 0; i<arr_names.length;i++) {
    arr_names[i] = i * 2
    console.log(arr_names[i])
}
//argomento -> un elenco di valori 
var names:string[] = new Array("Mary", "Tom", "Jack","Jill")
for (var i=0; i<names.length;i++) {
    console.log(names[i])
}

// metodo pop -> rimuove un elemento dell'array e lo restituisce -> array.pop()

var numbers = [1, 2, 3]
var element = numbers.pop();
console.log("element is :" + element)
var element = numbers.pop();
console.log("element is :" + element)


//metodo push -> aggiunge l'elemento (gli elementi) forniti nell'array e restituisce il nuovo array
var numeri = [1, 4, 9]
var lenght = numeri.push(10);
console.log("new numbers is:" + numeri)
var lenght = numeri.push(20);
console.log("new numbers is:" + numeri)

//destrutturazione di un array
var arr:number[] = [12,14]
var [x,y] = arr //metto i valore dell'array dentro le rispettive variabili
console.log(x)
console.log(y)

//attraverso l'array con for
var j:any;
var nums:number[] = [1002, 1003, 1004, 1005]
for (j in nums) {
    console.log(nums[j])
}

// array multidimensionali (ad esempio array bidimensionale)

//var arr_name:datatype[][]=[[val1,val2,val3],[v1,v2,v3]]

// posso passare un array a una funzione
var nomi:string[] = new Array("mary", "osema", "federico")
function disp(arr_nomi:string[]) {
    for(var i=0;i<arr_nomi.length;i++) {
        console.log(nomi[i])
    }
}
disp(nomi)