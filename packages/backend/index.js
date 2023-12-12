// index.js (or your main backend file)
import  express  from 'express';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();
const app = express();
const port = 3000; 

app.get('/', async (req, res) => {
  try {
    const products = await prisma.product.findMany();
    res.json(products);
  } catch (error) {
    console.error('Error retrieving users:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
