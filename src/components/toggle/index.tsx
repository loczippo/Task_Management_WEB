import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useState } from 'react';
import { IToggle } from '../../interfaces/toggle.interface'
import { decrement, increment,} from '../../stores/sliderbar'
import { useAppSelector, useAppDispatch } from '../../hooks'
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { SliderbarState } from '../../interfaces/sliderbar.interface';
import { getToggle, setToggle } from '../../utils/sliderbar';

function ToggleButton({...props}: IToggle): ReactJSXElement {

    const { name }: IToggle = props;

    const isToggle = useAppSelector((state: SliderbarState) => state.sliderbar.value)
    const dispatch = useAppDispatch()

    let [ToggleMenu, setToggleMenu] = useState(!isToggle);

    let ToggleMenuHandler = (): void => {
        setToggleMenu((ToggleMenu = !ToggleMenu))
        let action = undefined;
        if(!ToggleMenu) {
            action = increment();
        } else {
            action = decrement();
        }
        dispatch(action);
    };

    useEffect(() => {
        setToggle(JSON.stringify(isToggle));
    }, [isToggle]);

    return (
        
        <div className="top-0 bg-[var(--white-text)] w-full items-center">
            <div className="py-5 flex justify-between">
                <div className='pl-3 pr-3 flex items-center leading-[0px]'>
                    <button className='mr-1' onClick={ToggleMenuHandler}>{isToggle ? (<MenuOpenIcon/>) : (<MenuIcon/>)}</button>
                    <b className='whitespace-nowrap'>{name}</b>
                </div>
                <div className='ml-3 mr-3 pl-5 pr-5 bg-violet-500 rounded-lg h-7'>
                    <button className='h-full text-white'>Lộc nè</button>
                </div>
            </div>
        </div>
    );
}

export default ToggleButton;