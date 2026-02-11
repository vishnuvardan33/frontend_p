const student = {
    name: "vishnu",
    age:20,
    eng:90,
    math:100,
    phy:90,
    getAvg (){
        console.log(this);
        let avg=(this.eng+this.math+this.phy)/3;
        console.log(`${this.name} average is ${avg}`);
    }
}