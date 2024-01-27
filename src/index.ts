import { express, http, bodyParser, cookieParser, compression, cors } from './lib/importRoot';

const app = express();
const DbConnection = require('./dataBase/Connection');

app.use(cors({ credentials : true }));
app.use(compression);
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

DbConnection().then(()=>{
  server.listen(8080, () => {
    console.log('Successfully database connected');
    console.log('Server listening on http://localhost:8080/');
  });
});
