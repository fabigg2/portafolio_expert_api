import Server from "./server";

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 5000;

const server = new Server(PORT);
server.start();