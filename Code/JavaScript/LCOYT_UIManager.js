class UIManager {
    constructor(){
        this.JSONManager = new JSONManager();
        document.getElementById("submitButton").onclick = () => {
            this.loadInfo(document.getElementById("companyNameInput").value);
        }
    }

    loadInfo(inputCompany){
        company = this.JSONManager.searchForCompany(inputCompany);
        if(company == null){
            this.resetCompany();
            this.displaySorryMessage();
            return null;
        }
        if(company.doingBadThings){
            this.loadBadCompany(inputCompany);
        } else {
            this.loadGoodCompany(inputCompany);
        }
    }

    loadGoodCompany(inputCompany){
        this.changeResultsColor("green");
        this.showResults();
        document.getElementById("companyNameOnPage").innerHTML = inputCompany.id;
        document.getElementById("companyBlurb").innerHTML = inputCompany.blurb;
    }

    loadBadCompany(inputCompany){
        this.changeResultsColor("red");
        this.showResults();
        document.getElementById("companyNameOnPage").innerHTML = inputCompany.id;
        document.getElementById("companyBlurb").innerHTML = inputCompany.blurb;
    }

    resetCompany(){
        this.changeResultsColor("white");
        this.hideResults();
        document.getElementById("companyNameOnPage").innerHTML = "You're not supposed to see this.";
        document.getElementById("companyBlurb").innerHTML = "You're not supposed to see this.";
    }

    displaySorryMessage(inputCompany){
        this.changeResultsColor("white");
        this.showResults()
        document.getElementById("companyNameOnPage").innerHTML = inputCompany.id;
        document.getElementById("companyBlurb").innerHTML = "We are sorry, we do not have any info currently about " + inputCompany.id + ".";
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