const nums = [10, 20 , 30,  40, 50];

const allmulof10 = nums.every((nums) => {
    return nums % 10 === 0;

})
console.log(allmulof10);