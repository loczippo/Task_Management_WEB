import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import { useAppSelector } from '../../../hooks'

function SliderBarSecondSettings() {
    const isToggle = useAppSelector(state => state.sliderbar.value)
  return (
    <div className='Sidebar_wrapper h-full overflow-hidden duration-500 ease-in-out transform'>
        <section className={`overflow-hidden flex h-full flex-col items-center justify-between bg-red-500 text-white transition-all ${(isToggle)? "w-0" : "w-60" }`}>
            <div className="sliderbar_header relative flex flex-col bg-amber-500 w-full">
                <div className="h-[88px]">
                    <div className='flex pl-2 pr-2 h-12 hover:bg-gray-400 items-center'>
                        <b className='text-black'>Plain Master</b>
                        <ArrowDropDownIcon/>
                    </div>
                    <div className='h-10 pl-2 pr-2 flex items-center relative'>
                        <span className='absolute insert-y-0 left-0 pl-3'>
                            <div className='text-black'>
                                <SearchIcon className='searchIcon'/>
                            </div>
                        </span>
                        <input className='pl-5 w-full pr-2 bg-transparent border rounded-md outline-none' type="text" />
                    </div>
                </div> 
            </div>
            <div className="sliderbar_header flex flex-col bg-pink-500 w-full h-full">
                <div className='pl-2 pr-2 h-1 items-center align-middle'>
                    <h1>SLIDERBAR_SETTING NÈ</h1>
                </div>
            </div>
        </section>
    </div>
  );
}

export default SliderBarSecondSettings;
