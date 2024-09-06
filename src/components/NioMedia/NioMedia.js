import classNames from 'classnames';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// components
import NioIcon from '../NioIcon/NioIcon';
import NioLightBox from '../NioLightBox/NioLightBox';

export default function NioMedia({ href, className, variant, size, border, rounded, icon, img, children, lightboxSrc, ...props }) {

  const [showLightbox, setShowLightbox] = useState(false);
  const compClasses = classNames({
    "nl-media": true,
    [`border`]: border,
    "pointer": lightboxSrc,
    [`nl-media-${size}`]: size,
    [`rounded-${rounded}`]: rounded,
    [`nl-media-${variant}`]: !border && variant,
    [`border-${variant} text-${variant}`]: border !== undefined,
    [`${className}`]: className,
  });

  const toggleLightbox = () => {
    setShowLightbox((prevShowLightbox) => !prevShowLightbox);
  };


  if (lightboxSrc) {
    return (
      <>
        <span role="button" className={compClasses} {...props} onClick={toggleLightbox}>
          {img && <img src={img} alt="cover" />}
          {icon && <NioIcon name={icon} />}
          {children}
        </span>
        <NioLightBox show={showLightbox} src={[lightboxSrc]} />
      </>
    );

  }

  if (href) {
    return (
      <Link to={href || "#"} className={compClasses} {...props}>
        {img && <img src={img} alt="cover" />}
        {icon && <NioIcon name={icon} />}
        {children}
      </Link>
    );
  }

  return (
    <div className={compClasses} {...props}>
      {img && <img src={img} alt="cover" />}
      {icon && <NioIcon name={icon} />}
      {children}
    </div>
  );
}
