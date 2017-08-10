import * as http from 'http';
import * as express from 'express';
const app = express();

app.get('/', (req, res, next) => {
  res.render('index');
});

app.set('views', __dirname);
app.set('view engine', 'ejs');

const server = http.createServer(app).listen(process.env.PORT || 3000);
server.on('error', (e) => {
  console.error(e);
  process.exit(1);
});
server.on('listening', () => {
  console.log('hello world');
});