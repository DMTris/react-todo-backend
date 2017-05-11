//import modules
import Express from 'express';
import Parser from 'body-parser';
import cors from 'cors';
//import data routes

//create variables for connections
const ENV = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const port = process.env.PORT || 5000;
const app = Express();
//start the app listen
app.listen(port, () => console.log(`App has started: http://localhost:${port}`));
//create routes
app.use(cors());
app.use(Parser.json());
//export the app
export default app;
