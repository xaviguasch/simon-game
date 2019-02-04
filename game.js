const buttonColors = ['red', 'blue', 'green', 'yellow']
const gamePattern = []


function nextSequence() {
    const randomNumber = Math.floor(Math.random() * 4)
    const randomChosenColour = buttonColors[randomNumber]

    gamePattern.push(randomChosenColour)

    const audio = new Audio(`./sounds/${randomChosenColour}.mp3`)

    audio.play()


    $(`#${randomChosenColour}`).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    $(`#${randomChosenColour}`)


}

$(document).keypress(function () {
    nextSequence()
});