
import 'dotenv/config'
import express, { Request, Response, Application } from 'express';
import cors from 'cors';
import { getContestants } from './api/contestants';
import { getPreviewData, updatePreviewData } from './api/previewData';
import { getImportantData, updateImportantData } from './api/importantData';
import { getCurrentPlace, updateCurrentPlace } from './api/currentPlace';

const app: Application = express();

// Middleware
app.use(cors());
app.use(express.json());

app.use(cors({
  methods: ['GET', 'POST', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type']
}));

// Роуты
app.get('/contestants', (req: Request, res: Response) => getContestants(req, res));
app.get('/previewData', async (req, res) => {
  await getPreviewData(req, res);
});
app.patch('/previewData', async (req, res) => {
  await updatePreviewData(req, res);
});
app.get('/importantData', async (req, res) => {
  await getImportantData(req, res);
});
app.patch('/importantData', async (req, res) => {
  await updateImportantData(req, res);
});
app.get('/currentPlace', async (req, res) => {
  await getCurrentPlace(req, res);
});
app.patch('/currentPlace', async (req, res) => {
  await updateCurrentPlace(req, res);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
