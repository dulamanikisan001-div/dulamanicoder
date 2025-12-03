import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    plants: [
      {
        id: 1,
        name: "Monstera Deliciosa",
        price: 45.99,
        category: "Tropical",
        image: "https://images.unsplash.com/photo-1545241047-6083a3684597?w=400",
        description: "Popular tropical plant with unique leaf holes"
      },
      {
        id: 2,
        name: "Snake Plant",
        price: 29.99,
        category: "Low Light",
        image: "https://images.unsplash.com/photo-1593482892290-5d188b9e59e6?w-400",
        description: "Extremely hardy and low maintenance"
      },
      {
        id: 3,
        name: "Fiddle Leaf Fig",
        price: 59.99,
        category: "Statement",
        image: "https://images.unsplash.com/photo-1517191434949-5e90cd67d2b6?w=400",
        description: "Trendy plant with large, violin-shaped leaves"
      },
      {
        id: 4,
        name: "ZZ Plant",
        price: 34.99,
        category: "Low Light",
        image: "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?w=400",
        description: "Drought tolerant and perfect for beginners"
      },
      {
        id: 5,
        name: "Peace Lily",
        price: 39.99,
        category: "Flowering",
        image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400",
        description: "Beautiful flowering plant that purifies air"
      },
      {
        id: 6,
        name: "Pothos Golden",
        price: 24.99,
        category: "Trailing",
        image: "https://images.unsplash.com/photo-1600411833196-7a5b6d20473a?w=400",
        description: "Fast-growing vine with heart-shaped leaves"
      }
    ],
    categories: ["All", "Tropical", "Low Light", "Statement", "Flowering", "Trailing"]
  },
  reducers: {},
});

export default productsSlice.reducer;