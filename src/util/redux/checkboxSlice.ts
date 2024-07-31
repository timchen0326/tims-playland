// redux/checkboxSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// 定義 CheckboxState 的類型
interface CheckboxState {
  checkedItems: { [key: number]: boolean };
}

// 設置初始狀態
const initialState: CheckboxState = {
  checkedItems: {},
};

// 創建一個 slice，包含狀態、reducers 和 actions
const checkboxSlice = createSlice({
  name: 'checkbox',
  initialState,
  reducers: {
    toggleCheckbox: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      state.checkedItems[index] = !state.checkedItems[index];
    },
  },
});

// 導出 action 和 reducer
export const { toggleCheckbox } = checkboxSlice.actions;
export default checkboxSlice.reducer;
