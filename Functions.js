function inputfildData() {

}

function unicData(elementId) {
    document.getElementById('display-fild').value += elementId;
}

function errageAll() {
    document.getElementById('display-fild').value = '';
}

function errageSingle(){
    const lastValue = document.getElementById('display-fild').value;
    const sliceValue = lastValue.slice(0, length-1);
    document.getElementById('display-fild').value = sliceValue;
}

function totalCalculation() {
    let a = document.getElementById('display-fild').value;
    let b = eval(a);
    document.getElementById('display-fild').value = b;
}