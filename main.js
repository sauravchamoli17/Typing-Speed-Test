const setOfWords = ["They desperately needed another drummer since the current one only knew how to play bongos.",
    "My dentist tells me that chewing bricks is very bad for your teeth.",
    "He liked to play with words in the bathtub.",
    "All you need to do is pick up the pen and begin.",
    "She looked into the mirror and saw another person.",
    "When I cook spaghetti, I like to boil it a few minutes past al dente so the noodles are super slippery.",
    "The beach was crowded with snow leopards.",
    "There have been days when I wished to be separated from my body, but today wasn’t one of those days.",
    "I purchased a baby clown from the Russian terrorist black market.",
    "Nudist colonies shun fig-leaf couture.",
    "Peanut butter and jelly caused the elderly lady to think about her past.",
    "If eating three-egg omelets causes weight-gain, budgie eggs are a good substitute.",
    "It's not often you find a soggy banana on the street.",
    "People generally approve of dogs eating cat food but not cats eating dog food.",
    "The efficiency we have at removing trash has made creating trash more acceptable.",
    "Seek success, but always be prepared for random cats.",
    "He barked orders at his daughters but they just stared back with amusement.",
    "She had that tint of craziness in her soul that made her believe she could actually make a difference.",
    "The bullet pierced the window shattering it before missing Danny's head by mere millimeters.",
    "They desperately needed another drummer since the current one only knew how to play bongos.",
];

const msg = document.getElementById("text");
const typeWords = document.getElementById("words");
const btn = document.getElementById("action");
const incorrect = document.getElementById("incorrect");
const correct = document.getElementById("correct");
let startTime, endTime;

function startTyping() {
    let randomNumber = Math.floor(Math.random() * setOfWords.length);
    let date = new Date();
    msg.innerText = setOfWords[randomNumber];
    startTime = date.getTime();
    btn.innerText = "Done";
}

 function wordCounter(str){
    let response = str.split(" ").length;
    return response;
 }

function compareWords(str1,str2) {
    let words1 = str1.split(" "); //Computer Generated Words
    let words2 = str2.split(" "); //User Generated Words
    let count = 0;
    
    words1.forEach(function (item, index) {
        if (item == words2[index]) {
            count++; //Correct Words
        }
    })
    let errorWords = (words1.length - count);

    // Words Metric 
    correct.style.display = "block";
    correct.innerText = " "+count+ " Correct Words!";
    incorrect.style.display = "block";
    incorrect.innerText = " "+errorWords+ " Incorrect Words!";
}

function endTyping() { 
    let date = new Date();
    endTime = date.getTime();
    
    let totalTime = ((endTime - startTime) / 1000);
    let totalString = typeWords.value;
    
    let wordCount = wordCounter(totalString);
    let speed = Math.round((wordCount / totalTime) * 60);

    let message = "Your typing speed is " + speed + " words per minute!";
    msg.innerText = message;

    compareWords(msg.innerText, totalString);
}

btn.addEventListener('click', function () {
    if (this.innerText == 'Start') {
        typeWords.disabled = false;
        typeWords.placeholder = "Start writing the above sentence here...";
        correct.style.display = "none";
        correct.style.display = "none";
        startTyping();
    }
    else if (this.innerText == 'Done') {
        typeWords.disabled = true;
        typeWords.value = "";
        typeWords.placeholder = "Remember, practice makes the man perfect!";
        btn.innerText = "Start";
        endTyping();
    }
})