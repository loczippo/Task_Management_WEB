import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import PeopleIcon from '@mui/icons-material/People';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import React from 'react';

function sliderBarPrimary() {
  return (
    <div className='Sidebar_wrapper h-full'>
        <section className="relative flex h-full flex-col items-center justify-between bg-gray-500 text-white w-12">
            <div>
                <div className='relative items-center flex flex-col w-8 mt-1'>
                    <a href="home" className="items-center flex h-8 justify-center mb-[9px] w-8 bg-gray-900 rounded-full transition-transform transform duration-200 hover:scale-[1.2] ease-in-out">
                        <WorkspacesIcon/>
                    </a>
                </div>
                <div className="group items-center flex flex-col w-8 mb-[9px]">
                    <a href="#test" className="items-center flex h-8 justify-center  w-8 hover:bg-gray-700 hover:rounded-lg">
                        <SettingsIcon/>
                    </a>
                    <span className="pointer-events-none after:translate-x-[0.5px] group-hover:opacity-100 z-[9999999] transition-opacity bg-gray-800 px-2 text-sm text-gray-100 rounded-md absolute left-1/4 
                    -translate-y-1/2 translate-x-[45%] opacity-0 m-4 mx-auto transform duration-[0.25] delay-75 ease-in-out after:content-[''] after:border-[5px] after:border-transparent after:border-r-gray-800 after:absolute after:right-full after:top-1/2 after:-translate-y-1/2
                    ">
                        Settings
                    </span>
                </div>
                <div className="group items-center flex flex-col w-8 mb-[9px]">
                    <a href="#test" className="items-center flex h-8 justify-center w-8 hover:bg-gray-700 hover:rounded-lg">
                        <PeopleIcon/>
                    </a>
                    <span className="pointer-events-none after:translate-x-[0.5px] group-hover:opacity-100 z-[9999999] transition-opacity bg-gray-800 px-2 text-sm text-gray-100 rounded-md absolute left-1/4 
                    -translate-y-1/2 translate-x-[61%] opacity-0 m-4 mx-auto transform duration-[0.25] delay-75 ease-in-out after:content-[''] after:border-[5px] after:border-transparent after:border-r-gray-800 after:absolute after:right-full after:top-1/2 after:-translate-y-1/2
                    ">
                        Users
                    </span>
                </div>
                <div className="group items-center flex flex-col w-8 mb-[9px]">
                    <a href="#test" className="items-center flex h-8 justify-center w-8 hover:bg-gray-700 hover:rounded-lg">
                        <HelpIcon/>
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

export default sliderBarPrimary;
