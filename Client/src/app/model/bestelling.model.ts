export class Bestelling {

    public bestellingid :string;
    public totaalprijs:number;
    public aantalstuks:number;
    public klantid:string;
    public datum:string;
    public status:string;
    
    constructor(bestellingid: string, totaalprijs:number, aantalstuks:number, klantid:string, datum:string, status:string){
        this.bestellingid = bestellingid;
        this.totaalprijs = totaalprijs;
        this.aantalstuks = aantalstuks;
        this.klantid = klantid;
        this.datum = datum;
        this.status = status;
    }
}
