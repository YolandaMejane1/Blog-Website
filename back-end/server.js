import express from 'express';
import postRoutes from './routes/postRoutes.js'; 
import sequelize from './config/db.js'; 

const app = express();
const PORT = 5000;

app.use(express.json());
app.use('/api', postRoutes);

sequelize.sync()
  .then(() => console.log('Database synced'))
  .catch((error) => console.log('Error syncing database: ', error));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
