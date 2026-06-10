import express from 'express';
import cors from 'cors';
import 'dotenv/config';

const app = express();
const port = Number(process.env.PORT || 3001);

app.use(cors());

app.get('/api/health', (req, res) => {
    res.json({ ok: true, service: 'Project-Zenit-API', message: 'Backend is alive and healthy.' });
});


app.listen(port, () => {
    console.log(`API Server running at http://localhost:${port}`);
});