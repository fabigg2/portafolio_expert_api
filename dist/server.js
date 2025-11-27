"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./config/db"));
class Server {
    constructor(port) {
        this.app = (0, express_1.default)();
        this.port = port;
        this.setupMiddleware();
        this.setupRoutes();
    }
    setupMiddleware() {
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
    }
    setupRoutes() {
        // Define your routes here
        this.app.get('/', (req, res) => {
            res.send('Welcome to Shoply!');
        });
        this.app.use('/api', require('./routes').default);
    }
    start() {
        this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`);
        });
        (0, db_1.default)();
    }
}
exports.default = Server;
