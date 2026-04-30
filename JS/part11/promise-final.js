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
.then((result)=>{
    console.log("data saved");
    console.log("result of promise :",result);
    return savetoDb("my data hello");
})
.then((result)=>{
    console.log("data 2 saved");
    console.log("result of promise :",result);
    return savetoDb("my data hello vishnu");
})
.then((result)=>{
    console.log("data 3 saved");
    console.log("result of promise :",result);
})
.catch((error)=>{
    console.log("error in saving data");
    console.log("error of promise :",error);
});