import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../index';

export interface ThemeState {
  current: string;
}

const initialState: ThemeState = {
  current: 'dark',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, { payload }: PayloadAction<string>) => {
      state.current = payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;

export const themeSelector = (state: { theme: ThemeState }) => state.theme;
