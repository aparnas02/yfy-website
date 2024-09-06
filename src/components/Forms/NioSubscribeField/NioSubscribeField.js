import React, { useState } from 'react';
import classNames from 'classnames';
import { useForm } from 'react-hook-form';
import { Col, Form, Row } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

// components 
import NioField from '../../NioField/NioField';
import NioButton from '../../NioButton/NioButton';
import useRouteMatch from '../../../hooks/useRouteMatch';
import NioIcon from '../../NioIcon/NioIcon';
import NioToast from '../../NioToaster/NioToaster';

export default function NioSubscribeField({ variant = 1, icon, className, btnClass, isTheme, rounded, children, ...props }) {

  const location = useLocation();
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    mode: 'onSubmit'
  });
  
  const [showToast, setShowToast] = useState(false);

  const onSubmit = (data) => {
    if (!errors.email) {
      setShowToast(true);
      reset();
      setTimeout(() => {
        setShowToast(false);
      }, 1800);
    }
  };

  const compClasses = classNames({
    "nl-newsletter": true,
    "style-1": variant === 1,
    "style-2": variant === 2,
    "style-3": variant === 3,
  });

  const iconClasses = classNames({
    [`${icon}`]: icon
  });

  const formControllClasses = classNames({
    
    // size
    "form-control-lg": useRouteMatch(["/index-collaboration-tool", "/index-saas"]),

    // bg color
    "px-0 border-0 border-bottom border-white shadow-none": useRouteMatch(["/index-crypto-profile"])
  
  });

  const btnClasses = classNames({
 
    "btn": true,
    "btn-primary" : !btnClass,
    [`btn-${btnClass}`]: btnClass,

    "btn-block": variant !== 3,
    
    // border radius
    "rounded-pill": rounded,

    [`position-absolute translate-middle-y top-50 me-2 end-0`] : variant === 3
        
  });

  return (
    <>
      <Form className="w-100" onSubmit={handleSubmit(onSubmit)}>
        {
          variant === 1 ?
            <div className={compClasses}>
              <Row className={`${location.pathname === '/index-bs-analytics' ? 'gx-0' : 'gx-3'} align-items-center gy-3`}> 
                <Col md="8" className={`${location.pathname === "/index-bs-analytics" ? "pe-md-0" : ""}`}>
                  <NioField>
                    <NioField.Input
                      icon={iconClasses}
                      childClass={formControllClasses}
                      {...register("email", {
                        required: "Field is Required",
                        pattern: {
                          value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                          message: "Invalid Email Address"
                        }
                      })}
                      isInvalid={!!errors.email}
                      placeholder={props.placeholder || "Enter Your Email"}
                    />
                    {

                      errors.email && 
                      <Form.Control.Feedback type="invalid" tooltip>{errors?.email.message}</Form.Control.Feedback>
                    }
                  </NioField>
                </Col>
                <Col md="4">
                  <input type="submit" className={btnClasses} value={props.btnText || "Subscribe"} />
                </Col>
              </Row>
            </div>
            :
            variant === 2 ?
              <div className={compClasses}>
                <Row className="align-items-center">
                  <Col lg="8">
                    <div className="form-control-wrap mb-4 mb-lg-0">
                      <NioField.Input
                        icon={iconClasses}
                        placeholder={props.placeholder || "Enter Your Email"}
                        childClass={formControllClasses}
                        {...register("email", {
                          required: "Field is Required",
                          pattern: {
                            value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                            message: "Invalid Email Address"
                          }
                        })}
                        isInvalid={!!errors.email}
                      />
                      {
                          errors.email && 
                          <Form.Control.Feedback type="invalid" tooltip>{errors?.email.message}</Form.Control.Feedback>
                      }
                    </div>
                  </Col>
                  <Col lg="4">
                    <NioButton
                      type="submit"
                      className={btnClasses}
                      label={props.btnText || "Subscribe"}
                    />
                  </Col>
                </Row>
              </div>
              :
              variant === 3 ?
                <div className={compClasses}>
                  <NioField.Input
                    required
                    icon={iconClasses}
                    placeholder={props.placeholder || "Enter Your Email"}
                    childClass={formControllClasses}
                    {...register("email", {
                      required: "Field is Required",
                      pattern: {
                        value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                        message: "Invalid Email Address"
                      }
                    })}
                    isInvalid={!!errors.email}
                  />
                  <NioButton
                    type="submit"
                    className={btnClasses}
                    label={props.btnText || "Subscribe"}
                  />
                  {
                    errors.email && 
                    <Form.Control.Feedback type="invalid" tooltip>{errors?.email.message}</Form.Control.Feedback>
                  }
                </div>
                :
                <>
                  {children}
                </>
        }
      </Form>
      <NioToast show={showToast} setShow={setShowToast} variant="success">
            <div>
              <span className="nl-toast-icon">
                <NioIcon name="check" />
              </span>
            </div>
            <div className="nl-toast-info w-100 text-start">
              <h6 className="fs-7 mb-0">Subscription Success</h6>
              <p className="fs-9">Thank You For Your Subscription.</p>
            </div>
      </NioToast>
    </>
  )
}
