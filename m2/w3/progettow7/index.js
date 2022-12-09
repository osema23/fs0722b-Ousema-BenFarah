(async () =>{
    const response = await fetch("users.json");
    const datiJson = await response.json();
    console.log(datiJson); 


    const container = document.getElementById("cont");
    const row = document.getElementById("cont1");
    var back = document.createElement("div");
    back.className = " col-4 border border-secondary m-4 p-4";
    var icona = document.createElement("img");
    icona.className = "  w-10";

    var h = document.createElement("h2");
    var a = document.createElement("a");
    a.className="text-warning ";
    row.append(back);
    h.innerHTML=datiJson[0].firstName  + " " + datiJson[0].lastName;;
    a.innerHTML=datiJson[0].email;
    icona.src=datiJson[0].profileURL;
    back.append(icona);
    back.append(h);
    back.append(a);

    var back1 = document.createElement("div");
    back1.className = " col-4 border border-secondary m-4 p-4 ";
    var icona1 = document.createElement("img");
    icona1.className = " w-10";
    //icona.className = "bi bi-person-circle";
    var h1 = document.createElement("h2");
    var a1 = document.createElement("a");
    a1.className="text-warning";
    row.append(back1);
    h1.innerHTML=datiJson[1].firstName + " " + datiJson[1].lastName;
    a1.innerHTML=datiJson[1].email;
    icona1.src=datiJson[1].profileURL;
    back1.append(icona1);
    back1.append(h1);
    back1.append(a1);


    container.append(row);
})();