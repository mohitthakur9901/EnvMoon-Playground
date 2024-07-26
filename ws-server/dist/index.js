"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const child_process_1 = require("child_process");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
// Create a WebSocket server listening on port 3001
const wss = new ws_1.WebSocketServer({ port: 3001 });
wss.on('connection', (ws) => {
    console.log('Client connected');
    // Spawn a new bash process
    const terminal = (0, child_process_1.spawn)('bash');
    // Forward stdout and stderr from the terminal to the WebSocket client
    terminal.stdout.on('data', (data) => {
        ws.send(data.toString());
    });
    terminal.stderr.on('data', (data) => {
        ws.send(data.toString());
    });
    // Forward WebSocket messages to the terminal
    ws.on('message', (message) => {
        // Log the command to a file
        const logFilePath = path_1.default.join(__dirname, 'commands.log');
        fs_1.default.appendFile(logFilePath, message + '\n', (err) => {
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
