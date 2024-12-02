// Définition du code Konami
const konamiCode = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

let pressedKeys = [];

function checkKonamiCode(event) {
    pressedKeys.push(event.key);
    console.log("executed")
    if (pressedKeys.join(",") === konamiCode.join(",")) {
        window.location.href = "easteregg.html";
        pressedKeys = [];
        console.log(pressedKeys)
    } else if (pressedKeys.length > 10) {
        pressedKeys = []
    }
}

document.addEventListener("keydown", checkKonamiCode);
