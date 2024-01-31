var timer = 60;


addBubbles = () => {
    document.getElementById('bottom').innerHTML = "";
    for (let n = 0; n < 160; n++) {
        let bubbles = document.getElementById('bottom');
        let value = Math.floor(Math.random() * 10);
        document.getElementById('toclick').innerHTML = value;
        bubbles.innerHTML += `<div class="bubble">${value}</div>`;

    }
}

timerStart = () => {
    var timerinterval = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.getElementById('timer').innerText = timer + 's';
        } else {
            clearInterval(timerinterval);
            let score = document.getElementById('score').innerText;
            document.getElementById('bottom').innerHTML = `<div class="w100"><h2 class="b1">Game&nbspOver</h2><h2 class="b1">Your&nbspScore&nbspis&nbsp:&nbsp${score}</h2><br><h2 class="tred" onclick="window.location.reload();">Restart</h2></div>`;
            document.getElementById('toclick').innerHTML = "--";
        }
    }, 1000);

}

addScore = () => {
    let toclick = document.getElementById('toclick').innerText;
    toclick = Number(toclick);
    if (timer > 0) {
        let score = document.getElementById('score').innerText;
        score = Number(score);
        score += 10;
        document.getElementById('score').innerText = score;
    } else {
        document.getElementById('bottom').innerHTML = '';
    }
}

checker = () => {
    document.getElementById('bottom').addEventListener('click',
        (a) => {
            if (timer > 0) {
                let clicked = Number(a.target.innerText);
                let toclick = Number(document.getElementById('toclick').innerText);
                if (clicked === toclick) {
                    addScore();
                }
                addBubbles();
            }
        });
}


startGame = () => {
    document.getElementById('container').style.display = "";
    addBubbles();
    timerStart();
    checker();
    document.getElementById('starter').style.display = 'none';
}