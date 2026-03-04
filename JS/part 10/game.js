let inp = document.querySelector("input");

inp.addEventListener("keydown", function(event){
    console.log("code = ",event.code);
    if(event.code == "KeyU"){
        console.log("charecter moves up");
    }else if(event.code == "KeyD"){
        console.log("charecter moves down");
    }else if(event.code == "KeyL"){
        console.log("charecter moves left");
    }else if(event.code == "KeyR"){
        console.log("charecter moves right");
    }
});