let wordCloud = ["Hello", "hii", "how", "what", "you", "yourself", "name", "victory", "food", "lovely", "beautiful", "written", "where", "who", "awesome"];

let wordsContainerElement = document.getElementById("wordsContainer");
let addBtnElement = document.getElementById("addBtn");
let errorMsgElement = document.getElementById("errorMsg");

let errorMsg = "Please enter a word";

function onDisplayToWordCloud(word) {
    let randomFontSize = Math.ceil(Math.random() * 40) + "px";
    let wordElement = document.createElement("span");
    
    wordElement.textContent = word;
    wordElement.style.fontSize = randomFontSize;
    wordElement.classList.add("m-3");
    
    wordsContainerElement.appendChild(wordElement);
}


for (let word of wordCloud) {
    onDisplayToWordCloud(word);
}

function onAddToWordCloud() {
    let userInputElement = document.getElementById("userInput");
    let userInputValue = userInputElement.value;
    
    if (userInputValue !== "" ){
        userInputElement.value = "";
        errorMsgElement.value = "";
        onDisplayToWordCloud(userInputValue);
    }else {
        errorMsgElement.textContent = errorMsg;
    }
}
