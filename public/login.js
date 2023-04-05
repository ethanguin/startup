const myModal = new bootstrap.Modal(document.getElementById('myModal'));
myModal.show();

const roomCode = randRoomCode()

function randRoomCode() {
  // create 6-digit room code
  const roomCode = (Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000);

  // apply roomcode to header
  document.querySelector('.room-code').innerHTML = `<h5>#${roomCode}</h5>`

  // apply roomcode to user-login modal
  document.getElementById('roomCodeInput').innerHTML = `<span class="input-group-text">Room Code:</span><input type="text" class="form-control" id="room-code" placeholder=#${roomCode} aria-label="Server" disabled>`

  return roomCode;
};


async function loginUser() {
  loginOrCreate('/api/auth/login')  

}


async function createUser() {
  loginOrCreate('/api/auth/create')
}


async function loginOrCreate(endpoint) {
  const userName = document.querySelector('#username')?.value;
  const password = document.querySelector('#userPassword')?.value;
  const response = await fetch(endpoint, {
    method: 'post',
    body: JSON.stringify({username: userName, password: password}),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const body = await response.json();

  if (response?.status === 200) {
    const userName = document.querySelector('#username')?.value;
    localStorage.setItem('userName', userName)
    
    // inject username into application
    document.querySelector('.userDisplay').innerHTML = `<h5 style="font-size: 15px;" id="userName_q">User: ${userName}</h5>`

    myModal.hide()
  
  } else {
    myModal.hide()
    const modalEl = document.querySelector('#msgModal');
    modalEl.querySelector('.modal-body').textContent = `⚠ Error: ${body.msg}`;
    const msgModal = new bootstrap.Modal(modalEl, {});
    msgModal.show();
  }
}

function showLoginModal() {
  myModal.show()
}

function logout() {
  fetch('/api/auth/logout', {
    method: 'delete',
  }).then(() => (window.location.href = '/'));
}

async function getUser(username) {
  const response = await fetch(`/api/user/${username}`)
  if (response.status === 200) {
    return response.json();
  }

  return null;
}