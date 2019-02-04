const buttonColors = ['red', 'blue', 'green', 'yellow']
const gamePattern = []
const userClickedPattern = []


function nextSequence() {
    const randomNumber = Math.floor(Math.random() * 4)
    const randomChosenColour = buttonColors[randomNumber]

    gamePattern.push(randomChosenColour)

    // playing audio associated with randonChosenColour
    const audio = new Audio(`./sounds/${randomChosenColour}.mp3`)
    audio.play()

    // Adding flickering effect to the randonChosenColour
    $(`#${randomChosenColour}`).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)

}

$(document).keypress(function () {
    nextSequence()
});

// detecting when a button is pressed
$('.btn').click(function () {
    // saving which button has been pressed
    const userChosenColour = $(this).attr('id')

    // adding the selected button color to the userClickedPattern array
    userClickedPattern.push(userChosenColour)
    console.log(userClickedPattern);
})