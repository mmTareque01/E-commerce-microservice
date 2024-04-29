require('dotenv').config();

import express, { Request, Response } from 'express';

import versionHandler from './src/versionHandler'

// Create Express app
const app = express();
const port = 5000;

app.use("/api", versionHandler)

// Define a route handler for the root path
app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

// Start the Express server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
