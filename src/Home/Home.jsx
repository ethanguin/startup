import React from 'react';

export function Home () {
    return (
        <div className='main'>
            <div className="modal modal-centered fade" id="myModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Welcome to Boggle!</h1>
                        </div>
                        <div className="modal-body">
                            <div className="input-group mb-3" id="userInputBody">
                                <input id="username" type="text" className="form-control" placeholder="Username" aria-label="Username" />
                                <input id="userPassword" type="password" className="form-control" placeholder="Password" aria-label="Password" />
                            </div>
                            <div className="input-group mb-3" id="roomCodeInput">
                                <span className="input-group-text">Room Code:</span>
                                <input type="text" className="form-control" id="room-code" aria-label="Server" />     
                            </div>                    
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" onclick="loginUser()">Login</button>
                            <button type="button" className="btn btn-secondary" onclick="createUser()">Create</button>
                        </div>
                    </div>
                </div>
            </div>
                <div className="start">
                    <div className="userDisplay"><p>User: </p></div>
                    <div><button type="button" className="btn btn-danger" onclick="startGame()">Start Game</button></div>
                </div>
                <section className="game-area">
                    <section className="word-list">
                        <ol id="ordered-list"></ol>
                    </section> 
                    <section id="game-grid" className="game-grid">
                        <div className="container text-container">
                            <div className="row">
                                <div className="gridLetter col d-flex align-items-center justify-content-center">A</div>
                                <div className="gridLetter col d-flex align-items-center justify-content-center">B</div>
                                <div className="gridLetter col d-flex align-items-center justify-content-center">C</div>
                                <div className="gridLetter col d-flex align-items-center justify-content-center">D</div>
                            </div>
                            <div className="row">
                                <div className="gridLetter col d-flex align-items-center justify-content-center">E</div>
                                <div className="gridLetter col d-flex align-items-center justify-content-center">F</div>
                                <div className="gridLetter col d-flex align-items-center justify-content-center">G</div>
                                <div className="gridLetter col d-flex align-items-center justify-content-center">H</div>
                            </div>
                            <div className="row">
                                <div className="gridLetter col d-flex align-items-center justify-content-center">I</div>
                                <div className="gridLetter col d-flex align-items-center justify-content-center">J</div>
                                <div className="gridLetter col d-flex align-items-center justify-content-center">K</div>
                                <div className="gridLetter col d-flex align-items-center justify-content-center">L</div>
                            </div>
                            <div className="row">
                                <div className="gridLetter col d-flex align-items-center justify-content-center">M</div>
                                <div className="gridLetter col d-flex align-items-center justify-content-center">N</div>
                                <div className="gridLetter col d-flex align-items-center justify-content-center">O</div>
                                <div className="gridLetter col d-flex align-items-center justify-content-center">P</div>
                            </div>
                        </div>
                    </section>
                </section>
                <section id="add-word">
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-default">Add Word:</span>
                        <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" id="word-to-add" />
                        <button onclick="game.addWord()" type="button" className="btn btn-danger">Submit</button>
                    </div>
                </section>
                <div id="player-messages"></div>
        
                <div className="modal fade" id="msgModal" tabindex="-1">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content text-dark">
                            <div className="modal-body">error message here</div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                    onclick="showLoginModal()"
                                >Close</button>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}