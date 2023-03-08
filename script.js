
const letters = document.querySelectorAll(".gridLetter");
const wordList = document.getElementById("ordered-list");
const wordInput = document.getElementById("word-to-add");

async function startGame() {
  const letterList = createLetterList();
  const timerLength = 3; //3 minutes;
  try {
    await connectGame();
    await pushList(letterList);
    await startTimer(timerLength);
    await begin();
  } catch (error) {
    connectionFail(error);
  }
};
  

function begin() {
  const beginText = "begin!";
  wordList.innerHTML = `<p> ${beginText} </p>`;
  console.log("beginning game!");
}

function connectionFail(error) {
  console.log(error);
  // let wordNode = document.createElement("p");
  // let textNode = document.createTextNode(error);
  // wordList.appendChild(textNode);
  wordList.innerHTML = `<p> ${error} </p>`;
};


async function startTimer(timerLength) {
  wordList.innerHTML = "<p>Starting timer...</p>"
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    const pushedTime = Math.random(); //this is where it will push the time countdown to the other players
    if (pushedTime > 0.1) {
      resolve('success');
    } else {
      reject('error starting timer');
    }
  }, 2000);
  });
};

function connectGame(letterList) {
  wordList.innerHTML = "<p>Connecting...</p>"
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    const isConnected = Math.random(); //this is where it will push the time countdown to the other players
    if (isConnected > 0.5) {
      resolve('success');
    } else {
      reject('error connecting game');
    }
  }, 2000);
})};

function createLetterList() {
  let letterList = [];
  let currLetter;
  for (let i in letters) {
    currLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    letterList.push(currLetter)
    letters[i].innerText = currLetter;
  }
  return letterList;
}
  
async function pushList(letterOrder) {
  //push the letterOrder list to other players
  wordList.innerHTML = "<p>Pushing letter layout to other players...</p>";
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    const pushedList = Math.random(); //this is where it will push the time countdown to the other players
    if (pushedList > 0.1) {
      resolve('success');
    } else {
      reject('error pushing list');
    }
  }, 2000);
  });
};
  
  
wordInput.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {  //checks whether the pressed key is "Enter"
        addWord();
    }
});

function addWord() {
  let wordToAdd = wordInput.value;
  const li = document.createElement("li");
  let textNode = document.createTextNode(wordToAdd);
  li.appendChild(textNode);
  wordList.appendChild(li);
  wordInput.value = '';
};

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};