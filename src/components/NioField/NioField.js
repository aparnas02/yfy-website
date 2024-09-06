import classNames from 'classnames';
import Form from 'react-bootstrap/Form';
import React, { forwardRef, useState } from 'react';

// components
import NioIcon from '../NioIcon/NioIcon';


export default function NioField({ className,  children, ...props }) {

  const compClasses = classNames({
    "form-group": true,
    [`${className}`]: className
  });

  return (
    <div className={compClasses} {...props}>
      {children}
    </div>
  )
}

// Children Components

const Field = forwardRef(({ icon, type, id, inputClasses, placeholder, field, ...props }, ref) => {

  const [inputType, setInputType] = useState(type);

  if (icon) {

    const [name, position = "before", _class = ""] = icon.split(" ");
    const isEyeFill = icon.includes("eye-fill");

    const handleTypeChange = () => {
      if (type !== "text") {
        setInputType(prevType => prevType === "password" ? "text" : "password")
      }
    };


    return (
      <>
        {position === "before" && (
          <>
            <div
              onClick={handleTypeChange}
              className={`form-control-icon ${position} ${_class}`}>
              <NioIcon name={isEyeFill ? (inputType === "password" ? `eye-fill ${position} ${_class}` : `eye-off-fill ${position} ${_class}`) : name} />
            </div>
            <Form.Control
              id={id}
              ref={ref}
              type={inputType}
              className={inputClasses}
              placeholder={placeholder}
              {...props}
            />
          </>
        )}

        {position === "after" && (
          <>
            <Form.Control
              id={id}
              ref={ref}
              type={inputType}
              className={inputClasses}
              placeholder={placeholder}
              {...props}
            />
            <div
              onClick={handleTypeChange}
              className={`form-control-icon ${position} ${_class}`}>
              <NioIcon name={isEyeFill ? (inputType === "password" ? `eye-fill ${position} ${_class}` : `eye-off-fill ${position} ${_class}`) : name} />
            </div>
          </>
        )}

      </>
    );
  } else {
    return (
      <>      
        <Form.Control
          id={id}
          ref={ref}
          type={type}
          className={inputClasses}
          placeholder={placeholder}
          {...props}
        />
      </>
    );
  }
});

const fieldInput = forwardRef(({ className, childClass, icon, id, size, type = "text", placeholder = "Placeholder Content", errors, ...props }, ref) => {

  const compClasses = classNames({
    [`${childClass}`]: childClass
  });

  return (
    <>
      {icon ? (
        <Field
          id={id}
          ref={ref}
          icon={icon}
          type={type}
          className={compClasses}
          placeholder={placeholder}
          {...props}
        />
      ) : (
        <>
          <Form.Control
            id={id}
            ref={ref}
            size={size}
            type={type}
            className={compClasses}
            placeholder={placeholder}
            {...props}
          />
        </>
      )}
    </>
  );
});

const checkField = forwardRef(({ className, type = "checkbox", label, ...props }, ref) => {

  const compClasses = classNames({
    "form-check": true,
    [`${className}`]: className
  });

  return (
    <Form.Check 
      ref={ref}
      type={type}
      label={label}
      className={compClasses}
       {...props} />
  )

});

function FieldLabel({label, htmlFor, ...props}) { 
  return (
    <Form.Label htmlFor={htmlFor} {...props}>{label}</Form.Label>
  )
}






NioField.Input = fieldInput;
NioField.Check = checkField;
NioField.Label = FieldLabel;