// productSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';


interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  category: string;
  rating: {
     rate: number;
    count: number;
  };

}
interface ProductState {
  data: Product[];
  loading: boolean;
  error: string | null;
  selectedProduct: Product | null;
  filter: string | null;
  
}

const initialState: ProductState = {
  data: [],
  loading: false,
  error: null,
  selectedProduct: null,
  filter:null,
};


export const fetchProducts = createAsyncThunk('products/fetch', async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  const data = await response.json();
  return data as Product[];
});
// https://dummyjson.com/products  https://fakestoreapi.com/products
export const fetchProductById = createAsyncThunk('product/fetchById', async (id: number) => {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await response.json();
  return data as Product;
});


const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<string | null>) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Error fetching products';
      })
      .addCase(fetchProductById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductById.fulfilled, (state, action: PayloadAction<Product>) => {
        state.loading = false;
        state.selectedProduct = action.payload; 
      })
      .addCase(fetchProductById.rejected, (state, action) => {
          state.loading = false;
        state.error = action.error.message ?? 'Error fetching product by ID';
      });
  },
});

export const { setFilter } = productSlice.actions;
export default productSlice.reducer;