import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import cors from 'cors';
import dotenv from 'dotenv';

import routes from './routes';

dotenv.config();

const PORT = process.env.PORT || 3001;
const HOST = '0.0.0.0';

const app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
);

app.use(cors());

app.use('/', routes);

app.listen(PORT, HOST);
