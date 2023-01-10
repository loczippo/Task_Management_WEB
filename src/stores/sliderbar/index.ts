import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PrimarySliderBarEnum } from '../../enums';
import { SliderbarValue } from '../../interfaces/sliderbar.interface';
// import type { RootState } from '../../stores'
import { getSliderBarMenu, getToggle } from '../../utils';
const initialState: SliderbarValue = {
    value: getToggle(),
    menu: getSliderBarMenu(),
}

export const sliderbarSlice = createSlice({
    name: 'sliderbar',
    initialState,
    reducers: {
      increment: (state) => {
        state.value = true;
      },
      decrement: (state) => {
        state.value = false;
      },
      setSecondSliderBarMenu: (state, action: PayloadAction<PrimarySliderBarEnum>) => {
        state.menu = action.payload;
        state.value = false;
      },
    }
  })
  
  export const { increment, decrement, setSecondSliderBarMenu } = sliderbarSlice.actions
  
  // Other code such as selectors can use the imported `RootState` type
  // export const selectCount = (state: RootState) => state.counter.value
  
  export default sliderbarSlice.reducer