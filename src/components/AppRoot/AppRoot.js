import classNames from 'classnames';
import React, { useEffect } from 'react';

import { useLocation } from 'react-router-dom';
import { useData } from '../../context/DataProvider/DataProvider';


// layout component
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import NioBackTop from '../NioBackTop/NioBackTop';
import NioStickyBadge from '../NioStickyBadge/NioStickyBadge';
import SideBar from '../SideBar/SideBar';


export default function AppRoot({ footerVariant, layoutClass = "1", children }) {

  const data = useData();
  const location = useLocation();

  // get navigation data 
  const navigation = data.navigation;
  const menuData = location.pathname === "/" ? navigation.one : navigation.two;

  useEffect(() => {

    // Apply layoutClass to the body element when the layoutClass prop changes
    const body = document.querySelector('body');

    if (layoutClass) {
      body.classList.add(`layout-${layoutClass}`);
    }

    // Remove the previous layoutClass if it exists
    return () => {
      if (layoutClass) {
        body.classList.remove(`layout-${layoutClass}`);
      }
    };
    
  }, [layoutClass]);

  return (
    <>
      <AppRoot.Header data={menuData}/>
      <SideBar data={menuData} />
      <AppRoot.Main>
        {children}
      </AppRoot.Main>
      <AppRoot.Footer variant={footerVariant} />
      <NioBackTop />
      <NioStickyBadge />
    </>
  );
}

export function AppMain({ className, children }) {

  const compClasses = classNames({
    [`nl-pages`]: true,
    [`${className}`]: className,
  });

  return (
    <main className={compClasses}>
      {children}
    </main>
  );
}

AppRoot.Main = AppMain;
AppRoot.Header = Header;
AppRoot.Footer = Footer;
