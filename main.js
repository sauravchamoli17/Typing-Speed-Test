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
let startTime, endTime;

function startTyping() {
    let randomNumber = Math.floor(Math.random()*setOfWords.length);
    msg.innerText = setOfWords[randomNumber];
    let date = new Date();
    startTime = date.getTime();
    btn.innerText = "Done";
}

btn.addEventListener('click', function () {
    if (this.innerText == 'Start') {
        typeWords.disabled = false;
        typeWords.placeholder = "Write the sentence above here...";
        startTyping();
    }
    else if (this.innerText == 'Done') {
        typeWords.disabled = true;
        this.innerText = "Start";
        typeWords.placeholder = "Remember, practice makes the man perfect!";
    }
})