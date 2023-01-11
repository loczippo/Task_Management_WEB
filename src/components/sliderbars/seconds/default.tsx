import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import WorkOffIcon from '@mui/icons-material/WorkOff';
import AddIcon from '@mui/icons-material/Add';
import { useAppSelector } from '../../../hooks'
import { NavLink } from 'react-router-dom';
import Project from '../../project';
import Team from '../../team';

function SliderBarSecondDefault() {
    const isToggle = useAppSelector(state => state.sliderbar.value)

    const projectData: any = [
        {
            projectName: "Project 1",
            projectId: "project1",
            timeLine: true,
            board: true,
        },
        {
            projectName: "Project 2",
            projectId: "project2",
            timeLine: true,
            board: true,
        },
        {
            projectName: "Project 3",
            projectId: "project3",
            timeLine: true,
            board: true,
        }
    ]

    const teamData: any = [
        {
            teamName: "My team 1",
            teamId: "team1",
        },
        {
            teamName: "My team 2",
            teamId: "team2",
        },
    ]

    return (
        <div className='Sidebar_wrapper h-full overflow-hidden duration-500 ease-in-out transform'>
            <section className={`overflow-hidden flex h-full flex-col items-center justify-between bg-[var(--second-sliderbar)] text-[var(--white-text)] transition-all ${(isToggle) ? "w-0" : "w-60"}`}>
                <div className="sliderbar_header relative flex flex-col w-full">
                    <div className="h-[88px]">
                        <div className='flex pl-3 pr-2 h-12 hover:bg-[var(--hover-color)] items-center'>
                            <b className='text-[var(--white-text)] font-semibold'>Plain Master</b>
                            <ArrowDropDownIcon className='bodyIcon text-[var(--gray-text)]' />
                        </div>
                        <div className='h-10 pl-2 pr-2 flex items-center relative cursor-text'>
                            <span className='absolute insert-y-0 left-0 pl-4'>
                                <div className='text-[var(--gray-text)]'>
                                    <SearchIcon className='primaryIcon' />
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
                            <NotificationsIcon className='bodyIcon' />
                            <h1 className='pl-[6px]'>Notifications</h1>
                        </NavLink>
                        <NavLink to="/home" className='flex justify-start pt-1 pb-1 pl-3 pr-2 items-center align-middle text-[13px] font-medium leading-6 cursor-pointer hover:bg-[var(--hover-color)]'>
                            <FormatListBulletedIcon className='bodyIcon' />
                            <h1 className='pl-[6px]'>My work</h1>
                        </NavLink>
                        <NavLink to="3" className='flex justify-start pt-1 pb-1 pl-3 pr-2 items-center align-middle text-[13px] font-medium leading-6 cursor-pointer hover:bg-[var(--hover-color)]'>
                            <FactCheckIcon className='bodyIcon' />
                            <h1 className='pl-[6px]'>My plans</h1>
                        </NavLink>
                        <NavLink to="4" className='flex justify-start pt-1 pb-1 pl-3 pr-2 items-center align-middle text-[13px] font-medium leading-6 cursor-pointer hover:bg-[var(--hover-color)]'>
                            <WorkOffIcon className='bodyIcon' />
                            <h1 className='pl-[6px]'>Time off</h1>
                        </NavLink>
                    </div>
                    <div className="sliderbar_header flex justify-between w-full pt-2 pb-1 uppercase">
                        <div className='text-[10px] text-[var(--blur-text)] font-semibold pt-1 pb-1 pl-3 pr-2'>Teams</div>
                        <AddIcon className='teamsIcon text-[var(--blur-text)] font-semibold pr-2' />
                    </div>
                    {

                        teamData.map((obj: any, index: number) => {
                            return <Team key={index} {...obj} />
                        })

                    }

                    {
                        teamData.length === 0 ? <div className='w-full pt-1 pb-1'>
                            <span className='pl-3 text-[10px] text-[var(--blur-text)]'>No team. Add a new team above.</span>
                        </div> : ""
                    }

                    <div className="sliderbar_header flex justify-between w-full pt-2 pb-1 uppercase">
                        <div className='text-[10px] text-[var(--blur-text)] font-semibold pt-1 pb-1 pl-3 pr-2'>Project</div>
                        <AddIcon className='teamsIcon text-[var(--blur-text)] font-semibold pr-2' />
                    </div>

                    {
                        projectData.map((obj: any, index: number) => {
                            return <Project key={index} {...obj} />
                        })
                    }

                    {
                        projectData.length === 0 ? <div className='w-full pt-1 pb-1'>
                            <span className='pl-3 text-[10px] text-[var(--blur-text)]'>No project. Add a new project above.</span>
                        </div> : ""
                    }

                    <div className="sliderbar_header flex justify-between w-full pt-2 pb-1 uppercase">
                        <div className='text-[10px] text-[var(--blur-text)] font-semibold pt-1 pb-1 pl-3 pr-2'>Clients</div>
                        <AddIcon className='teamsIcon text-[var(--blur-text)] font-semibold pr-2' />
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
