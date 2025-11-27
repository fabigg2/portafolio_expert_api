// db connection using sequilize

import mongoose from 'mongoose';

export const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CNN || 'mongodb://127.0.0.1:27017/test', );
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Database connection error:', error);
        throw new Error('Failed to connect to the database');
    }
};

export default dbConnection;