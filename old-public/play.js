const letters = document.querySelectorAll(".gridLetter");
const wordList = document.getElementById("ordered-list");
const wordInput = document.getElementById("word-to-add");

const GameEndEvent = 'gameEnd'
const GameStartEvent = 'gameStart'
const CreateGameEvent = 'createGame'
const JoinGameEvent = 'joinGame'
const TimerOutEvent = 'timeOut'

let roomCode;
let time;


function createOrJoinGame(rc) {
  if(rc) {
    roomCode = rc;
  } else {
    roomCode = randRoomCode();
  }
  time = 10000
  localStorage.setItem('room-code', JSON.stringify(roomCode));
  configureWebSocket();
}

function configureWebSocket() {
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
      this.displayMsg('player', msg.from, `created a new game on ${msg.gc}`);
    } else if (msg.type === TimerOutEvent) {
      this.displayMsg('player', msg.from, `time ran out`)
    } else if (msg.type === JoinGameEvent) {
      this.displayMsg('player', msg.from, `joined a game on ${msg.gc}`);
    }
  };
}

function displayMsg(cls, from, msg) {
  const chatText = document.querySelector('#player-messages');
  chatText.innerHTML =
    `<div class="event"><span class="${cls}-event">${from}</span> ${msg}</div>` + chatText.innerHTML;
}

function broadcastEvent(from, type, gamecode) {
  const event = {
    from: from,
    type: type,
    gc: gamecode,
  };
  this.socket.send(JSON.stringify(event));
}

function randRoomCode() {
  // create 6-digit room code
  const roomCode = (Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000);

  // apply roomcode to header
  document.querySelector('.room-code').innerHTML = `<h5>#${roomCode}</h5>`

  // apply roomcode to user-login modal
  document.getElementById('roomCodeInput').innerHTML = `<span class="input-group-text">Room Code:</span><input type="text" class="form-control" id="room-code" placeholder=#${roomCode} aria-label="Server" disabled>`
  
  return roomCode;
};