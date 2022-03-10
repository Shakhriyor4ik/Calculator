let plus = document.querySelector("#plus")
let minus = document.querySelector("#minus")
let times = document.querySelector("#times")
let divide = document.querySelector("#divide")
let solve

plus.onclick = () => {
    solve = '+'
}
minus.onclick = () => {
    solve = '-'
}
times.onclick = () => {
    solve = '*'
}
divide.onclick = () => {
    solve = ':'
}


function calculator() {
    let result;

    let num1 = Number(document.querySelector("#num-1").value);
    let num2 = Number(document.querySelector("#num-2").value);

    switch (solve) {
        case '+':
            result = num1 + num2
            break;
        case '-':
            result = num1 - num2
            break;
        case '*':
            result = num1 * num2
            break;
        case ':':
            result = num1 / num2
            break;
    }
    document.getElementById("result").innerHTML = result;
}

let btn = document.querySelector(".result-btn")

btn.onclick = () => {
    calculator()
}