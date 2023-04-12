const roomCodeText = localStorage.getItem('room-code');
    let roomCode;
    if (roomCodeText) {
        roomCode = JSON.parse(roomCodeText);
    }
document.querySelector('.room-code').innerHTML = `<h5>#${roomCode}</h5>`;


function displayQuote(data) {
    fetch('https://api.quotable.io/random')
      .then((response) => response.json())
      .then((data) => {
        const containerEl = document.querySelector('#quote');
  
        const quoteEl = document.createElement('p');
        quoteEl.classList.add('quote');
        const authorEl = document.createElement('p');
        authorEl.classList.add('author');

  
        quoteEl.textContent = data.content;
        authorEl.textContent = data.author;
  
        containerEl.appendChild(quoteEl);
        containerEl.appendChild(authorEl);
      });
  }

displayQuote()