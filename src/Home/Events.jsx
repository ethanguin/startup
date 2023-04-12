import React from 'react';

import { GameEvent, GameNotifier } from './gameNotifier';

export function Events(props) {
    const username = props.username;
    const [events, setEvent] = React.useState([]);

    React.useEffect(() => {
        GameNotifier.addHandler(handleGameEvent);
    
        return () => {
          GameNotifier.removeHandler(handleGameEvent);
        };
    });

    function handleGameEvent(event) {
        setEvent([...events, event]);
    }
}