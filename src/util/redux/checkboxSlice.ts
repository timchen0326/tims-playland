// store/checkboxSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CheckboxState {
  checkedItems: { [key: number]: boolean };
}

const initialState: CheckboxState = {
  checkedItems: {},
};

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

export const { toggleCheckbox } = checkboxSlice.actions;
export default checkboxSlice.reducer;
