const buttonColors = ['red', 'blue', 'green', 'yellow']
const gamePattern = []
const userClickedPattern = []
let started = false
let level = 0


$(document).keypress(function () {
    if (!started) {
        $('#level-title').text(`Level ${level}`)
        nextSequence()
        started = true;
    }
});



// detecting when a button is pressed
$('.btn').click(function () {
    // saving which button has been pressed
    const userChosenColour = $(this).attr('id')

    // adding the selected button color to the userClickedPattern array
    userClickedPattern.push(userChosenColour)

    // playing audio associated with userChosenColour
    playSound(userChosenColour)

    animatePress(userChosenColour)

    checkAnswer(userClickedPattern.length - 1)
})



function nextSequence() {
    level++
    $('#level-title').text(`Level ${level}`)

    const randomNumber = Math.floor(Math.random() * 4)
    const randomChosenColour = buttonColors[randomNumber]

    gamePattern.push(randomChosenColour)

    // Adding flickering effect to the randonChosenColour
    $(`#${randomChosenColour}`).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)

    // playing audio associated with randonChosenColour
    playSound(randomChosenColour)
}


function playSound(name) {
    const audio = new Audio(`./sounds/${name}.mp3`)
    audio.play()
}

function animatePress(currentColour) {
    $(`#${currentColour}`).addClass('pressed')

    setInterval(() => {
        $(`#${currentColour}`).removeClass('pressed')
    }, 100);
}

function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        console.log('It is the same!');
        setInterval(() => {
            nextSequence()
        }, 1000);
    } else {
        console.log('Wrooooong');
        $('#level-title').text(`Game over!!!`)
    }



}