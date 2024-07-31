// redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import checkboxReducer from './checkboxSlice';

// 創建 Redux Store，並設置 checkboxReducer 作為一個 reducer
export const store = configureStore({
  reducer: {
    checkbox: checkboxReducer,
  },
});

// 定義 RootState 和 AppDispatch 類型，以便在整個應用中使用
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
