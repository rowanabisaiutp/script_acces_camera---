const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', ws => {
  ws.on('message', message => {
    // Reenvía el mensaje (video) a todos los administradores conectados
    wss.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN && client !== ws) {
        client.send(message);
      }
    });
  });
});

console.log('Servidor WebSocket en ejecución en ws://localhost:8080');
