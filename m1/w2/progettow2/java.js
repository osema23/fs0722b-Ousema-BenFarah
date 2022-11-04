//JavaScript del progetto calcolatrice


function aggcifra(bottone){  //funzione che utilizzo per aggiungere le cifre nella calcolatrice
    document.getElementById("schermo").value += bottone.textContent; 
    

}
function operazione(){  //funzione che utilizzo per trarre il risultato delle operazioni
    let numeri= document.getElementById("schermo");
    numeri.value = eval(numeri.value);
    }

  
    function cancella() {  //funzione che utilizzo per cancellare l'intero testo
     document.getElementById("schermo").value = "";
    }
 