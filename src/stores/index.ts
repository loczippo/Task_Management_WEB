import SliderBarReducer from './sliderbar';
const { configureStore } = require("@reduxjs/toolkit");


export const store = configureStore({
    reducer: {
        sliderbar: SliderBarReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch