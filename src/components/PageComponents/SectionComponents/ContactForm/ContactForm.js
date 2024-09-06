import React, { useState } from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import classNames from 'classnames'

// components
import NioIcon from '../../../NioIcon/NioIcon';
import NioField from '../../../NioField/NioField';
import NioCard from '../../../Cards/NioCard/NioCard';
import NioButton from '../../../NioButton/NioButton';
import NioToast from '../../../NioToaster/NioToaster';


export default function ContactForm() {

  const [showToast, setShowToast] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    mode: 'onChange',
    defaultValues: { 
      fname: '',
      messages: '',
      password: '123456',
      phone: '951235682',
      email: 'info@softnio.com',
    }
  });


  const onSubmit = (data, e) => {
    // Prevent default form submission behavior
    e.preventDefault();

    // Check if there are errors in the form
    if (Object.keys(errors).length === 0) {
        // Show the toaster
        setShowToast(true);

        // Perform any other actions related to form submission
        
        // Clear the form fields after a delay
        setTimeout(() => {
            reset(); // This will clear the form fields
            setShowToast(false); // Hide the toaster
        }, 3000); // Adjust the delay time as needed
    }
};


  // Classes 
  const fieldWrapper = classNames({
    "form-control-wrap": true
  });

  return (
    <>
      <NioCard className="rounded-2">
        <NioCard.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row className="g-4 g-lg-5">
              <Col xs="12">
                <NioField>
                  <NioField.Label label="Full Name" htmlFor="fname"  />
                  <NioField.Input id="fname" placeholder="Enter Your Name"
                   isInvalid={!!errors.fname} {...register("fname", {required: 'field is required'})}  />
                  {
                    errors?.fname && 
                    <Form.Control.Feedback type="invalid" tooltip>{errors?.fname.message}</Form.Control.Feedback>
                    }
                </NioField>
              </Col>
              <Col lg="6">
                <NioField>
                  <NioField.Label label="Email" htmlFor="email" />
                  <NioField.Input type="email" id="email" placeholder="Enter Your Email" isInvalid={!!errors.email}   {...register("email", {
                        required: "Field is Required",
                        pattern: {
                          value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                          message: "Invalid Email Address"
                        }
                      })} />
                  {
                    errors?.email && 
                    <Form.Control.Feedback type="invalid" tooltip>{errors?.email.message}</Form.Control.Feedback>
                    }
                </NioField>
              </Col>
              <Col lg="6">
                <NioField>
                  <NioField.Label label="Phone" htmlFor="phone" />
                  <NioField.Input type="number" id="phone" placeholder="(223) 456 - 789" isInvalid={!!errors.phone} {...register("phone", {
                    required: 'field is required'
                  })} />
                  {
                    errors?.phone && 
                    <Form.Control.Feedback type="invalid" tooltip>{errors?.phone.message}</Form.Control.Feedback>
                  }
                </NioField>
              </Col>
              <Col xs="12">
                <div className="form-group">
                  <div className="form-label-group">
                    <label className="form-label">Tell us a bit about your query</label>
                  </div>
                  <div className={fieldWrapper}>
                    <Form.Control 
                      rows="6"
                      as="textarea"
                      isInvalid={!!errors.messages}
                      {...register("messages", {required: 'field is required'})}
                      placeholder="Enter your message"
                    />
                  {
                    errors?.message && 
                    <Form.Control.Feedback type="invalid" tooltip>{errors?.messages.message}</Form.Control.Feedback>
                    }
                  </div>
                </div>
              </Col>
              <Col xs="12">
                <div className="form-group">
                  <NioButton type="submit"  className="btn-primary" label="Send Message" />
                </div>
              </Col>
            </Row>
          </Form>
          <NioToast show={showToast} setShow={setShowToast} variant="success">
              <div>
                <span className="nl-toast-icon">
                  <NioIcon name="check" />
                </span>
              </div>
              <div className="nl-toast-info w-100 text-start">
                <h6 className="fs-7 mb-0">Message Sended</h6>
                <p className="fs-9">Thank You, We Will Contact With You Soon.</p>
              </div>
        </NioToast>
        </NioCard.Body>
      </NioCard>
    </>
  )
}
