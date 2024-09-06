import React from 'react';
import { Link } from 'react-router-dom';

// components 
import NioIcon from '../NioIcon/NioIcon'
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

export default function NioStickyBadge() {
  const renderTooltip = (text, props) => (
    <Tooltip id="nl-tooltip" {...props}>
      {text}
    </Tooltip>
  )
  
  return (
    <div className="nl-sticky-badge">
      <ul>
        <li>            
          <OverlayTrigger placement="top" overlay={renderTooltip("Go To Intro Page")}>
          <Link to="/" className="nl-sticky-badge-item bg-green">
            <NioIcon name="home-fill" />
          </Link>
          </OverlayTrigger>
        </li>
        <li>
          <OverlayTrigger placement="top" overlay={renderTooltip("Purchase Now")}>
            <Link to="https://1.envato.market/NioLandReact" className="nl-sticky-badge-item bg-danger">
              <NioIcon name="cart-fill" />
            </Link>
          </OverlayTrigger>
        </li>
      </ul>
    </div>
  )
}
