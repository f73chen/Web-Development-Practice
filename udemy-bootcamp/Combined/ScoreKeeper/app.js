let score1 = 0;
let score2 = 0;
const point1 = document.querySelector('#p1Display');
const point2 = document.querySelector('#p2Display');
const btn1 = document.querySelector('#p1Button');
const btn2 = document.querySelector('#p2Button');
const btnReset = document.querySelector('#reset');
const playTo = document.querySelector('#playto');

const updateColours = function(disp1, disp2) {
    disp1.classList.add('has-text-success')
    disp2.classList.add('has-text-danger')
    btn1.disabled = true;
    btn2.disabled = true;
}

const checkWin = function() {
    if (score1 == playTo.value) {
        updateColours(point1, point2);
    } else if (score2 == playTo.value) {
        updateColours(point2, point1);
    }
}

const update = function() {
    point1.innerText = score1;
    point2.innerText = score2;
    checkWin();
}

btn1.addEventListener('click', () => {
    score1 += 1;
    update();
});

btn2.addEventListener('click', () => {
    score2 += 1;
    update();
});

btnReset.addEventListener('click', () => {
    score1 = 0;
    score2 = 0;
    point1.classList.remove('has-text-success', 'has-text-danger')
    point2.classList.remove('has-text-success', 'has-text-danger')
    btn1.disabled = false;
    btn2.disabled = false;
    update();
})