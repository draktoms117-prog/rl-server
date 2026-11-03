// Rocket League 3D — relay server (رسائل اللاعبين بتتبعت لكل المتصلين التانيين)
// تشغيل:  npm i ws   ثم   node rl-server.js
const { WebSocketServer } = require("ws");
const wss = new WebSocketServer({ port: process.env.PORT || 8080 });
wss.on("connection", (ws) => {
  ws.on("message", (data) => {
    for (const c of wss.clients) if (c !== ws && c.readyState === 1) c.send(data.toString());
  });
});
console.log("RL server on port", process.env.PORT || 8080);
