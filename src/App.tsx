import React from 'react';
import { Routes, Route } from 'react-router-dom'

import { SliderbarPrimary, SliderbarSeconds } from './components'

import { HomeView, NewsView, ErrorView } from './views';

function App() {

  return (
    <>
      {/* App With SliderBar */}
      <div className="App_withSidebar flex w-full fixed inset-0">
        {/* SliderBar Wrap */}
        <div className="App_sidebarWrap flex-shrink-0">
          <SliderbarPrimary/>
        </div>
        <div className="App_sidebarWrap_toggle">
          <SliderbarSeconds/>
        </div>
          <Routes>
            <Route path='/news' element={<NewsView/>} />
            <Route path='/' element={<HomeView/>} />
            <Route path='*' element={<ErrorView/>} />
          </Routes>
        {/* App Width SliderBar Content */}
        {/* <div className="py-0 pr-10 pl-5 max-w-[calc(100%-48px)] flex-1">
          <section className="max-w-[1920px] w-[100%] p-0 my-0 mx-auto">
            <Home />
          </section>
        </div> */}
      </div>



      {/* <div className='flex'>
        <Sliderbar/>
        <div className='group/main ml-16'>
        <button className='group-hover/main:left-11 bg-red-500'>Toggle</button>
          <section className="border bg-red-200 absolute transition-all duration-500 -left-60 group-hover/main:left-11">
                <p className="h-screen grid place-items-center w-60">sidebar</p>
          </section>
        </div>
        <div className='ml-20'><Home/></div>
      </div> */}
      
    </>
  );
}

export default App;
