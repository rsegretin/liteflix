import express from 'express';
import moviesRouter from './routes/movies.js';
import userListRouter from './routes/userList.js';
import errorMiddleware from './middlewares/errorMiddleware.js';
import cors from 'cors';
import { dbConnect } from './helpers/db.js';

await dbConnect();

const app = express();

app.use(cors());
app.use(express.json({ limit: '3mb' }));
app.use(express.urlencoded({ extended: false }));

app.use('/movies', moviesRouter);
app.use('/user-list', userListRouter)

app.use(errorMiddleware);

app.listen(3000, () => {
    console.log('Server started @ port 3000');
});