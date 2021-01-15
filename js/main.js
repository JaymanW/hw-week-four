$(document).ready(function() {
    //ROUND ONE DATA
    const roundOneQuestion = "How long is the world’s longest guitar?";
    const roundOneAnswers = ["15 feet", "27 feet", "43 feet", "59 feet"];
    const roundOneCorrect = 2;

    //ROUND TWO DATA
    const roundTwoQuestion = "How much did the most expensive guitar ever sold cost?";
    const roundTwoAnswers = ["$1.5 million", "$2.7 million", "$7.6 million", "$11.2 million"];
    const roundTwoCorrect = 1;

    //ROUND THREE DATA
    const roundThreeQuestion = "What is the world record for the longest time played guitar continuously?";
    const roundThreeAnswers = ["24 hours", "36 hours", "68 hours", "114 hours"];
    const roundThreeCorrect = 3;

    //ROUND FOUR DATA
    const roundFourQuestion = "Which country hosts a man-made forest in the shape of a guitar?";
    const roundFourAnswers = ["The United States", "Honduras", "Japan", "Argentina"];
    const roundFourCorrect = 3;

    //ROUND FIVE DATA
    const roundFiveQuestion = "How many pieces is the average guitar built with?";
    const roundFiveAnswers = ["14", "18", "26", "32"];
    const roundFiveCorrect = 0;

    //ROUND SIX DATA
    const roundSixQuestion = "What is the job of a guitar capo?";
    const roundSixAnswers = ["Makes the strings easier to press", "Changes the pitch of all open strings", "Changes chords by one octave per fret", "Makes you look like a real musician"];
    const roundSixCorrect = 1;

    //ROUND SEVEN DATA
    const roundSevenQuestion = "The modern guitar pick began being produced in which year?";
    const roundSevenAnswers = ["1863", "1902", "1922", "1935"];
    const roundSevenCorrect = 2;

    //ROUND EIGHT DATA
    const roundEightQuestion = "Which of these people is NOT a famous guitar player?";
    const roundEightAnswers = ["Jimi Hendricks", "BB King", "David Gilmour", "Magnus Carlsen"];
    const roundEightCorrect = 3;

    //ROUND NINE DATA
    const roundNineQuestion = "How many guitars were sold in the US in 2019?";
    const roundNineAnswers = ["1.25 million", "2.5 million", "5 million", "7.63 million"];
    const roundNineCorrect = 0;

    let gameIsActive = false;

    let roundCount = 1;

    // const generateQuizRound = (roundQuestion, roundAnswers, roundCorrect) => {
    //     const question = $("<h2>");
    //     question.text(roundQuestion);

    //     $("#question-display").append(question);
    // }

    const evaluateDisplay = () => {
        if (gameIsActive === false) {
            $("#question-display").attr("class", "hidden");
            $("#answer-display").attr("class", "hidden");
            $("#start-btn").attr("style", "display: flex;");
            // $("#message-display").attr("class", "hidden");
        } else {
            $("#question-display").attr("class", "unhidden");
            $("#answer-display").attr("class", "unhidden");
            $("#start-btn").attr("style", "display: none");
            // $("#message-display").attr("class", "unhidden");
        }
    }

    const generateQuizRound = (roundQuestion) => {
        const question = $("<h2>");
        question.attr("class", "question-header")
        question.text(roundQuestion);

        $("#question-display").append(question);
    }

    generateQuizRound(roundOneQuestion);

    const startGame = () => {
        gameIsActive = true;
        evaluateDisplay();
        console.log("Hello");
    }

    evaluateDisplay();

    $("#start-btn").on("click", startGame);
});