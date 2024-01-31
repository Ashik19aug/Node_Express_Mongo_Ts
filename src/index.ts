import { express, http, bodyParser, cookieParser, compression, cors } from './lib/importRoot';

const app = express();
const DbConnection = require('./dataBase/Connection');
const routes = require('./routes/index');

app.use(cors({ credentials : true }));
app.use(compression);
app.use(cookieParser());
app.use(bodyParser.json());

// use all custom created routes
app.use(routes);

const server = http.createServer(app);
const port = 2222;
DbConnection().then(()=>{
  server.listen(port, () => {
    console.log('Successfully database connected');
    console.log(`Server listening on http://127.0.0.1:${port}/`);
  });
});
