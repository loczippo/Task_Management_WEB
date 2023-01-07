import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../stores'

interface SliderbarState {
    value: boolean;
}

const initialState: SliderbarState = {
    value: localStorage.getItem('toggled') === 'false' ? false : true
}

export const sliderbarSlice = createSlice({
    name: 'switch_sliderbar',
    initialState,
    reducers: {
      increment: state => {
        state.value = false;
      },
      decrement: state => {
        state.value = true;
      },
      // Use the PayloadAction type to declare the contents of `action.payload`
      incrementByAmount: (state, action: PayloadAction<boolean>) => {
        state.value = action.payload
      }
    }
  })
  
  export const { increment, decrement, incrementByAmount } = sliderbarSlice.actions
  
  // Other code such as selectors can use the imported `RootState` type
  export const selectCount = (state: RootState) => state.counter.value
  
  export default sliderbarSlice.reducer