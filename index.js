import express from 'express';
import cors from 'cors';
import conceptsRoutes from './routes/concepts.js';
import commentsRoutes from './routes/comments.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/concepts', conceptsRoutes);
app.use('/comments', commentsRoutes);

app.get('/', (req, res) => {
  res.send('Physics API Server Running');
});

app.listen(3000, () => {
  console.log('Server running');
});
