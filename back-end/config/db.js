import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();  

const sequelize = new Sequelize(process.env.MYSQL_URL, {
  dialect: 'mysql',
  logging: process.env.NODE_ENV === 'development' ? console.log : false, 
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Database connected successfully.');
  } catch (error) {
    console.error('❌ Unable to connect to the database:', error);
  }
};

connectDB(); 

export default sequelize;
