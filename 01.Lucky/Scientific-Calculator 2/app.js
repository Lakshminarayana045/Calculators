var result = document.getElementById("result").value;

function getNum(num) {
    document.getElementById("result").value += num;
}

function deleteValue() {
    document.getElementById("result").value = document.getElementById("result").value.slice(0,result.length-1);
}

function clearValue() {
    document.getElementById("result").value = "";
}

function getResult() {
    document.getElementById("result").value = eval(document.getElementById("result").value);
}

function getPower() {
    document.getElementById("result").value = document.getElementById("result").value * document.getElementById("result").value;
}
