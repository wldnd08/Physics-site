import express from 'express';
import { pool } from '../db.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const result = await pool.query('SELECT * FROM concepts');
  res.json(result.rows);
});

router.post('/', async (req, res) => {
  const { title, content, category_id } = req.body;

  const result = await pool.query(
    'INSERT INTO concepts (title, content, category_id) VALUES ($1, $2, $3) RETURNING *',
    [title, content, category_id]
  );

  res.json(result.rows[0]);
});

export default router;
