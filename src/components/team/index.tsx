import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { NavLink } from "react-router-dom";
import PeopleIcon from '@mui/icons-material/People';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function Team(props: any): ReactJSXElement {

    const { teamName, teamId } = props;
    return (

        <div className="sliderbar_header flex flex-col w-full pb-1">
            <NavLink to={`/${teamId}`} className='relative group flex justify-start pt-1 pb-1 pl-3 pr-2 items-center align-middle text-[12.5px] font-medium leading-6 cursor-pointer hover:bg-[var(--hover-color)]'>
                <PeopleIcon className='bodyIcon' />
                <h1 className='pl-3'>{teamName}</h1>
                <div className='absolute right-[9px] invisible duration-100 easeo-in-out transfrm-all group-hover:visible'>
                    <MoreVertIcon className='primaryIcon text-[var(--blur-text)]' />
                </div>
            </NavLink>
        </div>

    );
}
export default Team;