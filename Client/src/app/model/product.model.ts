export class Product {

    public productid :string;
    public naam:string;
    public beschrijving:string;
    public afbeeldinglink:string;
    public prijs:number;
    public voorraad:number;
    public inwinkelmand: boolean;
    public aantalInWinkelmand: number;
    public totaalprijs;
    
    constructor(productid: string, naam:string, beschrijving:string, afbeeldinglink:string, prijs:number, voorraad:number){
        this.productid = productid;
        this.naam = naam;
        this.beschrijving = beschrijving;
        this.afbeeldinglink = afbeeldinglink;
        this.prijs = prijs;
        this.voorraad = voorraad;
        this.inwinkelmand = false;
        this.aantalInWinkelmand = 0;
        this.totaalprijs = 0;
    }
}
