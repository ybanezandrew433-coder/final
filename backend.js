let speed = 1500;      // starting speed (ms)
let timer;
let circle;
let score = 0;

// connect score display
const scoreDisplay = document.getElementById("score");

// random position function
function randomPosition(element) {
    const size = 60;
    const maxX = window.innerWidth - size;
    const maxY = window.innerHeight - size;

    element.style.left = Math.random() * maxX + "px";
    element.style.top = Math.random() * maxY + "px";
}

// update score
function updateScore() {
    score++;
    scoreDisplay.textContent = "Score: " + score;
}

// create & destroy circle
function createCircle() {
    circle = document.createElement("div");
    circle.className = "circle";

    randomPosition(circle);
    document.body.appendChild(circle);

    // click event
    circle.addEventListener("click", () => {
        clearTimeout(timer);
        circle.remove();

        updateScore();

        if (speed > 300) {
            speed -= 100; // increase speed
        }

        createCircle();
    });

    // auto destroy if missed
    timer = setTimeout(() => {
        if (circle) {
            circle.remove();
            createCircle();
        }
    }, speed);
}

// start game
createCircle();

