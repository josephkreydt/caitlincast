import { WebSocketServer } from "ws";

const PORT = process.env.PORT || 8080;

const wss = new WebSocketServer({ port: PORT });

wss.on("connection", ws => {
  ws.on("message", msg => {
    for (const client of wss.clients) {
      if (client !== ws && client.readyState === client.OPEN) {
        client.send(msg.toString());
      }
    }
  });
});

console.log("WebSocket sync server running on port: ", PORT);
