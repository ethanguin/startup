import React from 'react';

export function Header () {
    return (
        <div className='app-header'>
            <div className='room-code'><h5>######</h5></div>
            <div className='title-text'>
                <h1>
                    <a href='#'>Online Boggle</a>
                </h1>
            </div>
            <div className='timer'>
                <div id='time-label'>Time: </div>
                <div className='digital-timer' id='digital-timer'> 01:00</div>
            </div>
        </div>
    );
}