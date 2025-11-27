import express, { Application } from 'express';
import dbConnection from './config/db';


class Server {
    public app: Application;
    private port: number;

    constructor(port: number) {
        this.app = express();
        this.port = port;
        this.setupMiddleware();
        this.setupRoutes();
    }

    private setupMiddleware(): void {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }

    private setupRoutes(): void {
        // Define your routes here
        this.app.get('/', (req, res) => {
            res.send('Welcome to Shoply!');
        });

        this.app.use('/api', require('./routes').default);
    }

    public start(): void {
        this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`);
        });
        // dbConnection();
    }
}

export default Server;