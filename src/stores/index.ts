import SliderBarReducer from './sliderbar';
import couterReducer from './counter';
const { configureStore } = require("@reduxjs/toolkit");


const rootReducer = {
    counter: couterReducer,
    sliderbar: SliderBarReducer,
}

const store = configureStore({
    reducer: rootReducer,
})

export default store