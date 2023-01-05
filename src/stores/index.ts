import SliderBarReducer from './sliderbar';
import couterReducer from './counter';
const { configureStore } = require("@reduxjs/toolkit");


export const store = configureStore({
    reducer: {
        counter: couterReducer,
        sliderbar: SliderBarReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch