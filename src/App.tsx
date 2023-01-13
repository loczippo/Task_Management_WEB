import React, { PropsWithChildren, useEffect, useState } from 'react';
import { SliderbarPrimary, SliderBarSecondDefault, SliderBarSecondSettings, SliderBarSecondUsers } from './components'
import AppRouter from './routes';
import { useAppSelector } from './hooks'
import { SliderbarState } from './interfaces/sliderbar.interface';
import { PrimarySliderBarEnum } from './enums';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const renderSecondSliderBar = (menu: string): ReactJSXElement => {
  switch (menu) {
    case PrimarySliderBarEnum.SETTINGS: return <SliderBarSecondSettings />
    case PrimarySliderBarEnum.USERS: return <SliderBarSecondUsers />
    default: return <SliderBarSecondDefault />
  }
}

function Box({ children }: PropsWithChildren<unknown>) {
  return (
      <div
          style={{
              border: '1px solid #ccc',
              display: 'block',
              lineHeight: 2,
              padding: '1rem',
              marginBottom: '0.5rem',
              width: 100,
          }}
      >
          {children}
      </div>
  )
}

function App() {
  const sliderBarMenu = useAppSelector((state: SliderbarState) => state.sliderbar.menu)

  const wrapped1 = <Skeleton wrapper={Box} count={5} />
  const [isLoading, setIsLoading] = useState(true);
  const [loadingText, setLoadingText] = useState('Loading');

  useEffect(() => {
    new Promise(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000)
      setInterval(() => {
        setLoadingText(loadingText + '.');
      }, 700)
    });
  }, [loadingText])
  return (
    <>
      {!(isLoading) ? <div className="App_withSidebar flex w-full fixed inset-0">
        <div className="App_sidebarWrap flex-shrink-0">
          <SliderbarPrimary />
        </div>
        <div className="App_sidebarWrap_toggle">
          {renderSecondSliderBar(sliderBarMenu)}
        </div>
        <AppRouter />
      </div> : <p className='text-base text-[var(--black-text)]'>{loadingText}</p>}

    </>
  );
}

export default App;
