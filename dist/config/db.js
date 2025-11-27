"use strict";
// db connection using sequilize
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnection = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const dbConnection = async () => {
    try {
        await mongoose_1.default.connect(process.env.MONGODB_CNN || 'mongodb://127.0.0.1:27017/test');
        console.log('Database connected successfully');
    }
    catch (error) {
        console.error('Database connection error:', error);
        throw new Error('Failed to connect to the database');
    }
};
exports.dbConnection = dbConnection;
exports.default = exports.dbConnection;
