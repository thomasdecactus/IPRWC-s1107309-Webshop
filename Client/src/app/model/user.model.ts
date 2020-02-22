export class User {

    public token :string;
    public klantid :string;
    public email:string;
    public wachtwoord:string;
    public voornaam:string;
    public achternaam:string;
    public straat:string;
    public huisnummer: string;
    public stad: string;
    public postcode:string;
    public userType: string;
    
    constructor(token: string, klantid :string, email:string, wachtwoord:string, voornaam:string, achternaam:string, straat:string, huisnummer: string, stad: string, postcode:string, userType: string){
        this.token = token;
        this.klantid = klantid;
        this.email = email;
        this.wachtwoord = wachtwoord;
        this.voornaam = voornaam;
        this.achternaam = achternaam;
        this.straat = straat;
        this.huisnummer = huisnummer;
        this.stad = stad;
        this.postcode = postcode;
        this.userType = userType;
    }

    getToken(){
        return this.token;
    }

    getKlantid(){
        return this.klantid;
    }

    getEmail(){
        return this.email;
    }

    getWachtwoord(){
        return this.wachtwoord;
    }

    getVoornaam(){
        return this.voornaam;
    }

    getAchternaam(){
        return this.achternaam;
    }

    getStraat(){
        return this.straat;
    }

    getHuisnummer(){
        return this.huisnummer;
    }

    getStad(){
        return this.stad;
    }

    getPostcode(){
        return this.postcode;
    }

    getUsertype(){
        return this.userType;
    }
    
}
