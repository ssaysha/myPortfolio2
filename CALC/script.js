function clearScreen() {
    document.getElementById("result").value = "";
}
function display(val) {
    document.getElementById("result").value += val;
}
function calculate() {
    let x = document.getElementById("result").value;
    let y = eval(x);
    document.getElementById("result").value = y;
}
function del() {
    let ev = document.getElementById("result") 
    ev.value = ev.value.slice(0, -1);
}
