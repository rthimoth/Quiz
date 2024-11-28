require('dotenv').config();
const mongoose = require('mongoose')

const mongoURI = process.env.DB_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log('Connexion à MongoDB réussie !');
  } catch (error) {
    console.error('Erreur lors de la connexion à MongoDB :', error);
    process.exit(1);
  }
};

module.exports = connectDB;