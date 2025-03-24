import express from 'express';
import postRoutes from './routes/postRoutes.js'; 
import sequelize from './config/db.js'; 
import cors from 'cors'; 
import path from 'path';
import { fileURLToPath } from 'url'; 

const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename); 

const app = express();
const PORT = 5001;

app.use(cors());

app.use('/uploads', express.static('uploads'));

app.use(express.json());
app.use('/api', postRoutes);

sequelize.sync()
  .then(() => console.log('Database synced'))
  .catch((error) => console.log('Error syncing database: ', error));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
