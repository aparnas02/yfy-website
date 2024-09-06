import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import classNames from 'classnames';
import { Col, Row } from 'react-bootstrap';

// data
import { useData } from '../../../../../context/DataProvider/DataProvider';

// components 
import NioIcon from '../../../../NioIcon/NioIcon';
import NioCard from '../../../../Cards/NioCard/NioCard';
import NioButton from '../../../../NioButton/NioButton';

export default function NioFilterTab() {
  const data = useData();
  const filterItems = data.innerpage.careermanage.posts.contents;

  const filterContainerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const isCategoryActive = (category) => {
    return activeCategory === category;
  }

  const handleFilter = (category) => {
    setActiveCategory(category);
  }

  useEffect(() => {

    if (filterContainerRef.current) {
      const children = filterContainerRef.current.childNodes;
      children.forEach(child => {
        if (child.nodeType === 1) { // Check if it's an element node
          const category = child.getAttribute("data-category");
          if (activeCategory === "all" || category === activeCategory) {
            child.style.display = "block";
          } else {
            child.style.display = "none";
          }
        }
      });
    }
  }, [activeCategory, filterItems]);

  return (
    <div className="nl-filter">
      <motion.ul className="nl-filter-menu mb-5 mb-lg-7">
        <FilterTabItem
          category="all"
          icon="menu-squared"
          title="All"
          isActive={isCategoryActive("all")}
          onClick={handleFilter}
        />
        <FilterTabItem
          category="development-item"
          icon="code"
          title="Development"
          isActive={isCategoryActive("development-item")}
          onClick={handleFilter}
        />
        <FilterTabItem
          category="design-item"
          icon="crop"
          title="Design"
          isActive={isCategoryActive("design-item")}
          onClick={handleFilter}
        />
        <FilterTabItem
          category="marketing-item"
          icon="tag"
          title="Marketing"
          isActive={isCategoryActive("marketing-item")}
          onClick={handleFilter}
        />
        <FilterTabItem
          category="engineering-item"
          icon="bugs"
          title="Engineering"
          isActive={isCategoryActive("engineering-item")}
          onClick={handleFilter}
        />
      </motion.ul>
      <motion.div className="nl-filter-container row gy-5" ref={filterContainerRef} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        {filterItems.map((item, idx) => (
          <motion.div
            key={idx}
            className="nl-filter-item col-lg-6"
            data-category={item.category}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * idx }}
          >
            <NioCard className="border-0 h-100">
              <NioCard.Body>
                <div className="pb-5 mb-5 border-bottom">
                  <Row className="align-items-center justify-content-lg-between gap-0">
                    <Col xl="8">
                      <div className="mb-3 mb-xl-0">
                        <h5 className="mb-2 text-capitalize">{item.title}</h5>
                        <div className="d-flex gap-2 align-items-center text-primary mb-2">
                          <p className="d-flex align-items-center gap-1 mb-0">
                            <em className="icon ni ni-map-pin-fill"></em>
                            <span className="fs-8 fw-semibold text-uppercase text-nowrap ">san francisco</span>
                          </p>
                          -
                          <p className="d-flex align-items-center gap-1 mb-0">
                            <em className="icon ni ni-clock-fill"></em>
                            <span className="fs-8 fw-semibold text-uppercase text-nowrap ">Full Time</span>
                          </p>
                        </div>
                      </div>
                    </Col>
                    <Col xl="4" className="text-md-end">
                      <NioButton
                        label="Apply Now"
                        href="/career-details"
                        className="btn btn-outline-dark text-nowrap border w-100 mt-4 mt-lg-0"
                      />
                    </Col>
                  </Row>
                </div>
                <p className="fs-7  line-clamp-2">
                  {item.description}
                </p>
              </NioCard.Body>
            </NioCard>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

const FilterTabItem = ({ category, icon, title, isActive, onClick }) => {
  return (
    <li>
      <motion.button
        className={classNames("nl-filter-control", { "active": isActive })}
        onClick={() => onClick(category)}
      >
        <NioIcon name={icon} />
        <span>{title}</span>
      </motion.button>
    </li>
  );
};
