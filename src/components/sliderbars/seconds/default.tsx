import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import WorkOffIcon from '@mui/icons-material/WorkOff';
import { useAppSelector } from '../../../hooks'
import { NavLink } from 'react-router-dom';

function SliderBarSecondDefault() {
    const isToggle = useAppSelector(state => state.sliderbar.value)
  return (
    <div className='Sidebar_wrapper h-full overflow-hidden duration-500 ease-in-out transform'>
        <section className={`overflow-hidden flex h-full flex-col items-center justify-between bg-[var(--second-sliderbar)] text-[var(--white-text)] transition-all ${(isToggle)? "w-0" : "w-60" }`}>
            <div className="sliderbar_header relative flex flex-col w-full">
                <div className="h-[88px]">
                    <div className='flex pl-3 pr-2 h-12 hover:bg-[var(--hover-color)] items-center'>
                        <b className='text-[var(--white-text)] font-semibold'>Plain Master</b>
                        <ArrowDropDownIcon className='bodyIcon text-[var(--gray-text)]'/>
                    </div>
                    <div className='h-10 pl-2 pr-2 flex items-center relative cursor-text'>
                        <span className='absolute insert-y-0 left-0 pl-4'>
                            <div className='text-[var(--gray-text)]'>
                                <SearchIcon className='primaryIcon'/>
                            </div>
                        </span>
                        <div data-placeholder='Quick search' className='flex items-center searchInput pl-7 h-[26px] w-full pr-2 bg-transparent border border-[var(--gray-text)] rounded-md outline-none' />
                        <div className='group font-semibold text-[9px] text-[#b9b0bc] absolute right-2 items-center mr-2 uppercase'>
                            <kbd className='border rounded-[4px] border-[var(--gray-text)] mr-1 px-[2.2px] py-[2.5px]'>Ctrl</kbd>
                            <kbd className='border rounded-[4px] border-[var(--gray-text)] px-[5px] py-[2.5px]'>K</kbd>
                        </div>
                    </div>
                </div> 
            </div>
            <div className="sliderbar_header flex flex-col w-full h-full pt-1 pb-1">
                <NavLink to="1" className='flex justify-start pt-1 pb-1 pl-3 pr-2 items-center align-middle text-[13px] font-medium leading-6 cursor-pointer hover:bg-[var(--hover-color)]'>
                    <NotificationsIcon className='bodyIcon'/>
                    <h1 className='pl-1'>Notifications</h1>
                </NavLink>
                <NavLink to="2" className='flex justify-start pt-1 pb-1 pl-3 pr-2 items-center align-middle text-[13px] font-medium leading-6 cursor-pointer hover:bg-[var(--hover-color)]'>
                    <FormatListBulletedIcon className='bodyIcon'/>
                    <h1 className='pl-1'>My work</h1>
                </NavLink>
                <NavLink to="3" className='flex justify-start pt-1 pb-1 pl-3 pr-2 items-center align-middle text-[13px] font-medium leading-6 cursor-pointer hover:bg-[var(--hover-color)]'>
                    <FactCheckIcon className='bodyIcon'/>
                    <h1 className='pl-1'>My plans</h1>
                </NavLink>
                <NavLink to="4" className='flex justify-start pt-1 pb-1 pl-3 pr-2 items-center align-middle text-[13px] font-medium leading-6 cursor-pointer hover:bg-[var(--hover-color)]'>
                    <WorkOffIcon className='bodyIcon'/>
                    <h1 className='pl-1'>Time off</h1>
                </NavLink>
            </div>
        </section>
    </div>
  );
}

export default SliderBarSecondDefault;
