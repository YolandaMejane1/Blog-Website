import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('blog', 'root', process.env.DB_PASSWORD, {
  host: 'localhost',
  dialect: 'mysql',
  logging: false, 
});

try {
  await sequelize.authenticate();
  console.log('Database connected');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

export default sequelize;
