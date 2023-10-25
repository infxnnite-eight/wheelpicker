function spinWheel() {
    const optionsInput = document.getElementById("options");
    const resultDisplay = document.getElementById("result");

    const options = optionsInput.value.split(",");
    if (options.length < 2) {
        resultDisplay.innerText = "Please enter at least two options.";
        return;
    }

    const randomIndex = Math.floor(Math.random() * options.length);
    resultDisplay.innerText = "Result: " + options[randomIndex];
}

const spinButton = document.getElementById("spinButton");
spinButton.addEventListener("click", spinWheel);
