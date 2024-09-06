import React from 'react';
import { useForm } from 'react-hook-form';
import { Col, Row, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

// layout 
import AuthLayout from '../../../layouts/AuthLayout/AuthLayout';

// components
import { NioField, NioBrand, NioButton, NioCard } from '../../../components';

export default function Login() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: 'onSubmit',
    defaultValues: { 
      email: 'info@softnio.com',
      password: '123456'
    }
  });

  const onSubmit = (data) => {
    if (data.email === 'info@softnio.com' && data.password === '123456' && data.password.length >= 6 && data.password.length <= 12) {

      // Redirect to the home route
      navigate("/");

    } else {
      alert('Invalid email or password. Please try again.');
    }
  };

  return (
    <AuthLayout title="Login">
      <NioCard className="nl-auth-form-card mx-md-9 mx-xl-auto">
        <NioCard.Body className="p-lg-7">
          <div className="text-center pb-5">
            <div className="mb-3">
              <NioBrand/>
            </div>
            <h3>Login to your account</h3>
            <p className="fs-7">Not a member yet? <Link to="/auth/sign-up" className="btn-link text-primary">Sign Up</Link>.</p>
          </div>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row className="gy-4">
              <Col xs="12">
                <NioField.Label htmlFor="email" label="Email" />
                <NioField>
                  <NioField.Input
                    required
                    id="email"
                    type="email"
                    htmlFor="email"
                    placeholder="Enter your email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                        message: "Invalid email address"
                      }
                    })}
                    isInvalid={!!errors.email}
                  />
                  {errors.email && 
                    <Form.Control.Feedback type="invalid">{errors?.email?.message}</Form.Control.Feedback>
                  }
                </NioField>
              </Col>
              <Col xs="12">
                <NioField.Label htmlFor="password" label="Password" />
                <NioField>
                  <NioField.Input
                    required
                    id="password"
                    type="password"
                    icon="eye-fill after text-primary"
                    placeholder="Enter your password"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters long"
                      },
                      maxLength: {
                        value: 12,
                        message: "Password must not exceed 12 characters"
                      }
                    })}
                    isInvalid={!!errors.password}
                  />
                  {errors.password && 
                    <Form.Control.Feedback type="invalid">{errors?.password?.message}</Form.Control.Feedback>
                  }
                </NioField>
              </Col>
              <Col xs="12">
                <div className="d-flex flex-wrap align-items-center justify-content-between text-center mb-1">
                  <NioField.Check id="check" label="Remember Me" />
                  <Link to="/auth/forgot-password" className="d-inline-block fs-7 fw-bold">Forgot Password?</Link>
                </div>
              </Col>
              <Col xs="12">
                <div className="form-group">
                  <NioButton
                    type="submit"
                    label="Login to Your Account"
                    className="btn-block btn-primary"
                  />
                </div>
              </Col>
            </Row>
          </Form>
          <div className="pt-4 text-center overflow-hidden">
            <div className="small nl-text-sep">
              <span className="bg-white px-2 text-uppercase">or login with</span>
            </div>
          </div>
          <div className="pt-4">
            <NioButton
              href="#"
              label="Login With Google"
              img="../images/icon/a.png"
              className="border border-lighter text-nowrap text-dark w-100"
            />
          </div>
        </NioCard.Body>
      </NioCard>
    </AuthLayout>
  );
}
