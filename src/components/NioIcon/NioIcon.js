import React from 'react';
import classNames from 'classnames';

export default function NioIcon({ className, name, variant, props }) {
  const comClass = classNames({
    [`icon ni ni-${name}`]: true,
    [`text-${variant}`]: variant,
    [`${className}`]: className,
  })
  return (
    <em className={comClass}{...props}></em>
  )
}
