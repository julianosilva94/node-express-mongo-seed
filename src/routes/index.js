import express from 'express';

const router = express.Router();

router.get('/', async (req, res) => {
  res.send({ message: 'API Working' });
});

module.exports = router;
