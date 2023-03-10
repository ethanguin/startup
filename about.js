const roomCodeText = localStorage.getItem('room-code');
    let roomCode;
    if (roomCodeText) {
        roomCode = JSON.parse(roomCodeText);
    }
document.querySelector('.room-code').innerHTML = `<h5>#${roomCode}</h5>`;