const boxes = document.querySelectorAll("box")
boxes.forEach((box, index) => {
    box.addEventListener('click', () => {
        box.classList.add(`box_${index + 1}`);
    });
});

const input = document.getElementById("nameInput");
const button = document.getElementById("greetBtn");
const greeting = document.querySelector("#greeting h2");

button.addEventListener("click", () => {
    const name = input.value;
    greeting.textContent = `Hello , ${name}`;
});
