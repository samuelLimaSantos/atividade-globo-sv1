import * as express from 'express';

const port = 3333; 

const app = express();

app.use(express.json())

app.use('/', (request, response) => response.json({ message: 'Hello World'}));

app.listen(port);