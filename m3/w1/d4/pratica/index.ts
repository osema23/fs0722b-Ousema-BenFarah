class Abbigliamento{
    id:number;
    codprod:number;
    collezione:string
    capo:string;
    modello:number;
    quantità:number;
    colore:string;
    prezzoivainclusa:number;
    prezzoivaesclusa:number;
    disponibile:string;
    saldo:number;
    constructor(id:number,codprod:number,collezione:string,capo:string,modello:number,quantità:number,colore:string,prezzoivainclusa:number,prezzoivaesclusa:number,disponibile,saldo:number){
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantità = quantità;
        this.colore = colore;
        this.prezzoivainclusa =prezzoivainclusa;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.disponibile = disponibile;
        this.saldo =saldo
    }
    getsaldocapo(){
        return this.prezzoivainclusa -((this.prezzoivainclusa/100) * this.saldo)
    }
    getacquistocapo(){
       return (this.getsaldocapo())*this.quantità
    
    }
    arrotonda(){
        return Math.round(this.getsaldocapo()*10)/10
    }
    };
    let capi
      fetch('https://mocki.io/v1/765b2daf-41d5-4e94-a0d5-abd918f57b8f').then(function (response) {
          return response.json();
      }).then(function (json) {
          capi = json;
          console.log('dati', capi);
          for(let i=0; i<capi.length; i++){
            let capo1 = capi[i]
        
              capo1 = new Abbigliamento (capi[i].id,capi[i].codprod,capi[i].codprod,capi[i].capo,capi[i].modello,capi[i].quantita,capi[i].colore,capi[i].prezzoivainclusa,capi[i].prezzoivaesclusa,capi[i].disponibile,capi[i].saldo)
              console.log(capo1.getsaldocapo());
              console.log(capo1.getsaldocapo());
              console.log(capo1.getacquistocapo());
            }});
    