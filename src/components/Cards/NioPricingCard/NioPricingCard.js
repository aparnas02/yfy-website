import classNames from 'classnames';
import { useLocation } from 'react-router-dom';

// components
import NioIcon from '../../NioIcon/NioIcon';
import NioBadge from '../../NioBadge/NioBadge';
import NioButton from '../../NioButton/NioButton';
import useRouteMatch from '../../../hooks/useRouteMatch';

export default function NioPricingCard({
  className,
  active,
  variant = "one",
  icon,
  title,
  subtitle,
  description,
  price,
  priceType,
  pricing,
  children,
  features,
  ...props }) {

  const location = useLocation();

  const compClasses = classNames({
    "nl-pricing": true,
    "active": active,

    // variants
    "nl-pricing-s1 p-5": variant === "one",
    "nl-pricing-s2 p-5": variant === "two",
    "nl-pricing-s3": variant === "three",
    "nl-pricing-s4": variant === "four",

    // border

    "border": (!active && location.pathname === "/index-bs-subscription") || (!active && location.pathname === "/index-bs-solution") || (!active && location.pathname === "/index-project-management") || location.pathname === "/index-saas",

    "border border-primary": (active && location.pathname === "/index-bs-solution") || (active && location.pathname === "/index-project-management") || (active && location.pathname === "/index-bs-subscription"),

    // border radius
    "rounded-4": useRouteMatch(["/index-saas"]),

    // bg color
    "bg-primary": (location.pathname === "/index-data-driven" && active) || (location.pathname === "/index-bs-management" && active) || (location.pathname === "/index-bs-expense-tracker" && active),
    "bg-gray-400": useRouteMatch(["/index-saas"]),
    "bg-white": (location.pathname === "/index-bs-solution" && variant === "two") || (location.pathname === "/index-bs-digital" && variant === "two") || (location.pathname === "/index-bs-subscription" && variant === "two"),

    [`${className}`]: className,

  });

  const wrapBadgeClasses = classNames({
    "nl-pricing-badge-wrap": true,
    "bg-primary": true,
    "rounded-4": true,
    "p-5": true,
  });

  const badgeClasses = classNames({
    "fw-bold": true,
    "text-bg-yellow text-white": useRouteMatch(["/index-bs-digital"]),
    "text-bg-dark": useRouteMatch(["/index-saas", "/index-data-driven"]),
    "text-bg-white": useRouteMatch(["/index-bs-management", "/index-bs-expense-tracker"]),
    "text-bg-primary": useRouteMatch(["/index-bs-subscription", "/index-bs-solution", "/index-project-management"]),
  });


  const pricingbtnBgClasses = classNames({
    "btn-block": true,

    // regular state 
    "btn-outline-primary": !active,

    // active state 
    "btn-primary": (location.pathname === "/index-bs-digital" && active) || (location.pathname === "/index-saas" && active) || (location.pathname === "/index-bs-solution" && active) || (location.pathname === "/index-project-management" && active) || (location.pathname === "/index-bs-subscription" && active),

    "btn-dark": useRouteMatch(["/index-bs-management", "/index-bs-expense-tracker", "/index-data-driven"]) && active,

  });

  const pricingbtnOutlineClasses = classNames({
    "btn-block": true,
    "border": true,
    "btn-gray-400 text-dark": true,
  });

  const listTextClasses = classNames({
    "mb-0": true,
    "fs-7": true,
    "fw-medium": true,
    "text-white": ((location.pathname === "/index-bs-management" && active) || (location.pathname === "/index-bs-expense-tracker" && active)),

  })

  const listIconClasses = classNames({
    "me-1": true,
    "text-primary": useRouteMatch(["/index-bs-subscription", "/index-bs-digital", "/index-saas", "/index-bs-solution", "/index-project-management"]),
    "text-white": useRouteMatch(["/index-bs-expense-tracker"]) && active,
    "text-dark": !active,

  });

  const iconClasses = classNames({
    "text-primary": true,
  });

  return (
    <div className={compClasses} {...props}>
      {
        variant === "one" ?
          <>
            {
              active &&
              <div className={wrapBadgeClasses}>
                <NioBadge
                  rounded
                  label="Most Popular"
                  className={badgeClasses}
                />
              </div>
            }
            <NioPricingCard.Head variant={variant}>
              <div className="amount-wrap">
                <span className={`amount ${location.pathname === "/index-bs-management" || "/index-data-driven" ? "h3" : "h2"}  mb-0`}>
                  ${price || 0}
                </span>
                <span className="amount-text fs-7">
                  /{priceType || 'month'}
                </span>
              </div>
            </NioPricingCard.Head>
            <NioPricingCard.Body>
              <div className="mb-4">
                {
                  location.pathname === "/index-bs-management" || "/index-bs-expense-tracker" ?
                    <h5 >{title || 'Package Title'}</h5> :
                    <h4 >{title || 'Package Title'}</h4>
                }
                <p className="fs-7 m-0">
                  {subtitle || 'package subtitle content goes here '}
                </p>
              </div>
              <ul className="nl-list-link fw-medium">
                {
                  features ? features.map((feature, idx) => (
                    <li className={active || feature.active ? 'active' : 'muted'} key={idx}>
                      <NioIcon name="check-circle-fill" className={listIconClasses} />
                      <p className={listTextClasses}>{feature.title}</p>
                    </li>
                  )) :
                    <li className="active">
                      <NioIcon name="check-circle-fill" className={listIconClasses} />
                      <p className={listTextClasses}>Unlimited users</p>
                    </li>
                }
              </ul>
              <div className="pt-4">
                <NioButton className={pricingbtnBgClasses} label="Choose Plan" />
              </div>
            </NioPricingCard.Body>
          </> :
          variant === "two" ?
            <>
              <NioPricingCard.Head variant={variant}>
                <div className="nl-pricing-title-group mb-2">
                  <h5 className="mb-1">
                    {title || 'Package Title'}
                  </h5>
                  {
                    active &&
                    <NioBadge
                      rounded
                      label="Popular"
                      className={badgeClasses}
                    />
                  }
                </div>
                <div className="amount-wrap">
                  <span className="amount h1 mb-0">
                    <sub>$</sub>{price || '0'}</span>
                  <span className="amount-text fs-7">/per {priceType || 'monthly'}</span>
                </div>
                <p className="fs-7 fw-medium mt-2">{subtitle || 'Subtitle Content Goes Here'}</p>
              </NioPricingCard.Head>

              <NioPricingCard.Body>
                <ul className="gap g-3">
                  <li>
                    <NioButton
                      href="#"
                      label="Get Started"
                      className={pricingbtnBgClasses}
                    />
                  </li>
                  <li>
                    <NioButton
                      href="#"
                      label="Learn More"
                      className={pricingbtnOutlineClasses}
                    />
                  </li>
                </ul>
                <ul className="nl-list-link border-top border-lighter pt-4 mt-5">
                  {
                    features ? features.map((feature, idx) => (
                      <li className={active || feature.active ? 'active' : 'muted'} key={idx}>
                        <NioIcon name='check-circle-fill' className={listIconClasses} />
                        <p className={listTextClasses}>{feature.title}</p>
                      </li>
                    )) :
                      <li className="muted">
                        <NioIcon name='check-circle-fill' className={listIconClasses} />
                        <p className={listTextClasses}>Complete documentation</p>
                      </li>
                  }
                </ul>
              </NioPricingCard.Body>
            </> :
            variant === "three" ?
              <>
                <NioPricingCard.Head variant={variant}>
                  <div className="nl-pricing-title-group mb-2">
                    <h4 className="mb-0">{title || "package Title"}</h4>
                    {
                      active &&
                      <NioBadge
                        rounded
                        size='md'
                        icon='star-fill'
                        label='Popular'
                        className='text-bg-white text-uppercase text-primary'
                      />
                    }
                  </div>
                  <p className="text text-2">
                    {
                      description || "package description content goes here"
                    }
                  </p>
                </NioPricingCard.Head>
                <NioPricingCard.Body>
                  <ul className="nl-list-link">
                    {
                      features ? features.map((feature, idx) => (
                        <li className={active || feature.active ? 'active' : 'muted'} key={idx}>
                          <NioIcon name={active ? 'check-circle-fill' : 'check-circle'} className='me-1' />
                          <span>{feature.title}</span>
                        </li>
                      )) :
                        <li className="active">
                          <NioIcon name='check-circle' className='me-1' />
                          <span>Everything on Startup plan</span>
                        </li>
                    }

                  </ul>
                  <div className="nl-month-amount amount-wrap pt-4 mt-auto">
                    <span className="amount h3 mb-0">${price || 10}.00 USD</span>
                    <span className="amount-text opacity-75">/{priceType || 'month'}</span>
                  </div>
                  <div className="pt-4">
                    <NioButton
                      to='#'
                      as="link"
                      outline='primary'
                      label='Get Started'
                      className='btn-block'
                    />
                  </div>
                </NioPricingCard.Body>
              </> :
              variant === "four" ?
                <>
                  <div className="nl-pricing-head">
                    <div className="icon">
                      <img src={icon} alt="icon" />
                    </div>
                    <div className="info">
                      {
                        title &&
                        <div className='title'>{title || 'Package Title'}</div>
                      }
                      {
                        subtitle &&
                        <span className='subtitle'>{subtitle || 'Package Subtitle Content Goes Here'}</span>
                      }
                    </div>
                  </div>
                  <div className="nl-pricing-body">
                    <div className="price-tag">
                      ${price || 0} <span>/{priceType || 'user'}</span>
                    </div>
                    <ul className="nl-pricing-info">
                      {
                        features ? features.map((feature, idx) => (
                          <li key={idx}>
                            <p className={active || feature.active ? 'active' : 'mute'} >{feature.title}</p>
                          </li>
                        )) :
                          <li>
                            <p className="mute">120+ Message all Operator</p>
                          </li>
                      }

                    </ul>
                    <div className="card-pricing-action">
                      <button
                        to="#"
                        className={`btn w-100 ${active ? 'btn-primary' : 'btn-outline-primary'} `}
                      >
                        <span>Choose Plan</span>
                        <NioIcon name='arrow-right' />
                      </button>
                    </div>
                  </div>
                </> :
                variant === "five" ?
                  <>
                    <NioPricingCard.Head variant={variant}>
                      <div className="nl-pricing-title-group mb-2">
                        <div className="d-flex align-items-center">
                          <NioIcon name={icon} className={iconClasses} />
                          <h3 className="mb-0">{title || 'Package Title'}</h3>
                        </div>
                        {
                          active &&
                          <NioBadge
                            rounded
                            label="Popular"
                            className={badgeClasses}
                          />
                        }
                      </div>
                      <p className="fs-6 text-capitalize">
                        {subtitle}
                      </p>
                    </NioPricingCard.Head>
                    <NioPricingCard.Body>
                      <div className="amount-wrap mb-2">
                        <span className="amount h2 mb-0">${price}</span>
                        <span className="amount-text">/{priceType}</span>
                      </div>
                      <p className="fs-7 text-dark">
                        {description}
                      </p>
                      <ul className="nl-list-link">
                        {
                          features ? features.map((feature, idx) => (
                            <li className={active || feature.active ? 'active' : 'muted'} key={idx}>
                              <NioIcon name="check-circle-fill" className={listIconClasses} />
                              <p className={listTextClasses}>{feature.title}</p>
                            </li>
                          )) :
                            <li className="active">
                              <NioIcon name='check-circle-fill' className={listIconClasses} />
                              <p className={listTextClasses}>Everything in Free Plan</p>
                            </li>}
                      </ul>
                      <div className="pt-4">
                        <NioButton
                          href="/contact-us"
                          label={props.buttonlabel || "Get Started"}
                          className={pricingbtnBgClasses}
                        />
                      </div>

                    </NioPricingCard.Body>
                  </> :
                  <>
                    {children}
                  </>
      }
    </div>
  )
};


export function NioPricingHead({ variant, className, children }) {

  const location = useLocation();

  const compClasses = classNames({
    [`nl-pricing-head`]: true, [`
    ${variant === "one" ?
        `${location.pathname === "/index-bs-expense-tracker" || "/index-bs-management" ? "mb-3" : "mb-1"}` :
        variant === "two" ?
          'pb-5' :
          variant === "three" ?
            'mb-3 mb-md-4' :
            variant === "four" ?
              '' :
              variant === 'five' ?
                'mb-4' : null
      }
    `]: variant,
    [`${className}`]: className
  });

  return (
    <div className={compClasses}>
      {children}
    </div>
  )
}

export function NioPricingBody({ className, children }) {

  const compClasses = classNames({
    [`nl-pricing-body`]: true,
    [`${className}`]: className
  });

  return (
    <div className={compClasses}>
      {children}
    </div>
  )
}

NioPricingCard.Head = NioPricingHead;
NioPricingCard.Body = NioPricingBody;