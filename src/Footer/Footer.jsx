import React from 'react';
import { NavLink } from 'react-router-dom';

export function Footer () {
    return (
        <div className='app-footer'>
                <div class="container">
                        <ul class="nav justify-content-center border-bottom">
                            <li class="nav-item">
                                <NavLink className='nav-link' to='../'>Home</NavLink>
                                <NavLink className='nav-link' to='Scores'>Scores</NavLink>
                                <NavLink className='nav-link' to='About'>About</NavLink>
                            </li>
                        </ul>
                    <div class="sub-footer">
                    <span>Ethan Bishop, Blake McGhie</span>
            <p class="text-center text-muted"><a href="https://github.com/ethanguin/startup">Github repository</a></p>
        </div>    
    </div>
        </div>
    );
}