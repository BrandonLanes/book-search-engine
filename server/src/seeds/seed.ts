import db from '../config/connection.js';
import { Book, User } from '../models/index.js';
import cleanDB from './cleandb.js';

import userData from './userseeds.json' assert { type: 'json'};
import bookData from './bookseeds.json' assert { type: 'json' };

const seedDatabase = async (): Promise<void> => {
  try {
    db;
    await cleanDB();

    await Book.insertMany(bookData);
    await User.create(userData);
    console.log('Seeding completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();