import React from "react";
import { GameEvent, GameNotifier } from './gameNotifier';

export function BoggleGame(props) {
    const gamecode = props.gamecode;
    const username = props.username;
    const board = props.board;

    async function startGame() {
        GameNotifier.broadcastEvent(username, GameEvent.Start, board, gamecode);
    }
    async function timeOut() {
        GameNotifier.broadcastEvent(username, GameEvent.Next, {}, gamecode);
    }

}