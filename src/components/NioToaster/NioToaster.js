import React from 'react';
import classNames from 'classnames';
import { createPortal } from 'react-dom';
import Toast from 'react-bootstrap/Toast';

function NioToast({ className, variant, show, setShow, children,  props}) {

  const compClasses = classNames({
    "nl-toast": true,
    "nl-toast-error": variant === "error",
    "nl-toast-success": variant === "success",
    "nl-toast-warning": variant === "warning",
    [`${className}`]: className
  })

  return createPortal(
    <Toast show={show} onClose={()=> setShow(false)} className={compClasses} {...props}>
      {children}
    </Toast>
    ,
    document.body
  );
}

export default NioToast;
