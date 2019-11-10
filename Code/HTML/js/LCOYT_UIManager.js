class UIManager {
    constructor(){
        this.JSONManager = new JSONManager();
        document.getElementById("submitButton").onclick = () => {
            this.loadInfo(document.getElementById("companyNameInput").value);
        }
    }

    loadInfo(inputCompany){
        var company = this.JSONManager.searchForCompany(inputCompany);
        if(company == null){
            this.resetCompany();
            this.displaySorryMessage(inputCompany);
            return null;
        }
        if(company.doingBadThings == "True"){
            this.loadBadCompany(inputCompany, company);
        } else {
            this.loadGoodCompany(inputCompany, company);
        }
    }

    loadGoodCompany(name, inputCompany){
        this.changeResultsColor("#bbff96");
        this.showResults();
        document.getElementById("companyNameOnPage").innerHTML = name;
        document.getElementById("companyBlurb").innerHTML = inputCompany.blurb;
    }

    loadBadCompany(name, inputCompany){
        this.changeResultsColor("#e60000");
        this.showResults();
        document.getElementById("companyNameOnPage").innerHTML = name;
        document.getElementById("companyBlurb").innerHTML = inputCompany.blurb;
        document.getElementById("companyContact").innerHTML = "Company contact<br/>Twitter: " + inputCompany.twitter + "<br/>Phone number: " + inputCompany.contactInfo;
    }

    resetCompany(){
        this.changeResultsColor("white");
        this.hideResults();
        document.getElementById("companyNameOnPage").innerHTML = "You're not supposed to see this.";
        document.getElementById("companyBlurb").innerHTML = "You're not supposed to see this.";
        document.getElementById("companyContact").innerHTML = "You're not supposed to see this.";
    }

    displaySorryMessage(inputCompany){
        this.changeResultsColor("white");
        this.showResults()
        document.getElementById("companyNameOnPage").innerHTML = inputCompany;
        document.getElementById("companyBlurb").innerHTML = "We are sorry, we do not have any info currently about " + inputCompany + ".";
    }

    changeResultsColor(color){
        document.getElementById("two").style.backgroundColor = color;
    }

    hideResults(){
        document.getElementById("two").style.display = "none";
    }

    showResults(){
        document.getElementById("two").style.display = "block";
    }
}