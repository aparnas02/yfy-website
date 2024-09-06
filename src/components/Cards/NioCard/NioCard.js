import React from 'react';
import classNames from 'classnames';

export default function NioCard({ className, children, ...props }) {

  const comClasses = classNames({
    "card": true,
    [`${className}`]: className
  });

  return (
    <div className={comClasses} {...props}>
      {children}
    </div>
  )
};

function NioCardBody({ className, children, ...props }) {

  const compClasses = classNames({
    "card-body": true,
    [`${className}`]: className
  });

  return (
    <div className={compClasses} {...props}>
      {children}
    </div>
  )
}

NioCard.Body = NioCardBody;