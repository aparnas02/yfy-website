import React from 'react';
import { Col, Nav, Row, Tab } from 'react-bootstrap';

// data 
import { useData } from '../../../../../context/DataProvider/DataProvider';

// components 
import NioMedia from '../../../../NioMedia/NioMedia';


export default function FeaturesContent() {

  const data = useData();
  const contents = data.tabs.digital.contents;

  return (
    <Tab.Container defaultActiveKey={0}>
      <Row className="nl-tab style-3 justify-content-center">
        <Col xs="12">        
          <Nav className="gap-5 gap-xl-0 justify-content-center">
            {
              contents && contents.nav.map((content, idx) => (
                <Nav.Item key={idx}>
                  <Nav.Link eventKey={idx} className="d-flex gap-3 align-items-center">
                      <NioMedia variant={content.variant} rounded="circle" icon={content.icon} />
                        <h5 className="text-capitalize mb-0">
                          {content.title}
                        </h5>
                  </Nav.Link>
                </Nav.Item>
              ))
            }
          </Nav>
        </Col>
        <Tab.Content className="pt-5 pt-md-7">
          {
            contents && contents.pane.map((content, idx) => (
              <Tab.Pane eventKey={idx} key={idx}>
                <Row className="justify-content-center">
                  <Col lg="8">
                    <div className="position-relative overflow-hidden rounded-3">
                      <img src={content?.cover} alt="feature" />
                    </div>
                  </Col>
                </Row>
              </Tab.Pane>
            ))
          }
        </Tab.Content>
      </Row>
    </Tab.Container>
  )
}
