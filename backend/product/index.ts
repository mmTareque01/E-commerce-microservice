import express, { Request, Response } from 'express';
import router from "./src/index.router"


// Create Express app
const app = express();
const port = 5001;


// Define a route handler for the root path
app.use("/api", router)

// Start the Express server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
