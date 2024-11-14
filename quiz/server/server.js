import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });
const lobbies = {}; // Stocker les lobbies par ID

wss.on('connection', (ws) => {
    ws.on('message', (message) => {
        const data = JSON.parse(message);

        if (data.type === 'create') {
            const lobbyId = generateLobbyId();
            // Crée un lobby avec l’hôte et stocke le pseudo
            lobbies[lobbyId] = { players: [{ socket: ws, username: data.username }], host: ws };
            ws.send(JSON.stringify({ type: 'lobby_created', lobbyId }));
        } else if (data.type === 'join') {
            const lobby = lobbies[data.lobbyId];
            if (lobby) {
                // Ajoute le joueur avec son pseudo
                lobby.players.push({ socket: ws, username: data.username });

                // Diffuse la mise à jour de la liste des joueurs à tous les clients du lobby
                lobby.players.forEach((player) => {
                    player.socket.send(JSON.stringify({
                        type: 'joined_lobby',
                        players: lobby.players.map((p) => p.username), // Envoie la liste des pseudos
                    }));
                });
            } else {
                ws.send(JSON.stringify({ type: 'error', message: 'Lobby introuvable' }));
            }
        } else if (data.type === 'start_game') {
            const lobby = lobbies[data.lobbyId];
            if (lobby && ws === lobby.host) {
                // Diffuser le démarrage du jeu à tous les joueurs du lobby
                lobby.players.forEach((player) => {
                    player.socket.send(JSON.stringify({ type: 'start_game' }));
                });
            }
        }
    });

    ws.on('close', () => {
        // Gérer la déconnexion du joueur (optionnel)
    });
});

// Génère un identifiant unique pour chaque lobby
function generateLobbyId() {
    return Math.random().toString(36).substr(2, 9);
}