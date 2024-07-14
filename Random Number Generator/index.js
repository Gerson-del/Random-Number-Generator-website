
const randomNumLabel = document.getElementById("Number-container");
const Buttn = document.getElementById("Button");

Buttn.onclick = function(){
    const min = Number(document.getElementById("input1").value);
    const max = Number(document.getElementById("input2").value);
    let random_num = Math.floor(Math.random() * (max- min)) + min ;
    randomNumLabel.textContent = random_num;
}

