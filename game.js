const buttonColors = ['red', 'blue', 'green', 'yellow']
const gamePattern = []


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

$('.btn').click(function () {
    const userChosenColour = $(this).attr('id')
    console.log(userChosenColour);

})