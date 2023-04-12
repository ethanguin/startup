// import React from 'react';

import { useNavigate } from 'react-router-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

export function Login() {
    const navigate = useNavigate()
    return (
        <>
        <section className='Login_Box'>
            <div className="input-group mb-3" id="userInputBody">
                <input id="username" type="text" className="form-control" placeholder="Username" aria-label="Username" />
                <input id="userPassword" type="password" className="form-control" placeholder="Password" aria-label="Password" />
            </div>
            <div className="input-group mb-3" id="roomCodeInput">
                <span className="input-group-text">Room Code:</span>
                <input type="text" className="form-control" id="room-code" aria-label="Server" />     
            </div>      
            <div>
                <Button variant='primary' onClick={() => navigate('/Home')}>Login</Button>
                <Button variant='secondary' onClick={() => navigate('/Home')} >Create</Button>
            </div>
        </section>
        </>
    );
}

