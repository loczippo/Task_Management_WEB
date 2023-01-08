import React from 'react';
import { SliderbarPrimary, SliderBarSecondDefault, SliderBarSecondSettings, SliderBarSecondUsers } from './components'
import AppRouter from './routes';
import { useAppSelector } from './hooks'
import { SliderbarState } from './interfaces/sliderbar.interface';
import { PrimarySliderBarEnum } from './enums';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';

const renderSecondSliderBar = (menu: string): ReactJSXElement => {
  switch(menu) {
    case PrimarySliderBarEnum.SETTINGS: return <SliderBarSecondSettings/>
    case PrimarySliderBarEnum.USERS: return <SliderBarSecondUsers/>
    default: return <SliderBarSecondDefault/>
  }
}

function App() {
  const sliderBarMenu = useAppSelector((state: SliderbarState) => state.sliderbar.menu)
  return (
    <>
      <div className="App_withSidebar flex w-full fixed inset-0">
        <div className="App_sidebarWrap flex-shrink-0">
          <SliderbarPrimary/>
        </div>
        <div className="App_sidebarWrap_toggle">
          {renderSecondSliderBar(sliderBarMenu)}
        </div>
          <AppRouter/>
      </div>
    </>
  );
}

export default App;
