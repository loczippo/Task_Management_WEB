import React from 'react';
import { Sliderbar, Home } from '../../components/'

function WebApplication() {
  return (
    <>
      <div className='flex'>
        <Sliderbar/>
        <div className='group/main ml-16'>
        <button className='group-hover/main:left-11 bg-red-500'>Toggle</button>
          <section className="border bg-red-200 absolute transition-all duration-500 -left-60 group-hover/main:left-11">
                <p className="h-screen grid place-items-center w-60">sidebar</p>
          </section>
        </div>
        <div className='ml-20'><Home/></div>
      </div>
      
    </>
  );
}

export default WebApplication;
