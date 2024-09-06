import React from 'react'
import { Col, Row } from 'react-bootstrap'

// components
import NioButton from '../../../NioButton/NioButton'
import NioCard from '../../../Cards/NioCard/NioCard'
import { useLayout } from '../../../../context/LayoutProvider/LayoutProvider'

export default function CallToAction() {
  const layout = useLayout();
  return (
    <NioCard className="bg-primary-gradient rounded-3 position-relative overflow-hidden">
      <NioCard.Body className={`p-3 p-md-7 ${layout.isRTL ? 'ps-0 ps-md-0' : 'pe-0 pe-md-0'}`}>
        <Row className="gy-7 gy-lg-0 align-items-center overflow-hidden">
          <Col xs={{ order: 2 }} lg={{ span: 7, order: 0 }}>
            <div className={`nl-block-head-content ${layout.isRTL ? 'pe-lg-7' : 'ps-lg-7'} pb-5 pb-md-0 mb-0`}>
              <h2 className="display-5 text-capitalize text-white m-0 mb-4 mb-lg-7">Start tracking your user analytics to boost your business</h2>
              <ul className="d-flex flex-wrap gap-3 gap-3 flex-wrap ps-1">
                <li>
                  <NioButton href="/index-analytics" className="btn-white" label="Get Started" />
                </li>
                <li>
                  <NioButton href="/pricing" className="btn-outline-white" label="Pricing & Plans" />
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={{ order: 1 }} lg={{ span: 5, order: 0 }}>
            <div className={`text-end pt-7 pt-lg-0 ${layout.isRTL ? 'pe-5 pe-sm-6 pe-lg-0' : 'ps-5 ps-sm-6 ps-lg-0'} `}>
                <img src="images/thumb/c.png" alt="tracking-thumb" className="me-n1" />
            </div>
          </Col>
        </Row>
      </NioCard.Body>
    </NioCard>
  )
}
