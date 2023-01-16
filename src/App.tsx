import React, { useEffect, useState } from 'react';
import { SliderbarPrimary, SliderBarSecondDefault, SliderBarSecondSettings, SliderBarSecondUsers } from './components'
import AppRouter from './routes';
import { useAppSelector } from './hooks'
import { SliderbarState } from './interfaces/sliderbar.interface';
import { PrimarySliderBarEnum } from './enums';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import 'react-loading-skeleton/dist/skeleton.css'
import { LoginView } from './views';

import { ReactComponent as Loading } from './assets/img/loading.svg';

const renderSecondSliderBar = (menu: string): ReactJSXElement => {
  switch (menu) {
    case PrimarySliderBarEnum.SETTINGS: return <SliderBarSecondSettings />
    case PrimarySliderBarEnum.USERS: return <SliderBarSecondUsers />
    default: return <SliderBarSecondDefault />
  }
}

function App() {
  const sliderBarMenu = useAppSelector((state: SliderbarState) => state.sliderbar.menu)

  const [isLoading, setIsLoading] = useState(true);
  const [loadingText, setLoadingText] = useState('Loading');

  const [isLogin] = useState(false);

  useEffect(() => {
    new Promise(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
      setTimeout(() => {
        setLoadingText(loadingText + '.');
        if (loadingText === "Loading....") setLoadingText("Loading.");
      }, 500)
    });
  }, [loadingText])
  return (
    <>
      {(isLogin) ? (!isLoading) ? <div className="App_withSidebar flex w-full fixed inset-0">
        <div className="App_sidebarWrap flex-shrink-0">
          <SliderbarPrimary />
        </div>
        <div className="App_sidebarWrap_toggle">
          {renderSecondSliderBar(sliderBarMenu)}
        </div>
        <AppRouter />
      </div> : <p className='min-h-screen flex justify-center items-center text-center text-sm font-normal text-[var(--black-text)]'>{loadingText} <Loading className='w-8' /></p> : <LoginView />}
    </>
  );
}

export default App;
