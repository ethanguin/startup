
const letters = document.querySelectorAll(".gridLetter");
const wordList = document.getElementById("ordered-list");
const wordInput = document.getElementById("word-to-add");



// This Automatically shows the modal.
const myModal = new bootstrap.Modal(document.getElementById('myModal'));
myModal.show();


function submitUser() {
  let IP_Add = '123.123.123.123';
  let el = document.getElementById('username');

  console.log('Initializing User:')
  const newUser = game.addUser(el.value)

  myModal.hide(); 
}

class Game {
  roomCode;
  time;
  // rootUser is the user on this machine{username: 'username', ip: '123.123.123.123', words: ['word1', 'word2', 'word3']}
  rootUser;

  constructor() {
    this.roomCode = this.randRoomCode()
    this.users = []
    this.time = 10000
    localStorage.setItem('room-code', JSON.stringify(this.roomCode));
  };

  addUser(user){
    this.rootUser = {}
    this.rootUser.username = user
    this.rootUser.ip = '123.123.123.123'
    this.rootUser.words = []
    console.log(this.rootUser)
  }

  // submitUser() {
  //   let IP_Add = '123.123.123.123';
  //   let el = document.getElementById('username');

  //   const newUser = new User(el.value, IP_Add);
  //   this.addUser(newUser);
  //   this.rootUser = users[0];
  
  //   console.log(newUser.username, newUser.ip, newUser.words);
  
  //   myModal.hide(); 
  // };

  randRoomCode() {
    // create 6-digit room code
    const roomCode = (Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000);

    // apply roomcode to header
    document.querySelector('.room-code').innerHTML = `<h5>#${roomCode}</h5>`

    // apply roomcode to user-login modal
    document.getElementById('userInputBody').innerHTML = `<div class="input-group mb-3" id="userInputBody"><input id="username" type="text" class="form-control" placeholder="Username" aria-label="Username"><span class="input-group-text">Room Code:</span><input type="text" class="form-control" placeholder="# ${roomCode}" aria-label="Server" disabled></div>`
    
    return roomCode;
  };

  addWord() {
    let wordToAdd = wordInput.value;
    if (!wordToAdd.trim()) { //checks if it's only whitespace
      return;
    };
  
    // adding word to <ul> on screen
    const li = document.createElement("li");
    let textNode = document.createTextNode(wordToAdd);
    li.appendChild(textNode);
    wordList.appendChild(li);
    
    // adds word to 'words' array inside rootUser object
    this.rootUser.words.push(wordToAdd);
  
    wordInput.value = '';
  };
  
  votingScreen() {
    this.saveWords(this.rootUser.words);
    
    window.location.href = "voting.html";
    document.querySelector('.room-code').innerHTML = `<h5>#${roomCode}</h5>`
  };

  saveWords(words) {
    localStorage.setItem('user', JSON.stringify(this.rootUser));
  };

  reset() {
    this.roomCode = randRoomCode();
    this.users = [];
    this.time = 10000;
  };
};

const game = new Game;




// Everything after this line is old code.


async function startGame() {
  const letterList = createLetterList();
  const timerLength = 1; // minutes;
  try {
    await connectGame();
    await pushList(letterList);
    await countdown(timerLength , 0);
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


function countdown(minutes, seconds) {
  // set time for the particular countdown
  let time = minutes*60 + seconds;
  let interval = setInterval(function() {
      const el = document.getElementById('digital-timer');
      // if the time is 0 then end the counter
      if(time == 0) {
          el.innerHTML = "Move on to next date...";
          clearInterval(interval);
          setTimeout(function() {
              game.votingScreen();
          }, 2000);
      }
      var minutes = Math.floor( time / 60 );
      if (minutes < 10) minutes = "0" + minutes;
      var seconds = time % 60;
      if (seconds < 10) seconds = "0" + seconds; 
      var text = minutes + ':' + seconds;
      el.innerHTML = text;
      time--;
  }, 1000);
}



function connectGame(letterList) {
  wordList.innerHTML = "<p>Connecting...</p>"
  return new Promise((resolve, reject) => {
    const isConnected = Math.random(); //this is where it will push the time countdown to the other players
    if (isConnected > 0.5) {
      resolve('success');
    } else {
      reject('error connecting game');
    }
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
    const pushedList = Math.random(); //this is where it will push the time countdown to the other players
    if (pushedList > 0.1) {
      resolve('success');
    } else {
      reject('error pushing list');
    }
  });
};
  
  
wordInput.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {  //checks whether the pressed key is "Enter"
        game.addWord();
    }
});


function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};