var data;

class JSONManager {
    constructor(){
    
      $.getJSON( "js/JSON/companies.json", function( json ) {
        data = json;
       });
    }
    
    searchForCompany(inputCompany) {
        var companies = data.companies;
        var patt = new RegExp(inputCompany.toLowerCase());
        for(var i = 0; i < companies.length; i++){
            if(patt.test(companies[i].id.toLowerCase())){
                return companies[i];
            }
        }
        return null;
    }
}