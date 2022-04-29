function getBotResponse(input) {
    // rock paper scissors
    if (input == "rock") {
        return "paper, haha fuck you :)";
    } else if (input == "paper") {
        return "scissors, haha nt :)";
    } else if (input == "scissors") {
        return "rock, haha and you call ME bot? :)";
    }

    // Basic responses
    if (input == "hello") {
        return "Hi Ivanka! :)";
    } else if (input == "bye") {
        return "see ya later aligator! :)";
    } else {
        return "ask me something else!";
    }
}