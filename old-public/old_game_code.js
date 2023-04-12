class Game {
    roomCode;
    time;
    rootUser;
  
    constructor() {
      this.roomCode = this.randRoomCode()
      this.users = []
      this.time = 10000
      localStorage.setItem('room-code', JSON.stringify(this.roomCode));
      this.configureWebSocket();
    };
  
    addUser(user){
      this.rootUser = {}
      this.rootUser.username = user
      this.rootUser.words = []
      console.log(this.rootUser)
    }
  
    randRoomCode() {
      // create 6-digit room code
      const roomCode = (Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000);
  
      // apply roomcode to header
      document.querySelector('.room-code').innerHTML = `<h5>#${roomCode}</h5>`
  
      // apply roomcode to user-login modal
      document.getElementById('roomCodeInput').innerHTML = `<span class="input-group-text">Room Code:</span><input type="text" class="form-control" id="room-code" placeholder=#${roomCode} aria-label="Server" disabled>`
      
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
  
    // I hate Web Sockets
    configureWebSocket() {
      const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
      this.socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
      this.socket.onopen = (event) => {
        this.displayMsg('system', 'web-service', 'connected');
      };
      this.socket.onclose = (event) => {
        this.displayMsg('system', 'web-service', 'disconnected');
      };
      this.socket.onmessage = async (event) => {
        const msg = JSON.parse(await event.data.text());
        if (msg.type === GameEndEvent) {
          this.displayMsg('player', msg.from, `game ended`);
        } else if (msg.type === GameStartEvent) {
          this.displayMsg('player', msg.from, `started a new game`);
        } else if (msg.type === CreateGameEvent) {
          this.displayMsg('player', msg.from, `created a new game on ${msg.}`)
        }
      };
    }
  
    displayMsg(cls, from, msg) {
      const chatText = document.querySelector('#player-messages');
      chatText.innerHTML =
        `<div class="event"><span class="${cls}-event">${from}</span> ${msg}</div>` + chatText.innerHTML;
    }
  
    broadcastEvent(from, type, gamecode) {
      const event = {
        from: from,
        type: type,
        gc: gamecode,
      };
      this.socket.send(JSON.stringify(event));
    }
  
    getPlayerName() {
      const username = document.querySelector('#userName_q').innerText
      return username
    }
    // End of section
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
    game.broadcastEvent(game.getPlayerName(), GameStartEvent, game.roomCode)
  }
  
  function connectionFail(error) {
    console.log(error);
    wordList.innerHTML = `<p> ${error} </p>`;
  };
  
  
  function countdown(minutes, seconds) {
    // set time for the particular countdown
    let time = minutes*60 + seconds;
    let interval = setInterval(function() {
        const el = document.getElementById('digital-timer');
        // if the time is 0 then end the counter
        if(time == 0) {
            game.broadcastEvent(game.getPlayerName(), GameEndEvent, game.roomCode)
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