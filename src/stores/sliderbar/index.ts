import {createSlice} from '@reduxjs/toolkit';
const SliderBarSlice = createSlice({
    name: 'SliderBar', // tên chuỗi xác định slice
    initialState: true, // giá trị khởi tạo ban đầu
    reducers: { // tạo các actions
        Increase(state, action) { 
            state = action.payload;
            return state;

        },
        Decrease(state, action) { //action decrease
            state = action.payload;
            return state;
        },
    }
})

const { actions, reducer } = SliderBarSlice
export const {Increase, Decrease} = actions // export action
export default reducer //ngầm hiểu chúng ta đang export counterSlice