import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import WorkOffIcon from '@mui/icons-material/WorkOff';
import AddIcon from '@mui/icons-material/Add';
import PeopleIcon from '@mui/icons-material/People';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Brightness1Icon from '@mui/icons-material/Brightness1';
import TableChartIcon from '@mui/icons-material/TableChart';
import VerticalSplitIcon from '@mui/icons-material/VerticalSplit';
import { useAppSelector } from '../../../hooks'
import { Link, NavLink } from 'react-router-dom';

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
                        <div data-placeholder='Quick search' className='[&:hover+.key]:visible [&:hover+.key]:translate-x-0 [&:hover+.key]:opacity-90 flex items-center searchInput pl-7 h-[26px] w-full pr-2 bg-transparent border border-[var(--gray-text)] rounded-md outline-none'></div>
                        <div className='key transition-all ease-in duration-150 translate-x-[7px] pointer-events-none  opacity-0 font-semibold text-[9px] text-[#b9b0bc] absolute right-2 items-center mr-[6px] uppercase'>
                            <kbd className='border rounded-[4px] border-[var(--gray-text)] mr-1 px-[2.5px] py-[2.5px]'>Ctrl</kbd>
                            <kbd className='border rounded-[4px] border-[var(--gray-text)] px-[4.5px] py-[2.5px]'>K</kbd>
                        </div>
                    </div>
                </div> 
            </div>
            <div className='scrollbar flex flex-col w-full h-full pt-1 pb-1'>
                <div className="sliderbar_header">
                    <NavLink to="1" className='flex justify-start pt-1 pb-1 pl-3 pr-2 items-center align-middle text-[13px] font-medium leading-6 cursor-pointer hover:bg-[var(--hover-color)]'>
                        <NotificationsIcon className='bodyIcon'/>
                        <h1 className='pl-[6px]'>Notifications</h1>
                    </NavLink>
                    <NavLink to="/home" className='flex justify-start pt-1 pb-1 pl-3 pr-2 items-center align-middle text-[13px] font-medium leading-6 cursor-pointer hover:bg-[var(--hover-color)]'>
                        <FormatListBulletedIcon className='bodyIcon'/>
                        <h1 className='pl-[6px]'>My work</h1>
                    </NavLink>
                    <NavLink to="3" className='flex justify-start pt-1 pb-1 pl-3 pr-2 items-center align-middle text-[13px] font-medium leading-6 cursor-pointer hover:bg-[var(--hover-color)]'>
                        <FactCheckIcon className='bodyIcon'/>
                        <h1 className='pl-[6px]'>My plans</h1>
                    </NavLink>
                    <NavLink to="4" className='flex justify-start pt-1 pb-1 pl-3 pr-2 items-center align-middle text-[13px] font-medium leading-6 cursor-pointer hover:bg-[var(--hover-color)]'>
                        <WorkOffIcon className='bodyIcon'/>
                        <h1 className='pl-[6px]'>Time off</h1>
                    </NavLink>
                </div>
                <div className="sliderbar_header flex justify-between w-full pt-1 pb-1 uppercase">
                    <div className='text-[10px] text-[var(--blur-text)] font-semibold pt-1 pb-1 pl-3 pr-2'>Teams</div>
                    <AddIcon className='teamsIcon text-[var(--blur-text)] font-semibold pr-2'/>
                </div>
                <div className="sliderbar_header flex flex-col w-full pb-1">
                    <NavLink to="asdasdas" className='relative group flex justify-start pt-1 pb-1 pl-3 pr-2 items-center align-middle text-[13px] font-medium leading-6 cursor-pointer hover:bg-[var(--hover-color)]'>
                        <PeopleIcon className='bodyIcon'/>
                        <h1 className='pl-3'>My Team</h1>
                        <div className='absolute right-[9px] invisible duration-100 ease-in-out transform-all group-hover:visible'>
                            <MoreVertIcon className='primaryIcon text-[var(--blur-text)]'/>
                        </div>
                    </NavLink>
                    <NavLink to="abasd" className='relative group flex justify-start pt-1 pb-1 pl-3 pr-2 items-center align-middle text-[13px] font-medium leading-6 cursor-pointer hover:bg-[var(--hover-color)]'>
                        <PeopleIcon className='bodyIcon'/>
                        <h1 className='pl-3'>My Team 2</h1>
                        <div className='absolute right-[9px] invisible duration-100 ease-in-out transform-all group-hover:visible'>
                            <MoreVertIcon className='primaryIcon text-[var(--blur-text)]'/>
                        </div>
                    </NavLink>
                </div>
                <div className="sliderbar_header flex justify-between w-full pt-2 pb-1 uppercase">
                    <div className='text-[10px] text-[var(--blur-text)] font-semibold pt-1 pb-1 pl-3 pr-2'>Project</div>
                    <AddIcon className='teamsIcon text-[var(--blur-text)] font-semibold pr-2'/>
                </div>
                <div className="sliderbar_header flex flex-col w-full pb-1">
                    <div className='relative group/item group/icon flex justify-start pt-1 pb-1 pl-3 pr-2 items-center align-middle text-[13px] font-medium leading-6 cursor-pointer hover:bg-[var(--hover-color)]'>
                        <div className='duration-500 transition-all group-hover/icon:rotate-90'>
                            <ArrowRightIcon className='mediumIcon'/>
                        </div>
                        <Brightness1Icon className='text-red-500 miniIcon pl-1 pr-1'/>
                        <h1 className='pl-1'>Project 1</h1>
                        <div className='absolute right-[9px] invisible duration-100 ease-in-out transform-all group-hover/item:visible'>
                            <MoreVertIcon className='primaryIcon text-[var(--blur-text)]'/>
                        </div>
                    </div>
                    <div className='hidden'> 
                        <div className='flex flex-col w-full'>
                            <NavLink to="asdas555ssdas" className='flex justify-start pt-1 pb-1 pl-10 pr-2 items-center align-middle text-[13px] font-medium leading-6 cursor-pointer hover:bg-[var(--hover-color)]'>
                                <VerticalSplitIcon className='bodyIcon'/>
                                <h1 className='pl-3'>Timeline</h1>
                            </NavLink>
                        </div>
                        <div className='flex flex-col w-full pb-1'>
                            <NavLink to="asdas555das" className='flex justify-start pt-1 pb-1 pl-10 pr-2 items-center align-middle text-[13px] font-medium leading-6 cursor-pointer hover:bg-[var(--hover-color)]'>
                                <TableChartIcon className='bodyIcon'/>
                                <h1 className='pl-3'>Board</h1>
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className="sliderbar_header flex flex-col w-full pb-1">
                    <Link to="aasd22" className='relative group flex justify-start pt-1 pb-1 pl-3 pr-2 items-center align-middle text-[13px] font-medium leading-6 cursor-pointer hover:bg-[var(--hover-color)]'>
                        <ArrowRightIcon className='mediumIcon'/>
                        <Brightness1Icon className='text-green-500 miniIcon pl-1 pr-1'/>
                        <h1 className='pl-1'>Project 2</h1>
                        <div className='absolute right-[9px] invisible duration-100 ease-in-out transform-all group-hover:visible'>
                            <MoreVertIcon className='primaryIcon text-[var(--blur-text)]'/>
                        </div>
                    </Link>
                    <div className=''> 
                        <div className='flex flex-col w-full'>
                            <NavLink to="asdas555sasdsdas" className='flex justify-start pt-1 pb-1 pl-10 pr-2 items-center align-middle text-[13px] font-medium leading-6 cursor-pointer hover:bg-[var(--hover-color)]'>
                                <VerticalSplitIcon className='bodyIcon'/>
                                <h1 className='pl-3'>Timeline</h1>
                            </NavLink>
                        </div>
                        <div className='flex flex-col w-full pb-1'>
                            <NavLink to="asdas55454555das" className='flex justify-start pt-1 pb-1 pl-10 pr-2 items-center align-middle text-[13px] font-medium leading-6 cursor-pointer hover:bg-[var(--hover-color)]'>
                                <TableChartIcon className='bodyIcon'/>
                                <h1 className='pl-3'>Board</h1>
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className="sliderbar_header flex flex-col w-full pb-1">
                    <Link to="aasd22" className='relative group flex justify-start pt-1 pb-1 pl-3 pr-2 items-center align-middle text-[13px] font-medium leading-6 cursor-pointer hover:bg-[var(--hover-color)]'>
                        <ArrowRightIcon className='mediumIcon'/>
                        <Brightness1Icon className='text-yellow-500 miniIcon pl-1 pr-1'/>
                        <h1 className='pl-1'>Project 3</h1>
                        <div className='absolute right-[9px] invisible duration-100 ease-in-out transform-all group-hover:visible'>
                            <MoreVertIcon className='primaryIcon text-[var(--blur-text)]'/>
                        </div>
                    </Link>
                    <div className='hidden'> 
                        <div className='flex flex-col w-full'>
                            <NavLink to="asdas555aaassdas" className='flex justify-start pt-1 pb-1 pl-10 pr-2 items-center align-middle text-[13px] font-medium leading-6 cursor-pointer hover:bg-[var(--hover-color)]'>
                                <VerticalSplitIcon className='bodyIcon'/>
                                <h1 className='pl-3'>Timeline</h1>
                            </NavLink>
                        </div>
                        <div className='flex flex-col w-full pb-1'>
                            <NavLink to="asdas55ssaz5das" className='flex justify-start pt-1 pb-1 pl-10 pr-2 items-center align-middle text-[13px] font-medium leading-6 cursor-pointer hover:bg-[var(--hover-color)]'>
                                <TableChartIcon className='bodyIcon'/>
                                <h1 className='pl-3'>Board</h1>
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className="sliderbar_header flex justify-between w-full pt-2 pb-1 uppercase">
                    <div className='text-[10px] text-[var(--blur-text)] font-semibold pt-1 pb-1 pl-3 pr-2'>Clients</div>
                    <AddIcon className='teamsIcon text-[var(--blur-text)] font-semibold pr-2'/>
                </div>
                <div className='w-full pt-1 pb-1'>
                    <span className='pl-3 text-[10px] text-[var(--blur-text)]'>No client. Add a new client above.</span>
                </div>
            </div>
        </section>
    </div>
  );
}

export default SliderBarSecondDefault;
