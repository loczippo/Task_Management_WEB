import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import {IToggle} from '../../interface/toggle.interface'
import { useDispatch, useSelector } from "react-redux";
import { Increase, Decrease } from "../../stores/sliderbar";
import { increase, decrease } from "../../stores/counter";
import { useEffect } from 'react';

function ToggleButton({...props}: IToggle) {

    let { name }: IToggle = props;

    const sliderbar = useSelector((state: IToggle) => state.sliderbar)
    console.log(sliderbar);

    let [ToggleMenu, setToggleMenu] = useState(sliderbar);

    const dispatch = useDispatch();

    let ToggleMenuHandler = () => {
        setToggleMenu((ToggleMenu = !ToggleMenu))
        if(ToggleMenu) {
            const action = Increase(false);
            dispatch(action);
        }
        else {
            const action = Decrease(true);
            dispatch(action);
        }
    };

    const counter = useSelector((state: any) => state.counter) // useSelector là một hook giúp lấy 1 cái state trong root của mình

    const handleIncreaseClick = () => {
        const action = increase();
        dispatch(action);
    }

    const handleDecreaseClick = () => {
        const action = decrease();
        dispatch(action);
    }

    

    return (
        
        <div className="top-0 bg-green-500 w-full items-center">
            <div className="py-5 flex justify-between">
                <div className='pl-3 pr-3 flex items-center leading-[0px]'>
                    <button className='mr-1' onClick={ToggleMenuHandler}>{sliderbar ? (<MenuOpenIcon/>) : (<MenuIcon/>)}</button>
                    <b>{name}</b>
                </div>
                <div className='pl-3 pr-3'>
                <div>
            <h1>Counter</h1>
            <p>Counter {counter}</p>
            <button onClick={() => handleIncreaseClick()} >increase</button><br></br>
            <button onClick={() => handleDecreaseClick()}>decrease</button>
        </div>
                </div>
            </div>
        </div>
    );
}

export default ToggleButton;