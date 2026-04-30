function savetoDb(data){
    return new Promise((resolve, reject)=>{
        let internetSpeed = Math.floor(Math.random()*10)+1;
        if(internetSpeed>4){
            resolve("success : data was saved");
        }else{
            reject("failure : weak connection");
        }
    });
}
savetoDb("my data")
.then(()=>{
    console.log("data was saved successfully");
    return savetoDb("hello world");
})
.then(()=>{
    console.log("data 2 was saved successfully");
    return savetoDb("hello vishnu");
})
.then(()=>{
    console.log("data 3 was saved");
})
.catch(()=>{
    console.log("promise was rejected");
})