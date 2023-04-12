const rc = document.getElementById('room-code').value;

export function show_modal() {
  const myModal = new bootstrap.Modal(document.getElementById('myModal'));
  myModal.show();
  
} 

export async function loginUser() {
  loginOrCreate('/api/auth/login')
  createOrJoinGame(rc);
}


export async function createUser() {
  loginOrCreate('/api/auth/create')
}

export async function loginOrCreate(endpoint) {
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

export function showLoginModal() {
  myModal.show()
}

export function logout() {
  fetch('/api/auth/logout', {
    method: 'delete',
  }).then(() => (window.location.href = '/'));
}

export async function getUser(username) {
  const response = await fetch(`/api/user/${username}`)
  if (response.status === 200) {
    return response.json();
  }

  return null;
}

