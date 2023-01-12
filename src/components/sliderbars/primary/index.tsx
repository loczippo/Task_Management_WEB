import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import PeopleIcon from '@mui/icons-material/People';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import { Link } from 'react-router-dom';
import { PrimarySliderBarEnum } from '../../../enums/'
import { useAppDispatch } from '../../../hooks'
import { setSecondSliderBarMenu } from '../../../stores/sliderbar'
import { setSliderBarMenu } from '../../../utils';

function SliderBarPrimary() {


    const dispatch = useAppDispatch()

    let SetSecondSliderBar = (menu: PrimarySliderBarEnum): void => {
        let action = undefined;
        action = setSecondSliderBarMenu(menu);
        dispatch(action);
        setSliderBarMenu(menu);
    };
    // useEffect(() => {
    //     if(!isToggle) {
    //         dispatch(decrement());
    //         setToggle(JSON.stringify(!isToggle));
    //     }
    //     else {
    //         dispatch(increment());
    //         setToggle(JSON.stringify(isToggle));
    //     }
    // },[isToggle])

  return (
    <div className='Sidebar_wrapper h-full'>
        <section className="relative flex h-full flex-col items-center justify-between bg-[var(--primary-sliderbar)] text-[var(--white-text)] w-[48px]">
            <div>
                <div className='relative items-center flex flex-col w-8 mt-1'>
                    <Link to="/" onClick={() => SetSecondSliderBar(PrimarySliderBarEnum.DEFAULT)} className="text-[var(--black-text)] items-center flex h-8 justify-center mb-[9px] w-8 bg-[var(--button-icon-color)] rounded-full transition-transform transform duration-[400ms] hover:scale-[1.12] ease-in-out">
                        <WorkspacesIcon/>
                    </Link>
                </div>
                <div className="group items-center flex flex-col w-8 mb-[9px]">
                    <Link to="/setting/me/profile" onClick={() => SetSecondSliderBar(PrimarySliderBarEnum.SETTINGS)} className="items-center flex h-8 justify-center text-[var(--button-icon-color)] w-8 hover:bg-[var(--hover-color)] hover:rounded-lg">
                        <SettingsIcon className='primaryIcon'/>
                    </Link>
                    <span className="pointer-events-none after:translate-x-[0.5px] group-hover:opacity-100 z-[9999999] transition-opacity bg-gray-800 px-2 text-sm text-gray-100 rounded-md absolute left-1/4 
                    -translate-y-1/2 translate-x-[45%] opacity-0 m-4 mx-auto transform duration-[0.25] delay-75 ease-in-out after:content-[''] after:border-[5px] after:border-transparent after:border-r-gray-800 after:absolute after:right-full after:top-1/2 after:-translate-y-1/2
                    ">
                        Settings
                    </span>
                </div>
                <div className="group items-center flex flex-col w-8 mb-[9px]">
                    <Link to="/user/home" onClick={() => SetSecondSliderBar(PrimarySliderBarEnum.USERS)} className="items-center flex h-8 justify-center text-[var(--button-icon-color)] w-8 hover:bg-[var(--hover-color)] hover:rounded-lg">
                        <PeopleIcon className='primaryIcon'/>
                    </Link>
                    <span className="pointer-events-none after:translate-x-[0.5px] group-hover:opacity-100 z-[9999999] transition-opacity bg-gray-800 px-2 text-sm text-gray-100 rounded-md absolute left-1/4 
                    -translate-y-1/2 translate-x-[61%] opacity-0 m-4 mx-auto transform duration-[0.25] delay-75 ease-in-out after:content-[''] after:border-[5px] after:border-transparent after:border-r-gray-800 after:absolute after:right-full after:top-1/2 after:-translate-y-1/2
                    ">
                        Users
                    </span>
                </div>
                <div className="group items-center flex flex-col w-8 mb-[9px]">
                    <a href="/b" className="items-center flex h-8 justify-center text-[var(--button-icon-color)] w-8 hover:bg-[var(--hover-color)] hover:rounded-lg">
                        <HelpIcon className='primaryIcon'/>
                    </a>
                    <span className="pointer-events-none after:translate-x-[0.5px] group-hover:opacity-100 z-[9999999] transition-opacity bg-gray-800 px-2 text-sm text-gray-100 rounded-md absolute left-1/4 
                    -translate-y-1/2 translate-x-[68%] opacity-0 m-4 mx-auto transform duration-[0.25] delay-75 ease-in-out after:content-[''] after:border-[5px] after:border-transparent after:border-r-gray-800 after:absolute after:right-full after:top-1/2 after:-translate-y-1/2
                    ">
                        Help
                    </span>
                </div>
            </div>
        </section>
    </div>
  );
}

export default SliderBarPrimary;
