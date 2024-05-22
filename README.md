# tenants-signup

## Running in Docker

### Prerequisites

1.  Docker 19.03.0+

- Clone the repository;
- Open cloned directory;
- Run `docker compose up -d` to start the application in a development environment and detached mode. The server starts on port 8000;
- Run `docker compose -f compose.yml -f compose.prod.yml up -d` to start the application in a production environment and detached mode. The server starts on port 8080 and maps to the port 80 on a host.

## Running Locally

### Prerequisites

1. Node.js v16+
1. npm v8+

- Clone the repository
- Open cloned directory
- Run `npm install` to install all the necessary dependencies
- Run `npm run e2e` to run e2e tests
- Run `npm run dev` to start application in dev mode
