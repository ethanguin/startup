const GameEvent = {
    System: 'system',
    End: 'gameEnd',
    Start: 'gameStart',
    Next: 'timeOut',
  };
  
  class EventMessage {
    constructor(from, type, value, gamecode) {
      this.from = from;
      this.type = type;
      this.value = value;
      this.gc = gamecode;
    }
  }
  
  class GameEventNotifier {
    events = [];
    handlers = [];
  
    constructor() {
        // When dev debugging we need to talk to the service and not the React debugger
        let port = window.location.port;
        if (process.env.NODE_ENV !== 'production') {
            port = 3000;
        }
    
        const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
        this.socket = new WebSocket(`${protocol}://${window.location.hostname}:${port}/ws`);
        this.socket.onopen = (event) => {
            this.receiveEvent(new EventMessage('Boggle', GameEvent.System, { msg: 'connected' }));
        };
        this.socket.onclose = (event) => {
            this.receiveEvent(new EventMessage('Boggle', GameEvent.System, { msg: 'disconnected' }));
        };
        this.socket.onmessage = async (msg) => {
            try {
            const event = JSON.parse(await msg.data.text());
            this.receiveEvent(event);
            } catch {}
        };
    }
  
    broadcastEvent(from, type, value, gc) {
      const event = new EventMessage(from, type, value, gc);
      this.socket.send(JSON.stringify(event));
    }
  
    addHandler(handler) {
      this.handlers.push(handler);
    }
  
    removeHandler(handler) {
      this.handlers.filter((h) => h !== handler);
    }
  
    receiveEvent(event) {
      this.events.push(event);
  
      this.events.forEach((e) => {
        this.handlers.forEach((handler) => {
          handler(e);
        });
      });
    }
  }
  
  const GameNotifier = new GameEventNotifier();
  export { GameEvent, GameNotifier };