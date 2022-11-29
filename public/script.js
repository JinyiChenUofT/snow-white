
const music0 = new sound("./audio/0.");
const musicA = new sound("./audio/A.wav");
const musicA_1 = new sound("./audio/A_1.wav");
const musicA_2 = new sound("./audio/A_2.wav");
const musicB_1 = new sound("./audio/B_1.wav");
const musicC = new sound("./audio/C.wav");
const musicC_1 = new sound("./audio/C_1.wav");
const musicC_2 = new sound("./audio/C_2.wav");
const badChoiceMusic = new sound("./audio/badChoice.mp3");

let choiceNum = 0;
const musicTree = [music0, musicA, musicC, musicA_1, musicA_2, musicC_1, musicC_2, badChoiceMusic, badChoiceMusic, musicA_1, musicB_1]
// const musicTree = [music0, music0, music0, music0, music0, music0, music0, music0, music0, music0, music0]
const choiceTree = ["Start", "Huntsman kills Snow White", "Huntsman does not kill Snow White",
    "Snow White decides to fight back", "Snow White decides not to fight back",
    "Snow White decides to work for them", "Snow White appreciate their help very much. To celebrate, the new friends sang and danced the night away",
    "Empty", "Empty",
    "Snow White decides to fight back", "Snow White still decides not to fight back"]


function startGame() {

    console.log("loading the game")
    let startButton = document.getElementById("startButton");
    startButton.style.display = "none";

    music0.play();

}

function endGame() {
    let end = document.getElementById("end");
    end.style.display = "flex";
}

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.setAttribute("class", "audioClass");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.sound.onended = function () {
        if (choiceNum == 7 || choiceNum == 8 || choiceNum > 10) {
            endGame();
        }
        else {
            toggleChoiceButtonDisply(choiceNum);
        }
    }
    this.play = function () {
        console.log("play music ", choiceNum)
        this.sound.play();
    }
    this.stop = function () {
        this.sound.pause();

    }


}

function toggleChoiceButtonDisply(choiceNum) {
    if (choiceNum == 3 || choiceNum == 5 || choiceNum == 6 || choiceNum == 9 || choiceNum == 10 || choiceNum > 10) {
        endGame();
    }
    else {
        let leftChoiceButton = document.getElementById("leftChoiceButton");
        let rightChoiceButton = document.getElementById("rightChoiceButton");
        if (leftChoiceButton.style.display === "none") {
            leftChoiceButton.style.display = "flex";
            rightChoiceButton.style.display = "flex";

            leftChoiceButton.innerText = choiceTree[choiceNum * 2 + 1];
            rightChoiceButton.innerText = choiceTree[choiceNum * 2 + 2];

        }
        else {
            leftChoiceButton.style.display = "none";
            rightChoiceButton.style.display = "none";
        }
    }
}

function leftChoice() {

    toggleChoiceButtonDisply(choiceNum);
    choiceNum = 2 * choiceNum + 1;
    musicTree[choiceNum].play();
}

function rightChoice() {
    toggleChoiceButtonDisply(choiceNum);
    choiceNum = 2 * choiceNum + 2;
    musicTree[choiceNum].play();
}
