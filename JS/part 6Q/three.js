let country=["india","usa","uk","germany","france"];
function largestcountry(country){
    let largest=country[0];
    for(let i=1; i<country.length; i++){
        if(country[i].length>largest.length){
            largest=country[i];
        }
    }    console.log(largest);
}