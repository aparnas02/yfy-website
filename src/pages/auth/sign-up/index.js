import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { Col, Form, Row } from 'react-bootstrap';

// layout 
import AuthLayout from '../../../layouts/AuthLayout/AuthLayout';

// components 
import { NioButton, NioCard, NioField, NioBrand } from '../../../components';

export default function Signup() {
  const navigate = useNavigate();

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    mode: 'onSubmit',
    defaultValues: {
      fname: '',
      email: '',
      password: '',
    }
  });

  const onSubmit = (data) => {

    // clear field 
    reset();

    // navigate to another page 
    navigate('/');
  };

  return (
    <AuthLayout title="Signup">
      <NioCard className="nl-auth-form-card mx-md-9 mx-xl-auto">
        <NioCard.Body className="p-lg-7">
          <div className="text-center pb-5">
            <div className="mb-3">
              <NioBrand />
            </div>
            <h3>Sign up to your account</h3>
            <p className="fs-7">Already a member? <Link to="/auth/login" className="btn-link text-primary">Login</Link>.</p>
          </div>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row className="gy-4">
              <Col xs="12">
                <NioField>
                  <NioField.Label label="Full Name" htmlFor="fname" />
                  <NioField.Input id="fname" placeholder="Enter Your Name" errors={errors.fname} {...register("fname", {
                    required: "Field is required"
                  })} 
                  isInvalid={!!errors.fname}
                  />
                  {errors.fname && 
                    <Form.Control.Feedback type="invalid">{errors?.fname?.message}</Form.Control.Feedback>
                  }
                </NioField>
              </Col>
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
                <div className="form-group">
                  <NioButton
                    label="Sign Up To Your Account"
                    className="btn-block btn-primary" />
                </div>
              </Col>
            </Row>
          </Form>
          <div className="pt-4 text-center overflow-hidden">
            <div className="small nl-text-sep">
              <span className="bg-white px-2 text-uppercase">or register with</span>
            </div>
          </div>
          <div className="pt-4">
            <NioButton href="#" img="/images/icon/a.png" label="Sign Up with Google" className="border border-lighter text-nowrap text-dark w-100 " />
          </div>
        </NioCard.Body>
      </NioCard>
    </AuthLayout >
  )
}
