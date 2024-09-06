import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';


// components 
import NioIcon from '../../../../NioIcon/NioIcon';

export default function SearchField()  {
  return (
    <Form onSubmit={e=> e.preventDefault()}>
      <div className="nl-search-group mb-5">
        <Row className="gy-3 gx-5 align-items-center justify-content-between">
          <Col lg="9">
            <div className="nl-search-element">
              <div className="nl-search-field">
                <NioIcon name="menu-circled" className="fs-7"  />
                <input type="text" name="text" placeholder="Enter Keyword" className="fs-8" required />
              </div>
              <div className="d-flex align-items-center gap-1">
                <NioIcon name="briefcase" className="fs-7" />
                <Form.Select aria-label="Default Sorting" className="py-0 ps-0 pe-4">
                  <option defaultValue>Default</option>
                  <option value="1">Hybrid</option>
                  <option value="2">Remote</option>
                  <option value="3">Physical</option>
                </Form.Select>
              </div>
              <div className="nl-dropdown d-flex align-items-center gap-1">
              <NioIcon name="map-pin" className="fs-7" />
              <Form.Select aria-label="Default Sorting" className="py-0 ps-0 pe-4">
                  <option defaultValue>Location</option>
                  <option value="1">New York</option>
                  <option value="2">Los Angels</option>
                  <option value="3">California</option>
                </Form.Select>
              </div>
            </div>
          </Col>
          <Col lg="3" className="text-end">
              <button type="submit" className="btn btn-block btn-primary text-nowrap">Job Search</button>
          </Col>
        </Row>
      </div>
      <p className="fs-7 mb-0 text-dark">
      <b>Popular Searches:</b> Designer, Developer, Web, IOS, PHP, Senior, Engineer
      </p>
    </Form>
  );
}

