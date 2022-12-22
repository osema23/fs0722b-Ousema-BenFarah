var Abbigliamento = /** @class */ (function () {
    function Abbigliamento(id, codprod, collezione, capo, modello, quantità, colore, prezzoivainclusa, prezzoivaesclusa, disponibile, saldo) {
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantità = quantità;
        this.colore = colore;
        this.prezzoivainclusa = prezzoivainclusa;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
    }
    Abbigliamento.prototype.getsaldocapo = function () {
        return this.prezzoivainclusa - ((this.prezzoivainclusa / 100) * this.saldo);
    };
    Abbigliamento.prototype.getacquistocapo = function () {
        return (this.getsaldocapo()) * this.quantità;
    };
    Abbigliamento.prototype.arrotonda = function () {
        return Math.round(this.getsaldocapo() * 10) / 10;
    };
    return Abbigliamento;
}());
;
var capi;
fetch('https://mocki.io/v1/765b2daf-41d5-4e94-a0d5-abd918f57b8f').then(function (response) {
    return response.json();
}).then(function (json) {
    capi = json;
    console.log('dati', capi);
    for (var i = 0; i < capi.length; i++) {
        var capo1 = capi[i];
        capo1 = new Abbigliamento(capi[i].id, capi[i].codprod, capi[i].codprod, capi[i].capo, capi[i].modello, capi[i].quantita, capi[i].colore, capi[i].prezzoivainclusa, capi[i].prezzoivaesclusa, capi[i].disponibile, capi[i].saldo);
        console.log(capo1.getsaldocapo());
        console.log(capo1.getsaldocapo());
        console.log(capo1.getacquistocapo());
    }
});
