import express from 'express';
import { pool } from '../db.js';

const router = express.Router();

router.get('/:conceptId', async (req, res) => {
  const result = await pool.query(
    'SELECT * FROM comments WHERE concept_id = $1',
    [req.params.conceptId]
  );

  res.json(result.rows);
});

router.post('/', async (req, res) => {
  const { concept_id, content } = req.body;

  const result = await pool.query(
    'INSERT INTO comments (concept_id, content) VALUES ($1, $2) RETURNING *',
    [concept_id, content]
  );

  res.json(result.rows[0]);
});

export default router;
