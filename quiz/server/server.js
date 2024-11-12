import { WebSocketServer } from 'ws'; // Utilise WebSocketServer au lieu de WebSocket

const wss = new WebSocketServer({ port: 8080 });

const lobbies = {}; // Stocker les lobbies par ID

wss.on('connection', (ws) => {
    ws.on('message', (message) => {
        const data = JSON.parse(message);

        if (data.type === 'create') {
            const lobbyId = generateLobbyId();
            lobbies[lobbyId] = { players: [data.username], host: ws };
            ws.send(JSON.stringify({ type: 'lobby_created', lobbyId }));
        } else if (data.type === 'join') {
            const lobby = lobbies[data.lobbyId];
            if (lobby) {
                lobby.players.push(data.username);
                lobby.host.send(JSON.stringify({ type: 'player_joined', username: data.username }));
                ws.send(JSON.stringify({ type: 'joined_lobby', players: lobby.players }));
            } else {
                ws.send(JSON.stringify({ type: 'error', message: 'Lobby introuvable' }));
            }
        }
    });
});

function generateLobbyId() {
    return Math.random().toString(36).substr(2, 9);
}