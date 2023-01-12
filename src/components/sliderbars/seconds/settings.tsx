import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import PeopleIcon from '@mui/icons-material/People';
import PersonIcon from '@mui/icons-material/Person';
import PaymentIcon from '@mui/icons-material/Payment';
import { useAppSelector } from '../../../hooks'
import { NavLink, Link } from 'react-router-dom';
import { setSecondSliderBarMenu } from '../../../stores/sliderbar'
import { useAppDispatch } from '../../../hooks'
import { PrimarySliderBarEnum } from '../../../enums/'
import { setSliderBarMenu } from '../../../utils';

function SliderBarSecondSettings() {
    const isToggle = useAppSelector(state => state.sliderbar.value)


    const dispatch = useAppDispatch()

    let SetSecondSliderBar = (menu: PrimarySliderBarEnum): void => {
        let action = undefined;
        action = setSecondSliderBarMenu(menu);
        dispatch(action);
        setSliderBarMenu(menu);
    };



  return (
    <div className='Sidebar_wrapper h-full overflow-hidden duration-500 ease-in-out transform'>
    <section className={`overflow-hidden flex h-full flex-col items-center justify-between bg-[var(--second-sliderbar)] text-[var(--white-text)] transition-all ${(isToggle) ? "w-0" : "w-60"}`}>
        <div className="sliderbar_header relative flex flex-col w-full">
            <div className="h-14">
                <Link to="" className='flex pl-4 pt-3 pr-2 h-12 items-center' onClick={() => SetSecondSliderBar(PrimarySliderBarEnum.DEFAULT)}>
                    <ArrowBackIosIcon className='avgIcon' />
                    <div  className='text-[var(--white-text)] text-[13px] pl-3 font-[450]'>Return to workspace</div>
                </Link>
            </div>
        </div>
        <div className='scrollbar flex flex-col w-full h-full pt-3 pb-1'>
            <div className="sliderbar_header">
                <NavLink to="/setting/me/profile" className='flex justify-start mb-6 pt-1 pb-1 pl-3 pr-2 items-center align-middle text-[13px] font-[450] leading-6 cursor-pointer hover:bg-[var(--hover-color)]'>
                    <PersonIcon className='bodyIcon' />
                    <h1 className='pl-3'>My profile</h1>
                </NavLink>
            </div>
            <div className="sliderbar_header">
                <NavLink to="/setting/users" className='flex justify-start mb-6 pt-1 pb-1 pl-3 pr-2 items-center align-middle text-[13px] font-[450] leading-6 cursor-pointer hover:bg-[var(--hover-color)]'>
                    <PeopleIcon className='bodyIcon' />
                    <h1 className='pl-3'>Users</h1>
                </NavLink>
            </div>
            <div className="sliderbar_header">
                <NavLink to="/setting/subcription" className='flex justify-start mb-6 pt-1 pb-1 pl-3 pr-2 items-center align-middle text-[13px] font-[450] leading-6 cursor-pointer hover:bg-[var(--hover-color)]'>
                    <PaymentIcon className='bodyIcon' />
                    <h1 className='pl-3'>Subcription</h1>
                </NavLink>
            </div>
            <div className="sliderbar_header">
                <NavLink to="/setting/subcription" className='flex justify-start mb-6 pt-1 pb-1 pl-3 pr-2 items-center align-middle text-[13px] font-[450] leading-6 cursor-pointer hover:bg-[var(--hover-color)]'>
                    <PaymentIcon className='bodyIcon' />
                    <h1 className='pl-3'>Apps & integrations</h1>
                </NavLink>
            </div>
            <div className="sliderbar_header">
                <NavLink to="/setting/subcription" className='flex justify-start mb-6 pt-1 pb-1 pl-3 pr-2 items-center align-middle text-[13px] font-[450] leading-6 cursor-pointer hover:bg-[var(--hover-color)]'>
                    <PaymentIcon className='bodyIcon' />
                    <h1 className='pl-3'>Single Sign On</h1>
                </NavLink>
            </div>
            <div className="sliderbar_header">
                <NavLink to="/setting/subcription" className='flex justify-start mb-6 pt-1 pb-1 pl-3 pr-2 items-center align-middle text-[13px] font-[450] leading-6 cursor-pointer hover:bg-[var(--hover-color)]'>
                    <PaymentIcon className='bodyIcon' />
                    <h1 className='pl-3'>Help & shortcuts</h1>
                </NavLink>
            </div>
        </div>
    </section>
</div>
  );
}

export default SliderBarSecondSettings;
