import classNames from 'classnames';
import React, { useState, useEffect } from 'react';

// components
import NioMedia from '../NioMedia/NioMedia';

export default function NioBackTop({ className }) {

  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  const compClasses = classNames({
    "shadow": true,
    "active": showButton,
    "scroll-top": true,
    "animate animate-infinite animate-pulse animate-duration-2": true,
    [`${className}`]: className

  })
  

  return (
    <NioMedia
      size="lg"
      variant="primary"
      icon="chevrons-up"
      onClick={handleClick}
      className={compClasses}
    />
  );
};


