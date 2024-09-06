import React, { useEffect } from 'react';

// context 
import LayoutProvider from '../../context/LayoutProvider/LayoutProvider';

// components 
import { AppRoot } from '../../components';


function AppLayout({ footerVariant, layoutClass="1", title = 'page title goes here', children }) {

  useEffect(() => {
    document.title = `${title} - NioLand React Template`
  }, [title])

  return (
    <LayoutProvider>
      <AppRoot footerVariant={footerVariant} layoutClass={layoutClass}>
        {children}
      </AppRoot>
    </LayoutProvider>
  )
}

export default AppLayout;

