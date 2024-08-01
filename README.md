

**EnvMoon Playground** is a browser-based Integrated Development Environment (IDE) that supports more than 40 programming languages. It allows users to create, compile, and run code directly from their browser.

## Features

- Support for multiple programming languages.
- Browser-based IDE with real-time code execution.
- User authentication with OAuth.
- Interactive terminal using Monaco Editor.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher) or yarn
- Docker (for Docker usage)

### Installation

#### Using Docker

To build and run the application using Docker, follow these steps:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/mohitthakur9901/EnvMoon-Playground.git
   ```

```bash
cd envmoon-playground
```

```bash
docker build -t envmoon-playground
```

```bash
docker run -p 80:80 envmoon-playground
```

# Without Docker

```bash
cd envmoon-playground
```

```bash
npm install
```

```bash
npm start
```

You can save this content in a file named `README.md` in your project root. Let me know if you need any more details added or any other changes!
