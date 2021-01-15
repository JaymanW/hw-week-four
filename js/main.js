$(document).ready(function() {
    quizData = [
        {
            question: "How long is the world’s longest guitar?",
            answers: ["15 feet", "27 feet", "43 feet", "59 feet"],
            correct: 2
        },
        {
            question: "How much did the most expensive guitar ever sold cost?",
            answers: ["$1.5 million", "$2.7 million", "$7.6 million", "$11.2 million"],
            correct: 1
        },
        {
            question: "What is the world record for the longest time played guitar continuously?",
            answers: ["24 hours", "36 hours", "68 hours", "114 hours"],
            correct: 3
        },
        {
            question: "Which country hosts a man-made forest in the shape of a guitar?",
            answers: ["The United States", "Honduras", "Japan", "Argentina"],
            correct: 3
        },
        {
            question: "How many pieces is the average guitar built with?",
            answers: ["14", "18", "26", "32"],
            correct: 0
        },
         {
            question: "What is the job of a guitar capo?",
            answers: ["Makes the strings easier to press", "Changes the pitch of all open strings", "Changes chords by one octave per fret", "Makes you look like a real musician"],
            correct: 1
        },
        {
            question: "The modern guitar pick began being produced in which year?",
            answers: ["1863", "1902", "1922", "1935"],
            correct: 2
        },
        {
            question: "Which of these people is NOT a famous guitar player?",
            answers: ["Jimi Hendricks", "BB King", "David Gilmour", "Magnus Carlsen"],
            correct: 3
        },
        {
            question: "How many guitars were sold in the US in 2019?",
            answers: ["1.25 million", "2.5 million", "5 million", "7.63 million"],
            correct: 0
        }
    ]

    // UPDATE HIGHSCORE
    const updateHighscore = () => {
        const highscore = localStorage.getItem("highscore");
        $("#user-score").empty();
        $("#user-score").append(highscore);
    }
    /*********************************************************/
    // GLOBAL VARIABLES

    let gameIsActive = false;
    let timer = 75;
    let roundCount = 0;
    let clockStart;
    /*********************************************************/
    // RESET DISPLAYS
    
    const clearDisplay = () => {
        $("#question-display").empty();
        $("#answer-display").empty();
    }
    /*********************************************************/
    // TIMER INTERATIONS

    const timerAction = () => {
        timer--;
        $("#timer-number").text(timer);
        if (timer === 0) {
            clearInterval(clockStart);
            timer = 0;
            $("#timer-number").text(timer);
            gameLose();
            // END GAME FUNCTION !!!!!!!!!!!!!!!!!!!!
        }
    }
    /*********************************************************/
    // EVALUATE DISPLAY

    const evaluateDisplay = () => {
        if (gameIsActive === false) {
            $("#question-display").attr("class", "hidden");
            $("#answer-display").attr("class", "hidden");
            $("#start-btn").attr("style", "display: flex;");
            $("#message-display").attr("class", "unhidden");
        } else {
            $("#question-display").attr("class", "unhidden");
            $("#answer-display").attr("class", "unhidden");
            $("#start-btn").attr("style", "display: none");
            $("#message-display").attr("class", "hidden");
        }
    }
    /*********************************************************/
    // GENERATE QUIZ ELEMENTS
    const generateQuizRound = () => {
        // Generate Question
        const question = $("<h2>");
        question.attr("class", "question-header")
        question.text(quizData[roundCount].question);
        $("#question-display").append(question);

        // Generate Answers
        for (let i = 0; i < quizData[roundCount].answers.length; i++) {
            const answer = $("<p>");
            answer.attr("class", "answer-selection")
            answer.attr("data-answer", i)
            answer.text(quizData[roundCount].answers[i]);
            $("#answer-display").append(answer);
        }

        // Answers Event Handlers
        $(".answer-selection").on("click", function() {
            let userSelection = $(this).attr("data-answer");
            console.log(userSelection);
            if (userSelection == quizData[roundCount].correct) {
                console.log(userSelection);
                $("#timer-number").attr("style", "color: green");
                    const revertGreen = () => {
                        $("#timer-number").attr("style", "color: #fff");
                    }
                    setTimeout(revertGreen, 750);
                nextRound();
            } else {
                if (timer > 10) {
                    timer = timer - 10;
                    $("#timer-number").text(timer);
                    $("#timer-number").attr("style", "color: red");
                    const revertRed = () => {
                        $("#timer-number").attr("style", "color: #fff");
                    }
                    setTimeout(revertRed, 750);
                    $("#timer-number").attr("style", "color: red");
                    nextRound();
                } else {
                    clearInterval(clockStart);
                    timer = 0;
                    $("#timer-number").text(timer);
                    gameLose();
                    // GAME OVER FUNCTION !!!!!!!!!!!!!!!!!!!!!!
                }
                
            }
        });
    }
    /*********************************************************/
    // NEXT ROUND

    const nextRound = () => {
        if (roundCount < 8) {
            roundCount++;
            clearDisplay();
            generateQuizRound();
        } else {
            gameWin();
            // GAME OVER FUNCTION !!!!!!!!!!!!!!!!! WIN
        }
    }
    /*********************************************************/
    // GAME LOSE

    const gameLose = () => {
        clearDisplay();
        const question = $("<h2>");
        question.attr("class", "question-header")
        question.text("GAME OVER :(");
        $("#question-display").append(question);

        setTimeout(resetGame, 2000);
    }
    /*********************************************************/
    // GAME WIN

    const gameWin = () => {
        localHighscore = localStorage.getItem("highscore");
        clearInterval(clockStart);
        if (timer > localHighscore) {
            clearDisplay();
            const question = $("<h2>");
            question.attr("class", "question-header")
            question.text("NEW HIGHSCORE!");
            $("#question-display").append(question);
            localStorage.setItem("highscore", timer);
            updateHighscore();
            setTimeout(resetGame, 2000);
        } else {
            clearDisplay();
            const question = $("<h2>");
            question.attr("class", "question-header")
            question.text("YOU WON!");
            $("#question-display").append(question);
            setTimeout(resetGame, 2000);
        }
        
        // if beat quiz
    }
    /*********************************************************/
    // RESET GAME

    const resetGame = () => {
        gameIsActive = false;
        timer = 75;
        $("#timer-number").text(timer);
        roundCount = 0;
        clockStart = null;
        clearDisplay();
        evaluateDisplay();
        generateQuizRound();
        evaluateDisplay();
    }
    /*********************************************************/
    // START GAME

    const startGame = () => {
        gameIsActive = true;
        clockStart = setInterval(timerAction, 1000);
        evaluateDisplay();
        // $("#message-display").empty();
        $("#message-display").attr("class", "hidden");
    }
    /*********************************************************/
    // INIT FUNCTIONS
    
    generateQuizRound();
    evaluateDisplay();
    updateHighscore();
    /*********************************************************/
    // EVENT HANDLERS

    $("#start-btn").on("click", startGame);
    /*********************************************************/
});