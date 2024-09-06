import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import classNames from 'classnames';

// data
import { useData } from '../../context/DataProvider/DataProvider';

// components 
import { Link } from 'react-router-dom';
import NioIcon from '../NioIcon/NioIcon';

export default function NioFilterTab() {


  const data  = useData();

  const filterItems = data.landingpage.demo.contents;


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
          category="business-page-item"
          icon="briefcase"
          title="Business"
          isActive={isCategoryActive("business-page-item")}
          onClick={handleFilter}
        />
        <FilterTabItem
          category="tech-page-item"
          icon="cpu"
          title="Tech"
          isActive={isCategoryActive("tech-page-item")}
          onClick={handleFilter}
        />
        <FilterTabItem
          category="app-page-item"
          icon="mobile"
          title="App"
          isActive={isCategoryActive("app-page-item")}
          onClick={handleFilter}
        />
        <FilterTabItem
          category="saas-page-item"
          icon="cloud"
          title="SAAS"
          isActive={isCategoryActive("saas-page-item")}
          onClick={handleFilter}
        />
      </motion.ul>
      <motion.div className="nl-filter-container row gy-5 gy-lg-7" ref={filterContainerRef} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        {filterItems.map((item, idx) => (
          <motion.div
            key={idx}
            className="nl-filter-item col-sm-6  col-lg-4"
            data-category={item.category}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * idx }}
          >
              <Link to={item?.url}>
                <div className="overflow-hidden rounded-bottom-0 rounded-3 mb-3">
                  <img src={`images/landing/${item?.src}`} alt={item?.title} />
                </div>
                <h5 className="text-capitalize text-center">{item?.title || "Title Goes Here"}</h5>
              </Link>
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
