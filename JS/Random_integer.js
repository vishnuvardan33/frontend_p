//random integers between min and max
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
//random from 1 to 10
//step1 = let num=math.random();
//step2 = num=num*10;
//step3 = num = math.floor(num);
//step4 = num = num + 1;
let random=Math.floor(Math.random()*10)+1;
console.log(random);