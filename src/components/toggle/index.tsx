import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useState } from 'react';
import {IToggle} from '../../interface/toggle.interface'
import { decrement, increment } from '../../stores/sliderbar'
import { useAppSelector, useAppDispatch } from '../../hooks'

function ToggleButton({...props}: IToggle) {

    let { name }: IToggle = props;

    const isToggle = useAppSelector(state => state.sliderbar.value)
    const dispatch = useAppDispatch()

    let init = localStorage.getItem('toggled') === 'false' ? false : true;

    let [ToggleMenu, setToggleMenu] = useState(init);

    let ToggleMenuHandler = () => {
        setToggleMenu((ToggleMenu = !ToggleMenu))
        if(ToggleMenu) {
            const action = decrement();
            dispatch(action);
        } else {
            const action = increment();
            dispatch(action);
        }
    };

    useEffect(() => {
        localStorage.setItem('toggled', JSON.stringify(isToggle));
    }, [isToggle]);

    return (
        
        <div className="top-0 bg-green-500 w-full items-center">
            <div className="py-5 flex justify-between">
                <div className='pl-3 pr-3 flex items-center leading-[0px]'>
                    <button className='mr-1' onClick={ToggleMenuHandler}>{isToggle ? (<MenuOpenIcon/>) : (<MenuIcon/>)}</button>
                    <b>{name}</b>
                </div>
                <div className='ml-3 mr-3 pl-5 pr-5 bg-violet-500 rounded-lg h-7'>
                    <button className='h-full text-white'>test</button>
                </div>
            </div>
        </div>
    );
}

export default ToggleButton;