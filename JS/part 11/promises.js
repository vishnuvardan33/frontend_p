function savetoDB(data, success, failure){
    let internetSpeed = Math.floor(Math.random() * 10)+1;
    if(internetSpeed >4){
        success();
    } else {
        failure();      
    }
}
savetoDB(
    "apna college",
    ()=>{
        console.log("sucee : data saved to DB");
        savetoDB(
            "hello world",
            ()=>{
                console.log("sucee 2: data saved to DB");
                savetoDB(
                    "vishnu",
                    ()=>{
                        console.log("sucee 3: data saved to DB");
                    },
                    ()=>{
                        console.log("failure 3: data not saved to DB");
                    }
                );
            },
            ()=>{
                console.log("failure 2: data not saved to DB");
            }
        );
    },
    ()=>{
        console.log("failure : data not saved to DB");
    }
);