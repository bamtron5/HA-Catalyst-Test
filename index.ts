import * as http from 'http';
import * as express from 'express';
import squareSeconds from './lib/squareSeconds';
const app = express();

app.get('/', (req, res, next) => {
  res.render('index');
});

app.get('/seconds', (req, res, next) => {
  res.render('seconds', {
    seconds: squareSeconds()
  })
});

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

const server = http.createServer(app).listen(process.env.PORT || 3000);
server.on('error', (e) => {
  console.error(e);
  process.exit(1);
});
server.on('listening', () => {
  console.log('hello world');
});

// square root of the current time