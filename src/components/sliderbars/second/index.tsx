
import { useAppSelector } from '../../../hooks'

function SliderBarSecond() {
    const isToggle = useAppSelector(state => state.sliderbar.value)
  return (
    <div className='Sidebar_wrapper h-full overflow-hidden duration-500 ease-in-out transform'>
        <section className={`overflow-hidden flex h-full flex-col items-center justify-between bg-red-500 text-white transition-all ${(isToggle)? "w-60" : "w-0" }`}>
            <div className="sliderbar_header relative flex flex-col bg-amber-500 w-full">
                <div className="h-[88px]">
                    SLIDERBAR_HEADER
                </div> 
            </div>
            <div className="sliderbar_header flex flex-col bg-pink-500 w-full h-full">
                SLIDERBAR_BODY
            </div>
        </section>
    </div>
  );
}

export default SliderBarSecond;
