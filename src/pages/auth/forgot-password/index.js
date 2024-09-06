import React from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { Col, Form, Row } from 'react-bootstrap';


// layouts 
import AuthLayout from '../../../layouts/AuthLayout/AuthLayout';

// components 
import { NioButton, NioField, NioBrand, NioCard } from '../../../components';

export default function ForgotPassword() {

  const navigate = useNavigate();

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    'mode': 'onSubmit',
    defaultValues: {
      email: '',
    }
  });


  const onSubmit = (data) => {

    console.log(data)

    // clear field 
    reset()

    // redirect to another page 
    navigate('/auth/reset-password')
  };



  return (
    <AuthLayout title="Forgot Password">

      <NioCard className="nl-auth-form-card mx-md-9 mx-xl-auto">
        <NioCard.Body className="p-lg-7">
          <div className="text-center pb-5">
            <div className="mb-3">
              <NioBrand />
            </div>
            <h3>Password Forgotten?</h3>
            <p className="fs-7">Shouldn't Be Here <Link to="/auth/login" className="btn-link text-primary">Login</Link>.</p>
          </div>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row className="gy-4">
              <Col xs="12">
                <NioField.Label label="Email" htmlFor="email" />
                <NioField>
                  <NioField.Input type="email" id="email" placeholder="Enter your email" errors={errors.email} {...register("email", {
                    required: "field is required",
                    pattern: {
                      value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      message: "invalid email address"
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
                <div className="form-group">
                  <NioButton className="btn-primary btn-block" label="Send Reset Link" />
                </div>
              </Col>
            </Row>
          </Form>
        </NioCard.Body>
      </NioCard>
    </AuthLayout>
  )
}
