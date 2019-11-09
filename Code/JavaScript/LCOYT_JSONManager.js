class JSONManager {
    constructor(){
     this.data = JSON.parse(companies);
    }
    
    searchForCompany(inputCompany) {
        companies = this.data.companies;
        for(company of companies){
            var patt = new RegExp(company.id.toLowerCase());
            if(patt.test(inputCompany)){
                return company;
            }
        }
        return null;
    }
}