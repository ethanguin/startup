import React from 'react';

export function Footer () {
    return (
        <div className='app-footer'>
                <div class="container">
                    <footer class="justify-content-center">
                        <ul class="nav justify-content-center border-bottom">
                            <li class="nav-item"><a href="index.html" class="nav-link px-2 text-muted">Home</a></li>
                            <li class="nav-item"><a href="voting.html" class="nav-link px-2 text-muted">Scores</a></li>
                            <li class="nav-item"><a href="about.html" class="nav-link px-2 text-muted">About</a></li>
                        </ul>
                    </footer>
                    
                    <div class="sub-footer">
                    <span>Ethan Bishop, Blake McGhie</span>
            <p class="text-center text-muted"><a href="https://github.com/ethanguin/startup">Github repository</a></p>
        </div>    
    </div>
        </div>
    );
}