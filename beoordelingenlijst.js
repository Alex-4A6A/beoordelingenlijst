function cijferresultaat(inv) {
    if (inv > 0 && inv < 50){
        return ("onvoldoende")  
    }
    else if (inv > 49 && inv < 60 ){
         return ("matig")
    }
    else if (inv > 59 && inv < 75 ){
         return ("voldoende")
    }
    else if (inv > 74 && inv < 101 ){
         return ("goed")
    }

}

function resultaat1() {
    var invoer = document.getElementById("ophalen1").value
    var beoordeling = cijferresultaat(invoer)
    document.getElementById('resultaat').innerHTML += "Het cijfer is "+invoer+" en is dus "+beoordeling+"<br>"
}    

function resultaat2() {
    var invoer = document.getElementById("ophalen2").value
    var beoordeling = cijferresultaat(invoer)
    document.getElementById('resultaat').innerHTML += "De beoordeling is "+beoordeling+",want het cijfer is "+invoer+"<br>"
}    

