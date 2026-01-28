let display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

function appendPower10() {
    let power = prompt("Enter power of 10 (e.g. 2 for 100):");

    if (power === null || power === "") return;

    power = Number(power);

    if (isNaN(power)) {
        alert("Please enter a valid number");
        return;
    }

    display.value += Math.pow(10, power);
}
function showPopup() {
    document.getElementById("popup").style.display = "flex";
}

function hidePopup() {
    document.getElementById("popup").style.display = "none";
}
