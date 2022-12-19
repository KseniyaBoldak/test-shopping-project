import { createContext } from 'react';
const paths = {
    mens: "men's%20clothing",
    womens: "/women's%20clothing",
    jewelery: "/jewelery",
    electronics: "electronics"
  };
  export const PathContext = createContext(paths);