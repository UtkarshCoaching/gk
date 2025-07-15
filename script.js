const questions = [
 {
    "question": "ভারতের জাতীয় গান 'বন্দে মাতরম' কে রচনা করেন?",
    "options": [
      "রবীন্দ্রনাথ ঠাকুর",
      "বঙ্কিমচন্দ্র চট্টোপাধ্যায়",
      "কাজী নজরুল ইসলাম",
      "মুহম্মদ ইকবাল"
    ],
    "answer": "বঙ্কিমচন্দ্র চট্টোপাধ্যায়",
    "userAnswer": null,
    "status": null
  },
  {
    "question": "ভারতের প্রথম প্রধানমন্ত্রী কে ছিলেন?",
    "options": [
      "সর্দার বল্লভভাই প্যাটেল",
      "জওহরলাল নেহেরু",
      "ড. বি. আর. আম্বেদকর",
      "মহাত্মা গান্ধী"
    ],
    "answer": "জওহরলাল নেহেরু",
    "userAnswer": null,
    "status": null
  },
  {
    "question": "'স্বরাজ আমার জন্মগত অধিকার, এবং আমি তা অর্জন করব' - এই উক্তিটি কার?",
    "options": [
      "মহাত্মা গান্ধী",
      "সুভাষচন্দ্র বসু",
      "বাল গঙ্গাধর তিলক",
      "ভগত সিং"
    ],
    "answer": "বাল গঙ্গাধর তিলক",
    "userAnswer": null,
    "status": null
  },
  {
    "question": "জালিয়ানওয়ালাবাগ হত্যাকাণ্ড কত সালে ঘটেছিল?",
    "options": [
      "১৯১৯",
      "১৯২০",
      "১৯২২",
      "১৯৩৫"
    ],
    "answer": "১৯১৯",
    "userAnswer": null,
    "status": null
  },
  {
    "question": "ভারতের স্বাধীনতা দিবস কবে পালিত হয়?",
    "options": [
      "২৬শে জানুয়ারি",
      "১৫ই আগস্ট",
      "২রা অক্টোবর",
      "১৪ই নভেম্বর"
    ],
    "answer": "১৫ই আগস্ট",
    "userAnswer": null,
    "status": null
  },
  {
    "question": "মহাত্মা গান্ধীকে কে 'জাতির জনক' উপাধি দিয়েছিলেন?",
    "options": [
      "জওহরলাল নেহেরু",
      "সর্দার বল্লভভাই প্যাটেল",
      "সুভাষচন্দ্র বসু",
      "রবীন্দ্রনাথ ঠাকুর"
    ],
    "answer": "সুভাষচন্দ্র বসু",
    "userAnswer": null,
    "status": null
  },
  {
    "question": "ভারতীয় জাতীয় কংগ্রেসের প্রথম মহিলা সভাপতি কে ছিলেন?",
    "options": [
      "সরোজিনী নাইডু",
      "অ্যানি বেসান্ত",
      "নেলি সেনগুপ্ত",
      "ইন্দিরা গান্ধী"
    ],
    "answer": "অ্যানি বেসান্ত",
    "userAnswer": null,
    "status": null
  },
  {
    "question": "'দিল্লি চলো' স্লোগানটি কে দিয়েছিলেন?",
    "options": [
      "মহাত্মা গান্ধী",
      "জওহরলাল নেহেরু",
      "সুভাষচন্দ্র বসু",
      "ভগত সিং"
    ],
    "answer": "সুভাষচন্দ্র বসু",
    "userAnswer": null,
    "status": null
  },
  {
    "question": "ভারতের শেষ গভর্নর জেনারেল কে ছিলেন?",
    "options": [
      "লর্ড মাউন্টব্যাটেন",
      "সি. রাজাগোপালাচারী",
      "লর্ড কার্জন",
      "লর্ড উইলিয়াম বেন্টিঙ্ক"
    ],
    "answer": "সি. রাজাগোপালাচারী",
    "userAnswer": null,
    "status": null
  },
  {
    "question": "সিন্ধু সভ্যতার একটি প্রধান বন্দর শহর কোনটি?",
    "options": [
      "হরপ্পা",
      "মহেঞ্জোদারো",
      "লোথাল",
      "কালিবঙ্গান"
    ],
    "answer": "লোথাল",
    "userAnswer": null,
    "status": null
  }

];


let currentQuestionIndex = 0;
let score = 0;
let correctCount = 0;
let wrongCount = 0;
let skippedCount = 0;
let selectedOption = null;
let questionTimerInterval;
const questionTimeLimit = 30;
let questionTimeLeft;
let userName = ''; // ব্যবহারকারীর নাম সংরক্ষণের জন্য ভেরিয়েবল
const passMarkPercentage = 60; // Changed to 60%

// DOM Elements
const nameInputScreen = document.getElementById('nameInputScreen');
const userNameInput = document.getElementById('userNameInput');
const proceedToStartScreenButton = document.getElementById('proceedToStartScreenButton');
const nameInputMessage = document.getElementById('nameInputMessage');

const startScreen = document.getElementById('startScreen');
const startButton = document.getElementById('startButton');

const totalQuestionsInfo = document.getElementById('totalQuestionsInfo');
const fullMarksInfo = document.getElementById('fullMarksInfo');
const timeLimitInfo = document.getElementById('timeLimitInfo');

const quizScreen = document.getElementById('quizScreen');
const resultScreen = document.getElementById('resultScreen');

// New: References to the result summary and detailed answers containers
const resultSummary = document.getElementById('resultSummary');
const detailedAnswersContainer = document.getElementById('detailedAnswersContainer');


const scoreDisplayElem = document.getElementById('scoreDisplay');
const questionIndexDisplayElem = document.getElementById('questionIndexDisplay');

const questionTextBox = document.getElementById('questionTextBox');
const optionsContainer = document.getElementById('optionsContainer');
const feedbackMessage = document.getElementById('feedbackMessage');
const nextButton = document.getElementById('nextButton');
const skipButton = document.getElementById('skipButton');
const submitButton = document.getElementById('submitButton');

const questionTimerTextElem = document.getElementById('questionTimer');
const progressRingBar = document.querySelector('.progress-ring-bar');
const circumference = 2 * Math.PI * 35;
progressRingBar.style.strokeDasharray = circumference;
progressRingBar.style.strokeDashoffset = circumference;

const rankListElem = document.getElementById('rankList');

// New: Get the new buttons for detailed answers
const showAllAnswersButton = document.getElementById('showAllAnswersButton');
const showCorrectAnswersButton = document.getElementById('showCorrectAnswersButton');
const showWrongAnswersButton = document.getElementById('showWrongAnswersButton');
const showSkippedQuestionsButton = document.getElementById('showSkippedQuestionsButton');
const backToResultsButton = document.getElementById('backToResultsButton'); // Back button
const detailedAnswersTitle = document.getElementById('detailedAnswersTitle');
const questionsList = document.getElementById('questionsList');


// Set initial info on start screen
totalQuestionsInfo.textContent = questions.length;
fullMarksInfo.textContent = questions.length;
timeLimitInfo.textContent = Math.ceil(questions.length * questionTimeLimit / 60);

// --- Event Listeners ---
proceedToStartScreenButton.addEventListener('click', handleNameInputAndShowStartScreen);
startButton.addEventListener('click', startQuiz);

nextButton.addEventListener('click', handleNextQuestion);
skipButton.addEventListener('click', handleSkipQuestion);
submitButton.addEventListener('click', handleSubmitQuiz);

// New: Event listeners for the detailed answer buttons
showAllAnswersButton.addEventListener('click', () => displayDetailedQuestions('all'));
showCorrectAnswersButton.addEventListener('click', () => displayDetailedQuestions('correct'));
showWrongAnswersButton.addEventListener('click', () => displayDetailedQuestions('wrong'));
showSkippedQuestionsButton.addEventListener('click', () => displayDetailedQuestions('skipped'));
backToResultsButton.addEventListener('click', backToSummaryScreen);


// --- Name Input and Screen Flow ---
function handleNameInputAndShowStartScreen() {
    const inputName = userNameInput.value.trim();
    if (inputName === '') {
        nameInputMessage.textContent = "আপনার নাম লিখুন কুইজ শুরু করার জন্য।";
        return;
    }
    userName = inputName; // ব্যবহারকারীর নাম সংরক্ষণ করুন
    nameInputMessage.textContent = ''; // মেসেজ মুছে ফেলুন

    nameInputScreen.classList.remove('active');
    startScreen.classList.add('active'); // নাম ইনপুট করার পর startScreen দেখান
}


function startQuiz() { // startScreen থেকে কুইজ শুরু করার ফাংশন
    startScreen.classList.remove('active');
    quizScreen.classList.add('active');
    resetQuizState(); // কুইজ স্টেট রিসেট করুন কুইজ শুরু করার আগে
    loadQuestion();
    scoreDisplayElem.textContent = score;
}

function resetQuizState() {
    currentQuestionIndex = 0;
    score = 0;
    correctCount = 0;
    wrongCount = 0;
    skippedCount = 0;
    // Reset user answers and status for each question
    questions.forEach(q => {
        q.userAnswer = null;
        q.status = null;
    });
    clearInterval(questionTimerInterval); // নিশ্চিত করুন কোনো টাইমার চলছে না
}


function updateQuestionTimerDisplay() {
    questionTimerTextElem.textContent = questionTimeLeft;

    const offset = circumference - (questionTimeLeft / questionTimeLimit) * circumference;
    progressRingBar.style.strokeDashoffset = offset;

    // Change color based on time left
    if (questionTimeLeft <= 10) {
        progressRingBar.style.stroke = '#FF6347';
    } else if (questionTimeLeft <= 20) {
        progressRingBar.style.stroke = '#FFD700';
    } else {
        progressRingBar.style.stroke = '#28a745';
    }
}

function startQuestionTimer() {
    clearInterval(questionTimerInterval);
    questionTimeLeft = questionTimeLimit;
    updateQuestionTimerDisplay();
    questionTimerInterval = setInterval(() => {
        questionTimeLeft--;
        updateQuestionTimerDisplay();
        if (questionTimeLeft <= 0) {
            clearInterval(questionTimerInterval);
            // Only proceed if the question hasn't been answered yet
            if (questions[currentQuestionIndex].status === null) { // Check status
                handleTimeUp();
            }
        }
    }, 1000);
}


function loadQuestion() {
    if (currentQuestionIndex >= questions.length) {
        handleSubmitQuiz();
        return;
    }
    clearInterval(questionTimerInterval);
    startQuestionTimer();

    const currentQuestion = questions[currentQuestionIndex];
    questionIndexDisplayElem.textContent = `${currentQuestionIndex + 1} / ${questions.length}`;

    questionTextBox.textContent = currentQuestion.question;
    optionsContainer.innerHTML = '';
    feedbackMessage.textContent = '';
    feedbackMessage.style.color = 'transparent';
    selectedOption = null;

    nextButton.style.display = 'none';
    skipButton.style.display = 'inline-block';
    submitButton.style.display = 'none';

    if (currentQuestionIndex === questions.length - 1) {
        submitButton.style.display = 'inline-block';
        nextButton.style.display = 'none';
        skipButton.style.display = 'none';
    }

    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.classList.add('option');
        button.textContent = option;
        button.addEventListener('click', () => selectOption(button, option));
        optionsContainer.appendChild(button);
    });

    enableOptions();
}


function selectOption(selectedButton, selectedAnswer) {
    const currentQuestion = questions[currentQuestionIndex];
    if (currentQuestion.status !== null) return; // Already answered, do nothing

    clearInterval(questionTimerInterval); // Stop the timer as soon as an option is selected

    disableOptions(); // Disable options to prevent multiple clicks

    const correctAnswer = currentQuestion.answer;
    currentQuestion.userAnswer = selectedAnswer; // Store user's answer

    selectedButton.classList.add('selected');

    if (selectedAnswer === correctAnswer) {
        selectedButton.classList.add('correct');
        score += 1;
        correctCount++;
        // feedbackMessage.textContent = 'সঠিক উত্তর!'; // Removed as per request
        // feedbackMessage.style.color = '#28a745'; // Removed as per request
        currentQuestion.status = 'correct'; // Set status
    } else {
        selectedButton.classList.add('wrong');
        wrongCount++;
        // feedbackMessage.textContent = `ভুল উত্তর। সঠিক উত্তর: ${correctAnswer}`; // Removed as per request
        // feedbackMessage.style.color = '#dc3545'; // Removed as per request

        // Highlight the correct answer if the selected one was wrong
        Array.from(optionsContainer.children).forEach(optionBtn => {
            if (optionBtn.textContent === correctAnswer) {
                optionBtn.classList.add('correct');
            }
        });
        currentQuestion.status = 'wrong'; // Set status
    }

    scoreDisplayElem.textContent = score.toFixed(2);

    // Show appropriate buttons
    nextButton.style.display = 'inline-block';
    skipButton.style.display = 'none';
    submitButton.style.display = (currentQuestionIndex === questions.length - 1) ? 'inline-block' : 'none';
}


function handleTimeUp() {
    const currentQuestion = questions[currentQuestionIndex];
    if (currentQuestion.status !== null) return; // Already answered, do nothing

    skippedCount++;
    currentQuestion.status = 'skipped'; // Set status
    currentQuestion.userAnswer = 'কোনো উত্তর দেওয়া হয়নি'; // Indicate skipped

    showAnswer(); // Show the correct answer
    disableOptions(); // Disable options

    // Automatically move to the next question after a short delay
    setTimeout(() => {
        currentQuestionIndex++;
        loadQuestion();
    }, 2000); // 2 seconds delay
}

function showAnswer() {
    const currentQuestion = questions[currentQuestionIndex];
    const correctAnswer = currentQuestion.answer;

    Array.from(optionsContainer.children).forEach(optionBtn => {
        optionBtn.style.pointerEvents = 'none'; // Ensure no further clicks
        if (optionBtn.textContent === correctAnswer) {
            optionBtn.classList.add('correct'); // Highlight correct answer
        }
    });
    // Adjust feedback message for skipped questions (removed as per request for general feedback)
    // if (currentQuestion.status === 'skipped') {
    //     feedbackMessage.textContent = `বাদ পড়া প্রশ্ন। সঠিক উত্তর: ${correctAnswer}`;
    //     feedbackMessage.style.color = '#ffc107'; // Yellow/Orange color for skipped answer
    // }

    // Ensure buttons are correctly displayed after showing answer
    nextButton.style.display = 'inline-block';
    skipButton.style.display = 'none';
    submitButton.style.display = (currentQuestionIndex === questions.length - 1) ? 'inline-block' : 'none';
}


function disableOptions() {
    Array.from(optionsContainer.children).forEach(opt => {
        opt.style.pointerEvents = 'none';
    });
}

function enableOptions() {
    Array.from(optionsContainer.children).forEach(opt => {
        opt.style.pointerEvents = 'auto';
        opt.classList.remove('selected', 'correct', 'wrong');
    });
}


function handleNextQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    // If user clicks Next without selecting an option, treat as skipped
    if (currentQuestion.status === null) {
        clearInterval(questionTimerInterval); // Stop timer
        skippedCount++;
        currentQuestion.status = 'skipped';
        currentQuestion.userAnswer = 'কোনো উত্তর দেওয়া হয়নি';
        showAnswer(); // Show answer for skipped question
        disableOptions(); // Disable options
        // Wait briefly before moving to next question for skipped questions
        setTimeout(() => {
            currentQuestionIndex++;
            loadQuestion();
        }, 1000); // Shorter delay for manual skip
    } else {
        // If already answered, just move to next
        currentQuestionIndex++;
        loadQuestion();
    }
}

function handleSkipQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    if (currentQuestion.status !== null) return; // Already answered, do nothing

    clearInterval(questionTimerInterval);
    skippedCount++;
    currentQuestion.status = 'skipped';
    currentQuestion.userAnswer = 'কোনো উত্তর দেওয়া হয়নি';

    showAnswer();
    disableOptions();

    setTimeout(() => {
        currentQuestionIndex++;
        loadQuestion();
    }, 1000); // Shorter delay for manual skip
}


function handleSubmitQuiz() {
    clearInterval(questionTimerInterval); // Stop any running timer
    quizScreen.classList.remove('active');
    resultScreen.classList.add('active'); // Show the main result screen first

    // Ensure detailed answers container is hidden initially
    detailedAnswersContainer.style.display = 'none';
    resultSummary.style.display = 'block'; // Show result summary

    const totalPossibleScore = questions.length;
    // const passMark = (passMarkPercentage / 100) * totalPossibleScore; // Removed as per request
    const yourPercentage = (score / totalPossibleScore) * 100;

    document.getElementById('finalTotalQuestions').textContent = questions.length;
    document.getElementById('correctAnswers').textContent = correctCount;
    document.getElementById('wrongAnswers').textContent = wrongCount;
    document.getElementById('skippedQuestions').textContent = skippedCount;
    document.getElementById('finalScore').textContent = score.toFixed(2);
    // document.getElementById('finalFullMarks').textContent = questions.length; // This element doesn't exist in updated HTML
    // document.getElementById('passMark').textContent = passMark.toFixed(2); // Removed as per request
    document.getElementById('yourPercentage').textContent = yourPercentage.toFixed(2) + '%';

    // Set percentage bar width
    const percentageBarFill = document.getElementById('percentageBarFill');
    percentageBarFill.style.width = `${yourPercentage}%`;
    // Color of percentage bar can still indicate general success (green for > 50% or so)
    if (yourPercentage >= 50) { // Using a general threshold for color, not a "pass mark"
        percentageBarFill.style.backgroundColor = '#28a745'; // Green
    } else {
        percentageBarFill.style.backgroundColor = '#dc3545'; // Red
    }

    // Firebase-এ ফলাফল সেভ করুন এবং র‍্যাঙ্কিং লোড করুন
    saveQuizResult();
    displayRankings();
}

// Firebase-এ ফলাফল সেভ করুন
function saveQuizResult() {
    // নিশ্চিত করুন ব্যবহারকারীর নাম আছে
    if (!userName) {
        console.error("ব্যবহারকারীর নাম পাওয়া যায়নি। ফলাফল সেভ করা যাবে না।");
        alert("আপনার নাম ছাড়া ফলাফল সেভ করা যাবে না।");
        return;
    }

    // Firebase-এর 'quizResults' পাথে এবং QUIZ_ID এর অধীনে ডেটা পুশ করুন
    // খেয়াল রাখবেন QUIZ_ID কে অবশ্যই index.html এ সংজ্ঞায়িত করতে হবে।
    database.ref('quizResults/' + QUIZ_ID).push({
        name: userName, // কুইজের শুরুতে নেওয়া নাম
        score: score.toFixed(2), // স্কোর দশমিক সংখ্যা হিসেবে সেভ করুন
        correct: correctCount,
        wrong: wrongCount,
        skipped: skippedCount,
        totalQuestions: questions.length,
        timestamp: new Date().toISOString() // কখন কুইজ দেওয়া হয়েছে
    })
    .then(() => {
        console.log("ফলাফল সফলভাবে Firebase-এ সেভ হয়েছে!");
    })
    .catch((error) => {
        console.error("ফলাফল সেভ করতে সমস্যা হয়েছে:", error);
        alert("ফলাফল সেভ করতে সমস্যা হয়েছে।");
    });
}

// Firebase থেকে র‍্যাঙ্কিং লোড এবং প্রদর্শন করুন (প্রতি ব্যবহারকারীর সর্বোচ্চ স্কোর)
function displayRankings() {
    rankListElem.innerHTML = '<li>র‍্যাঙ্কিং লোড হচ্ছে...</li>';

    // Firebase-এর 'quizResults/QUIZ_ID' পাথে থেকে ডেটা লোড করুন
    database.ref('quizResults/' + QUIZ_ID).once('value', (snapshot) => {
        const userHighestScores = {}; // প্রতিটি ব্যবহারকারীর সর্বোচ্চ স্কোর সংরক্ষণের জন্য

        snapshot.forEach((childSnapshot) => {
            const data = childSnapshot.val();
            // Undefined বা invalid নাম এন্ট্রি বাদ দিন
            if (!data.name || typeof data.name !== 'string' || data.name.trim() === '') {
                // Optionally log to see bad data
                // console.warn("Invalid name found in Firebase data:", data);
                return; // Skip this entry
            }
            // Invalid স্কোর এন্ট্রি বাদ দিন
            const userScore = parseFloat(data.score);
            if (isNaN(userScore)) {
                // Optionally log to see bad data
                // console.warn("Invalid score found for user:", data.name, data.score);
                return; // Skip this entry
            }

            const userName = data.name;

            // যদি এই ব্যবহারকারী প্রথমবারের মতো আসে অথবা বর্তমান স্কোর পূর্ববর্তী সর্বোচ্চ স্কোরের চেয়ে বেশি হয়
            if (!userHighestScores[userName] || userScore > userHighestScores[userName].score) {
                userHighestScores[userName] = {
                    name: userName,
                    score: userScore
                };
            }
        });

        // userHighestScores অবজেক্ট থেকে অ্যারে তৈরি করুন
        const rankings = Object.values(userHighestScores);

        // স্কোর অনুযায়ী ডিসেন্ডিং অর্ডারে সর্ট করুন
        rankings.sort((a, b) => b.score - a.score);

        rankListElem.innerHTML = '';
        if (rankings.length === 0) {
            rankListElem.innerHTML = '<li>এখনো কোনো র‍্যাঙ্কিং নেই।</li>';
        } else {
            rankings.forEach((entry, index) => {
                const listItem = document.createElement('li');
                listItem.textContent = `${index + 1}. ${entry.name} - স্কোর: ${entry.score.toFixed(2)}`;
                rankListElem.appendChild(listItem);
            });
        }
    })
    .catch((error) => {
        console.error("র‍্যাঙ্কিং লোড করতে সমস্যা হয়েছে:", error);
        rankListElem.innerHTML = '<li>র‍্যাঙ্কিং লোড করা যায়নি।</li>';
    });
}

// Function to display detailed answers based on category
function displayDetailedQuestions(category) {
    resultSummary.style.display = 'none'; // Hide summary
    detailedAnswersContainer.style.display = 'block'; // Show detailed view
    questionsList.innerHTML = ''; // Clear previous list

    let titleText = '';
    let filteredQuestions = [];

    if (category === 'all') {
        titleText = 'সমস্ত প্রশ্ন ও উত্তর';
        filteredQuestions = questions;
    } else if (category === 'correct') {
        titleText = 'সঠিক উত্তরসমূহ';
        filteredQuestions = questions.filter(q => q.status === 'correct');
    } else if (category === 'wrong') {
        titleText = 'ভুল উত্তরসমূহ';
        filteredQuestions = questions.filter(q => q.status === 'wrong');
    } else if (category === 'skipped') {
        titleText = 'বাদ পড়া প্রশ্নসমূহ';
        filteredQuestions = questions.filter(q => q.status === 'skipped');
    }

    detailedAnswersTitle.textContent = titleText;

    if (filteredQuestions.length === 0) {
        const listItem = document.createElement('li');
        listItem.textContent = `এই ক্যাটাগরিতে কোনো প্রশ্ন নেই।`;
        questionsList.appendChild(listItem);
        return;
    }

    filteredQuestions.forEach((q, index) => {
        const listItem = document.createElement('li');
        listItem.classList.add('detailed-question-item'); // Base class for detailed question styling

        let statusText = '';
        let statusClass = '';

        if (q.status === 'correct') {
            statusText = ' (Correct)';
            statusClass = 'correct-status';
        } else if (q.status === 'wrong') {
            statusText = ' (Wrong)';
            statusClass = 'wrong-status';
        } else if (q.status === 'skipped') {
            statusText = ' (Skipped)';
            statusClass = 'skipped-status';
        }

        const originalQuestionIndex = questions.indexOf(q); // Get original question index
        const questionNumber = originalQuestionIndex + 1; // 1-based index

        let questionHtml = `
            <div class="question-header">
                <span class="question-number">${questionNumber}.</span>
                <span class="question-text">${q.question}</span>
                <span class="status-indicator ${statusClass}">${statusText}</span>
            </div>
            <ul class="detailed-options">
        `;

        q.options.forEach(option => {
            let optionClass = '';
            if (q.userAnswer === option) {
                if (q.status === 'correct') {
                    optionClass = 'selected-correct';
                } else if (q.status === 'wrong') {
                    optionClass = 'selected-wrong';
                }
            }
            if (option === q.answer && q.status !== 'correct') { // Always show correct answer if user was wrong or skipped
                optionClass += ' correct-answer-highlight';
            }
            
            questionHtml += `<li class="${optionClass}">${option}</li>`;
        });

        questionHtml += `</ul>`;
        listItem.innerHTML = questionHtml;
        questionsList.appendChild(listItem);
    });
}


// Function to go back to result summary
function backToSummaryScreen() {
    detailedAnswersContainer.style.display = 'none'; // Hide detailed view
    resultSummary.style.display = 'block'; // Show summary
}
