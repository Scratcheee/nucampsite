let btnTent = document.getElementById("tentLabel");
let btnRV = document.getElementById("RVLabel")

btnTent.addEventListener('click', () => {
    btnTent.classList.add("btn-success");
    btnRV.classList.remove("btn-success");

})

btnRV.addEventListener('click', () => {
    btnRV.classList.add("btn-success");
    btnTent.classList.remove("btn-success");

})