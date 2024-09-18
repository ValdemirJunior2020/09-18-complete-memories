import express from 'express';

const router = express.Router();


router.get('/', (req, res) => {
res.send('it Works');
});

export default router;