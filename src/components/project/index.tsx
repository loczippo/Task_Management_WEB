import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Brightness1Icon from '@mui/icons-material/Brightness1';
import TableChartIcon from '@mui/icons-material/TableChart';
import VerticalSplitIcon from '@mui/icons-material/VerticalSplit';
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

function Project(props: any): ReactJSXElement {

    const { projectName, projectId, timeLine, board } = props;

    const [toggleProject, setToggleProject] = useState(false);

    const hanldeToggleProject = () => {
        setToggleProject(!toggleProject);
    }


    return (
        <div className="sliderbar_header flex flex-col w-full pb-1">
            {
                !(toggleProject)
                    ?
                    <Link onClick={hanldeToggleProject} to={`/${timeLine ? "timeline" : "board"}/${projectId}`} className='relative group/item group/icon flex justify-start pb-[2px] pl-3 pr-2 items-center align-middle text-[12.5px] font-medium leading-6 cursor-pointer hover:bg-[var(--hover-color)]'>
                        <div className={`duration-300 transition-all ${toggleProject ? 'rotate-90' : ''}`}>
                            <ArrowRightIcon className='mediumIcon' />
                        </div>
                        <Brightness1Icon className={`text-red-500 miniIcon pl-1 pr-1`} />
                        <h1 className='pl-1'>{projectName}</h1>
                        <div className='absolute right-[9px] invisible duration-100 ease-in-out transform-all group-hover/item:visible'>
                            <MoreVertIcon className='primaryIcon text-[var(--blur-text)]' />
                        </div>
                    </Link>
                    :
                    <div onClick={hanldeToggleProject} className='relative group/item group/icon flex justify-start pb-[2px] pl-3 pr-2 items-center align-middle text-[12.5px] font-medium leading-6 cursor-pointer hover:bg-[var(--hover-color)]'>
                        <div className={`duration-300 transition-all ${toggleProject ? 'rotate-90' : ''}`}>
                            <ArrowRightIcon className='mediumIcon' />
                        </div>
                        <Brightness1Icon className={`text-red-500 miniIcon pl-1 pr-1`} />
                        <h1 className='pl-1'>{projectName}</h1>
                        <div className='absolute right-[9px] invisible duration-100 ease-in-out transform-all group-hover/item:visible'>
                            <MoreVertIcon className='primaryIcon text-[var(--blur-text)]' />
                        </div>
                    </div>
            }
            <div className={!toggleProject ? 'hidden' : ''}>
                {(timeLine) ? <div className='flex flex-col w-full'>
                    <NavLink to={`/timeline/${projectId}`} className='flex justify-start pt-[2px] pb-[2px] pl-10 pr-2 items-center align-middle text-[12.5px] font-medium leading-6 cursor-pointer hover:bg-[var(--hover-color)]'>
                        <VerticalSplitIcon className='bodyIcon' />
                        <h1 className='pl-3'>Timeline</h1>
                    </NavLink>
                </div> : null}
                {(board) ? <div className='flex flex-col w-full'>
                    <NavLink to={`/board/${projectId}`} className='flex justify-start pt-[2px] pb-[2px] pl-10 pr-2 items-center align-middle text-[12.5px] font-medium leading-6 cursor-pointer hover:bg-[var(--hover-color)]'>
                        <TableChartIcon className='bodyIcon' />
                        <h1 className='pl-3'>Board</h1>
                    </NavLink>
                </div> : null}
            </div>
        </div>
    );
}

export default Project;