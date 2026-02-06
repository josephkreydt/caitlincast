import http from "http";
import { WebSocketServer } from "ws";

const PORT = process.env.PORT || 8080;

// Create basic HTTP server (Render requires this)
const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end("WebSocket server is running.");
});

// Attach WebSocket server to the HTTP server
const wss = new WebSocketServer({ server });

wss.on("connection", ws => {
  ws.on("message", msg => {
    for (const client of wss.clients) {
      if (client !== ws && client.readyState === client.OPEN) {
        client.send(msg.toString());
      }
    }
  });
});

server.listen(PORT, () => {
  console.log("Server listening on", PORT);
});
