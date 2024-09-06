import React, { useState, useEffect } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { NioCard, NioBrand, NioField, NioButton, NioIcon } from '../../../components';
import { useForm } from 'react-hook-form';

// layout 
import AuthLayout from '../../../layouts/AuthLayout/AuthLayout';
import NioToast from '../../../components/NioToaster/NioToaster';

export default function ResetPassword() {
  const navigate = useNavigate();
  const [showErrorToaster, setShowErrorToaster] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    mode: 'onSubmit',
    defaultValues: {
      password: '',
      cpassword: '',
    }
  });

  const onSubmit = (data) => {
    const { password, cpassword } = data;
    
    if (password === cpassword) {
      // If passwords match, clear fields and navigate
      reset();
      navigate('/');
    } else {
      // If passwords don't match, show error toaster
      setShowErrorToaster(true);
    }
  };

  useEffect(() => {
    // Hide the toaster after 3 seconds
    if (showErrorToaster) {
      const timer = setTimeout(() => {
        setShowErrorToaster(false);
      }, 3000);

      // Clear the timeout if the component unmounts or if the toaster is hidden
      return () => clearTimeout(timer);
    }
  }, [showErrorToaster]);

  return (
    <AuthLayout title="Reset Password">
      <NioCard className="nl-auth-form-card mx-md-9 mx-xl-auto" >
        <NioCard.Body className="p-lg-7">
          <div className="text-center pb-5">
            <div className="mb-3">
              <NioBrand logo="s1" variant="dark" />
            </div>
            <h3>Reset Password</h3>
            <p className="fs-7">Shouldn't Be Here? <Link to="/auth/login" className="btn-link text-primary">Login</Link>.</p>
          </div>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row className="gy-4">
              <Col xs="12">
                <NioField.Label htmlFor="password" label="Password" />
                <NioField>
                  <NioField.Input
                    id="password"
                    type="password"
                    isInvalid={!!errors.password}
                    icon="eye-fill after text-primary"
                    placeholder="At Least 8 Characters"
                    {...register("password", { required: "Password is required" })}
                  />
                  {errors.password && 
                    <Form.Control.Feedback type="invalid">{errors.password.message}</Form.Control.Feedback>
                  }
                </NioField>
              </Col>
              <Col xs="12">
                <NioField.Label htmlFor="cpassword" label="Confirm Password" />
                <NioField>
                  <NioField.Input
                    id="cpassword"
                    type="password"
                    icon="eye-fill after text-primary"
                    placeholder="Password Must Match"
                    isInvalid={!!errors.cpassword}
                    {...register("cpassword", { required: "Confirm Password is required" })}
                  />
                  {errors.cpassword && 
                    <Form.Control.Feedback type="invalid">{errors.cpassword.message}</Form.Control.Feedback>
                  }
                </NioField>
              </Col>
              <Col xs="12">
                <div className="form-group">
                  <NioButton
                    label="Reset Password"
                    className="btn-block btn-primary"
                    type="submit"
                  />
                </div>
              </Col>
            </Row>
          </Form>
          <NioToast show={showErrorToaster} setShow={setShowErrorToaster} variant="error">
            <div>
              <span className="nl-toast-icon">
                <NioIcon name="check" />
              </span>
            </div>
            <div className="nl-toast-info w-100 text-start">
              <h6 className="fs-7 mb-0">ERROR</h6>
              <p className="fs-9">Passwords didn't match.</p>
            </div>
          </NioToast>
        </NioCard.Body>
      </NioCard>
    </AuthLayout>
  )
}
