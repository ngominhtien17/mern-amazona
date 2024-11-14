import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import data from './data.js';
import User from './models/userModel.js';
import Product from './models/productModel.js';

dotenv.config();

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

const importData = async () => {
  try {
    await User.deleteMany({});
    await Product.deleteMany({});

    const createdUsers = await User.insertMany(data.users);
    const adminUser = createdUsers[0]._id;

    const sampleProducts = data.products.map((product) => ({
      ...product,
      user: adminUser,
    }));

    await Product.insertMany(sampleProducts);

    console.log('Data Imported Successfully');
    process.exit();
  } catch (error) {
    console.error('Error with data import:', error);
    process.exit(1);
  }
};

importData();