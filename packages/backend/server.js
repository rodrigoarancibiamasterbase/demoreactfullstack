import  express  from 'express';
import  cors from 'cors';
import  RESTRoutes  from './routes/rest.js';
import  GraphQLRoutes from './routes/graphql.js';
import  Login from './routes/login.js';
import  bodyParser from 'body-parser';
import dotenv from 'dotenv';
dotenv.config()

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use('/api', RESTRoutes);
app.all('/graphql', GraphQLRoutes);
app.use('/login', Login);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});