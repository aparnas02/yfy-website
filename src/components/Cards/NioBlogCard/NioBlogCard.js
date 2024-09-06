import React from 'react';
import classNames from 'classnames';
import { Col, Row } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

// components
import NioCard from '../NioCard/NioCard';
import NioIcon from '../../NioIcon/NioIcon';
import NioBadge from '../../NioBadge/NioBadge';
import NioMedia from '../../NioMedia/NioMedia';
import NioButton from '../../NioButton/NioButton';

export default function NioBlogCard({
  variant,
  url,
  tags,
  title,
  cover,
  features,
  user,
  shadow,
  className,
  children }) {

  const location = useLocation();

  const comClasses = classNames({
    [`card-blog`]: true,
    [`has-shadow`]: shadow,
    [`${className}`]: className
  })

  return (


    <NioCard className={comClasses}>
      {
        variant === "one" ?
          <>
            <NioCard.Body>
              <div className="card-image">
                <Link to={url}>
                  <img src={cover} alt={title} className="card-img" />
                </Link>
              </div>
              <div className="pt-4">
                <div className="pb-1">
                  <NioBadge label={tags} rounded="circle" className={` ${location.pathname === "/blogs" ? "mb-3" : ""} text-bg-primary-soft`} />
                </div>
                <h4 className="text-capitalize">
                  <Link className="text-dark" to={url}>{title}</Link>
                </h4>

                <div className="d-flex gap-3 pt-4 align-items-center">
                  <NioMedia
                    size="sm"
                    rounded="circle"
                    img={user?.cover}
                  />
                  <div>
                    <span className="text-dark fs-7 fw-semibold">{user?.name}</span>
                    <ul className="nl-list-meta small">
                      <li className="fs-8 text-gray-700">Feb 10, 2022</li>
                      <li className="fs-8 text-gray-700">8 min read</li>
                    </ul>
                  </div>
                </div>
              </div>
            </NioCard.Body>
          </>
          :
          variant === 'two' ?
            <>
              <NioCard.Body>
                {
                  cover &&
                  <div className="card-image">
                    <Link to={url}>
                      <img src={cover} alt={title} className="card-img" />
                    </Link>
                  </div>
                }

                <div className="pt-5">

                  {

                    tags &&
                    <ul className='pb-3'>
                      {
                        tags.map((tag, idx) => (
                          <li key={idx}>
                            <Link
                              to={tag.url}
                              className={`badge ${tag.badge}  text-uppercase fw-semibold`}>
                              {tag.title}
                            </Link>
                          </li>
                        ))
                      }
                    </ul>
                  }
                  {
                    title &&
                    <h5 className="card-title">
                      <Link to={url}>{title}</Link>
                    </h5>
                  }
                  <div className="card-divider"></div>
                  <ul className="nl-list-meta ">
                    <li>Feb 10, 2022</li>
                    <li>8 min read</li>
                  </ul>
                </div>
              </NioCard.Body>
            </>
            :
            variant === 'three' ?
              <>
                {
                  cover &&
                  <div className="card-image rounded-0">
                    <Link to={url}>
                      <img src={cover} alt={title} className="card-img-top img-fit-cover h-100" />
                    </Link>
                  </div>
                }
                <NioCard.Body>
                  <div className="h-100 d-flex flex-column">
                    {
                      tags &&
                      <div className="pb-3">
                        <span className="badge text-bg-primary-soft text-uppercase py-1 px-3">{tags}</span>
                      </div>
                    }
                    {
                      title &&
                      <h4 className="card-title">
                        <Link to={url}>{title}</Link>
                      </h4>
                    }

                    {
                      features &&
                      <Row className="g-3 pt-4">
                        {
                          features.map((feature, idx) => (
                            <Col lg="6" key={idx}>
                              <div className="nl-course-overview-list">
                                <div className="nl-course-overview-media">
                                  <NioIcon name={feature.icon} />
                                </div>
                                <div className="nl-course-overview-content">
                                  <span className="title">{feature.title}</span>
                                </div>
                              </div>
                            </Col>
                          ))
                        }
                      </Row>
                    }
                    <div className="pt-5 mt-auto">
                      <NioButton as="link" variant='danger' className="btn-block" label='Join for $11.99 only' />
                    </div>
                  </div>
                </NioCard.Body>
              </>
              :
              <>
                {children}
              </>
      }

    </NioCard>
  )
}
