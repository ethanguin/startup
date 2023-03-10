function initialize() {
    const userText = localStorage.getItem('user');
    let user;
    if (userText) {
        user = JSON.parse(userText);
    }
    const roomCodeText = localStorage.getItem('room-code');
    let roomCode;
    if (roomCodeText) {
        roomCode = JSON.parse(roomCodeText);
    }
    const usernameText = user.username;

    const playerText = document.querySelector('.player');
    playerText.innerHTML = usernameText;
    
    document.querySelector('.room-code').innerHTML = `<h5>#${roomCode}</h5>`;
    injectList(user.words);
};

function injectList(wordList) {
    document.getElementById('p1Words');
    for (word of wordList) {
        let outDiv = document.createElement("div");
        outDiv.className = "voting-word";
        let checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("class", `form-check-input`);
        let li = document.createElement("li");
        let singleWord = document.createTextNode(word);

        li.appendChild(singleWord);
        outDiv.appendChild(checkbox);
        outDiv.appendChild(li);

        p1Words.appendChild(outDiv);
    }
}

initialize();

const checkboxes = document.querySelectorAll(".form-check-input");
console.log(checkboxes);
const scoreText = document.querySelector(".score");

checkboxes.forEach(checkbox => {
    checkbox.addEventListener("click", reloadScore)
});

function reloadScore() {
    const checkedVals = document.querySelectorAll(".form-check-input");
    let count = 0;
    checkedVals.forEach(check => { 
        let isCheck = check.checked;
        console.log(isCheck)
        if (isCheck) {
            count++;
        }
    });
    let score = Math.floor((count)*10);
    console.log(score)
    scoreText.textContent = `Score: ${score}pts`;
};
