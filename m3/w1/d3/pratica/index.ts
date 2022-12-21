abstract  class Tasse {
    tasseinps: number;
    tasseirpef: number;
    constructor(
      tasseinps: number,tasseirpef: number) {
      this.tasseinps = tasseinps;
      this.tasseirpef = tasseirpef;
    }
   
  }
  
   
  
  class commerciante extends Tasse {
    codredd: number;
    redditoannuolordo: number;
  constructor (codredd: number,redditoannuolordo: number,tasseinps: number,tasseirpef: number){
  super(tasseinps,tasseirpef )
  this.codredd = codredd;
  this.redditoannuolordo =redditoannuolordo
  }
  getUtileTasse(){
    return this.redditoannuolordo * this.codredd;
  }
  getTasseInps(){
    return this.redditoannuolordo * this.tasseinps
  }
  getTasseIrpef(){
    return this.redditoannuolordo * this.tasseirpef
  }
  getredditoannuonetto(){
    return this.redditoannuolordo * this.tasseinps * this.tasseirpef * this.codredd
}
}
class liberoProfessionista extends Tasse {
    codredd: number;
    redditoannuolordo: number;
  constructor (codredd: number,redditoannuolordo: number,tasseinps: number,tasseirpef: number){
  super(tasseinps,tasseirpef )
  this.codredd = codredd;
  this.redditoannuolordo =redditoannuolordo
  }
  getUtileTasse(){
    return this.redditoannuolordo * this.codredd;
  }
  getTasseInps(){
    return this.redditoannuolordo * this.tasseinps
  }
  getTasseIrpef(){
    return this.redditoannuolordo * this.tasseirpef
  }
  getredditoannuonetto(){
    return this.redditoannuolordo * this.tasseinps * this.tasseirpef * this.codredd
}
}

class artigiano extends Tasse {
    codredd: number;
    redditoannuolordo: number;
  constructor (codredd: number,redditoannuolordo: number,tasseinps: number,tasseirpef: number){
  super(tasseinps,tasseirpef )
  this.codredd = codredd;
  this.redditoannuolordo =redditoannuolordo
  }
  getUtileTasse(){
    return this.redditoannuolordo * this.codredd;
  }
  getTasseInps(){
    return this.redditoannuolordo * this.tasseinps
  }
  getTasseIrpef(){
    return this.redditoannuolordo * this.tasseirpef
  }
  getredditoannuonetto(){
    return this.redditoannuolordo * this.tasseinps * this.tasseirpef * this.codredd
}}