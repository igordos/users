import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import * as db from './utils/DBUtils';

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.get('/search', (req, res) => {
  const query = req.query || null;
  res.send(db.searchUsers(query));
});

app.get('/detail', (req, res) => {
  const id = req.query.id || null;
  res.send(db.detailUser(id));
});

app.listen(8080, () => {
  console.log('server start');
});
