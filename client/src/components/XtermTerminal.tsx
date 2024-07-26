import React, { useEffect, useRef, useState } from 'react';
import { Terminal } from '@xterm/xterm';
import { WebLinksAddon } from '@xterm/addon-web-links';
import '@xterm/xterm/css/xterm.css';

const XtermTerminal: React.FC = () => {
  const terminalRef = useRef<HTMLDivElement | null>(null);
  const socketRef = useRef<WebSocket | null>(null);
  const [buffer, setBuffer] = useState<string>(''); // Buffer to store command input

  console.log(buffer);
  
  useEffect(() => {
    // Initialize Xterm.js
    const terminal = new Terminal();

    // Load the WebLinksAddon
    terminal.loadAddon(new WebLinksAddon());

    // Attach the terminal to the DOM element
    if (terminalRef.current) {
      terminal.open(terminalRef.current);
      terminal.write('Connecting to WebSocket...\r\n');
    }

    // Set up WebSocket connection
    socketRef.current = new WebSocket('ws://localhost:3001');

    socketRef.current.onopen = () => {
      if (terminal) {
        terminal.write('Hello from \x1B[1;3;31mxterm.js\x1B[0m $');
      }
    };

    socketRef.current.onmessage = (event: MessageEvent) => {
      if (terminal) {
        terminal.write(event.data);
      }
    };

    // Handle user input
    terminal.onData(data => { 
        if (socketRef.current) {
          socketRef.current.send(buffer);
        }
  
    });

    // Cleanup on component unmount
    return () => {
      terminal.dispose();
      if (socketRef.current) {
        socketRef.current.close();
      }
    };
  }, [buffer]);

  return (
    <div
      ref={terminalRef}
      style={{
        width: '100%',
        height: '90vh', 
        backgroundColor: '#000',
      }}
    ></div>
  );
};

export default XtermTerminal;
