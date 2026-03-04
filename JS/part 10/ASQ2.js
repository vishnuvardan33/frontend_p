//inp = document.querySelector("input");
//h2 = document.querySelector("h2");

//inp.addEventListener("input", function () {
//    h2.textContent = inp.value;
//});

const inp = document.querySelector("input");
const h2 = document.querySelector("h2");

inp.addEventListener("input", function () {
    const filtered = inp.value.replace(/[^a-zA-Z ]/g, "");
    inp.value = filtered;
    h2.textContent = filtered;
});