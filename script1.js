document.addEventListener("DOMContentLoaded", function () {
    const colorPicker1 = document.getElementById("colorPicker");
    const colorPicker2 = document.getElementById("colorPicker2");
    const generateButton = document.getElementById("generateButton");
    const container = document.querySelector(".container");

    generateButton.addEventListener("click", function () {
        const color1 = colorPicker1.value;
        const color2 = colorPicker2.value;

        container.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
    });
});
