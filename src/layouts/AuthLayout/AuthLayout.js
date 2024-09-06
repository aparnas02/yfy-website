import React, { useEffect } from 'react';

// components 
import { NioMedia, NioStickyBadge } from '../../components'
import LayoutProvider from '../../context/LayoutProvider/LayoutProvider';

function AuthLayout({ title = "Page Title Goes Here", layoutClass = "layout-1", children }) {

  useEffect(() => {
    document.title = `${title} - NioLand React Template`
  }, [title]);

  useEffect(() => {
    // Apply layoutClass to the body element when the layoutClass prop changes
    const body = document.querySelector('body');

    if (layoutClass) {
      body.classList.add(layoutClass);
    }

    // Remove the previous layoutClass if it exists
    return () => {
      if (layoutClass) {
        body.classList.remove(layoutClass);
      }
    };
  }, [layoutClass]);

  return (
    <LayoutProvider>
      <div className="nl-split-page flex-column flex-xl-row">
        <div className="nl-split-col nl-auth-col justify-content-center">
          {children}
        </div>
        <div className="nl-split-col nl-auth-col nl-auth-col-content  bg-primary-gradient ">
          <div className="nl-auth-content mx-md-9 mx-xl-auto">
            <div className="nl-auth-content-inner">
              <NioMedia 
                size="xl"
                variant="info"  
                rounded="circle"
                icon="quote-left"
                className="mb-5"
               />
              <h1 className="text-white mb-5">We’re building a better application now</h1>
              <div className="nl-auth-quote ms-sm-5">
                <div className="nl-auth-quote-inner pb-0">
                  <p className="text-white fs-8 opacity-75 mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis magna massa semper tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis magna massa semper tristique dotset.</p>
                  <div className="d-flex align-items-center gap-2">
                    <NioMedia
                      size="md"
                      rounded="circle"
                      img="../images/avatar/a.jpg"
                    />
                    <div>
                      <h5 className="text-white mb-0">Wade Warren</h5>
                      <span className="fs-8 d-block text-white opacity-75">3 months ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NioStickyBadge />
    </LayoutProvider>
  )
}
export default AuthLayout;