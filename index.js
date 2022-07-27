const home_score_EL = document.getElementById("home-score")
const guest_score_EL = document.getElementById("guest-score")

let home_score = 0
let guest_score = 0

function home_increment(num) {
    home_score += num
    home_score_EL.innerText = home_score
}

function guest_increment(num) {
    guest_score += num
    guest_score_EL.innerText = guest_score
}

let isRunning = false
let seconds = 2880
let countdown
let timer

function init_timer() {
    countdown = setInterval(start(), 1000)
}

function reset() {
    location.reload()
}

function start() {
    clearInterval(timer)
    timer = setInterval(() => {
        update()
    }, 1000)
}

function pause() {
    clearInterval(timer)
    countdown = ""
}

function update() {
    let minutes = Math.round((seconds - 30) / 60)
    let secondsRemain = seconds % 60
    if (secondsRemain < 10) {
        secondsRemain = "0" + secondsRemain
    }
    if (minutes < 10) {
        minutes = "0" + minutes
    }
    if (home_score == guest_score) {
        home_score_EL.style.color = `#F94F6D`
        guest_score_EL.style.color = `#F94F6D`
    } else if (home_score > guest_score) {
        home_score_EL.style.color = `#20fc8f`
        guest_score_EL.style.color = `#F94F6D`
    } else {
        home_score_EL.style.color = `#F94F6D`
        guest_score_EL.style.color = `#20fc8f`
    }
    document.getElementById("minutes").innerText = minutes
    document.getElementById("seconds").innerText = secondsRemain
    
    if (seconds != 0) {
        isRunning = true;
        seconds--
    } else {
        isRunning = false;
    }
}