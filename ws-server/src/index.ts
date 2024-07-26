import WebSocket, { WebSocketServer } from 'ws';
import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

// Create a WebSocket server listening on port 3001
const wss = new WebSocketServer({ port: 3001 });

wss.on('connection', (ws: WebSocket) => {
  console.log('Client connected');

  // Spawn a new bash process
  const terminal = spawn('bash');

  // Forward stdout and stderr from the terminal to the WebSocket client
  terminal.stdout.on('data', (data) => {
    ws.send(data.toString());
  });

  terminal.stderr.on('data', (data) => {
    ws.send(data.toString());
  });

  // Forward WebSocket messages to the terminal
  ws.on('message', (message: string) => {
    // Log the command to a file
    const logFilePath = path.join(__dirname, 'commands.log');
    fs.appendFile(logFilePath, message + '\n', (err) => {
      if (err) {
        console.error('Failed to log command:', err);
      }
    });

    terminal.stdin.write(message + '\n'); // Ensure commands end with a newline
  });

  // Handle client disconnection
  ws.on('close', () => {
    console.log('Client disconnected');
    terminal.kill();
  });
});

console.log('WebSocket server running on ws://localhost:3001');
