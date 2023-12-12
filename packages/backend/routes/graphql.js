import { PrismaClient } from '@prisma/client';
import  express  from 'express';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { createHandler } from 'graphql-http/lib/use/http';

const router = express.Router();
const prisma = new PrismaClient();

const typeDefs = `
type Product {
    id: Int!
    sku: String!
    name: String!
    price: Float!
    quantity: Int!
  }
  
  type Query {
    products: [Product!]!
    product(id: Int!): Product
  }
  
  type Mutation {
    createProduct(input: CreateProductInput!): Product!
  }
  
  input CreateProductInput {
    sku: String!
    name: String!
    price: Float!
    quantity: Int!
  }
`;

const resolvers = {
  Query: {
    products: () => {
      return prisma.product.findMany();
    }
  }
};

export const schema = makeExecutableSchema({
  resolvers,
  typeDefs,
});


// Create a HTTP server using the listener on `/graphql`
router.all('/graphql', createHandler({ schema }));


export default router;
