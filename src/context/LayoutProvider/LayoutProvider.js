import React, { useState, createContext, useContext, useEffect } from "react";

const layoutConfig = {
  headerActive: false,
  headerVariant: "dark",
  headerCollapse: "lg",
  headerFixed: false,
  sideBarActive: false,
  breaks: {
    mb: 420,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1540,
    any: Infinity,
  },
  headerLogos: {
    // landing
    "/": "s1.dark",

    // homepage
    "/index-analytics": "s1.dark",
    "/index-data-driven": "s1.dark",
    "/index-bs-consulting": "s1.light",
    "/index-project-manage": "s1.dark",
    "/index-project-management": "s2.dark",
    "/index-podcast-app": "s2.dark",
    "/index-fintech": "s2.light",
    "/index-codebase": "s2.dark",
    "/index-help-desk": "s2.dark",
    "/index-kids-course": "s2.dark",
    "/index-bs-analytics": "s2.dark",
    "/index-collaboration-tool": "s2.dark",
    "/index-bs-expense-tracker": "s2.dark",
    "/index-saas": "s2.light",
    "/index-bs-solution": "s2.light",
    "/index-bs-management": "s2.light",
    "/index-crypto-profile": "s2.light",
    "/index-bs-subscription": "s2.light",
    "/index-coaching-service": "s2.light",
    "/index-bs-digital": "s3.dark",
    "/index-live-chat-app": "s3.dark",
    "/index-green-tech": "s3.light",
    "/index-language-learning": "s3.light",

    // inner page
    "/404": "s1.dark",
    "/about": "s1.dark",
    "/blogs": "s1.dark",
    "/pricing": "s1.dark",
    "/careers": "s1.dark",
    "/features": "s1.dark",
    "/contact-us": "s1.dark",
    "/help-center": "s1.dark",
    "/blog-details": "s1.dark",
    "/career-details": "s1.dark",
    "/help-center-details": "s1.dark",
    "/terms-and-conditions": "s1.dark",
    "/customer-testimonials": "s1.dark",
    "/about-solution": "s2.light",
    "/pricing-solution": "s2.light",
    "/features-solution": "s2.light",
    "/contact-us-solution": "s2.light",
  },
  footerLogos: {
    // landing
    "/": "s1.light",

    // homepage
    "/index-analytics": "s1.dark",
    "/index-data-driven": "s1.dark",
    "/index-bs-consulting": "s1.light",
    "/index-project-manage": "s1.dark",
    "/index-project-management": "s2.dark",
    "/index-podcast-app": "s2.dark",
    "/index-fintech": "s2.light",
    "/index-codebase": "s2.dark",
    "/index-help-desk": "s2.dark",
    "/index-kids-course": "s2.dark",
    "/index-bs-analytics": "s2.light",
    "/index-collaboration-tool": "s2.dark",
    "/index-bs-expense-tracker": "s2.dark",
    "/index-saas": "s2.dark",
    "/index-bs-solution": "s2.dark",
    "/index-bs-management": "s2.dark",
    "/index-crypto-profile": "s2.light",
    "/index-bs-subscription": "s2.dark",
    "/index-coaching-service": "s2.light",
    "/index-bs-digital": "s3.dark",
    "/index-live-chat-app": "s3.dark",
    "/index-green-tech": "s3.dark",
    "/index-language-learning": "s3.dark",

    // inner page
    "/404": "s1.dark",
    "/about": "s1.dark",
    "/blogs": "s1.dark",
    "/pricing": "s1.dark",
    "/careers": "s1.dark",
    "/features": "s1.dark",
    "/contact-us": "s1.dark",
    "/help-center": "s1.dark",
    "/blog-details": "s1.dark",
    "/career-details": "s1.dark",
    "/help-center-details": "s1.dark",
    "/terms-and-conditions": "s1.dark",
    "/customer-testimonials": "s1.dark",
    "/about-solution": "s2.dark",
    "/pricing-solution": "s2.dark",
    "/features-solution": "s2.dark",
    "/contact-us-solution": "s2.dark",
  },
};

// create context
const LayoutContext = createContext();
const LayoutUpdateContext = createContext();

export function useLayout() {
  return useContext(LayoutContext);
}

export function useLayoutUpdate() {
  return useContext(LayoutUpdateContext);
}

export default function LayoutProvider({ children }) {
  const storedRTL = localStorage.getItem("isRTL");
  const [layout, setLayout] = useState({
    ...layoutConfig,
    isRTL: storedRTL ? JSON.parse(storedRTL) : false,
  });

  const updateLayout = {
    headerMobile: function () {
      const newLayout = {
        ...layout,
        headerActive: !layout.headerActive,
        headerFixed: !layout.headerFixed,
      };
      setLayout(newLayout);
    },

    sideBarAction: function () {
      const newLayout = {
        ...layout,
        sideBarActive: !layout.sideBarActive,
      };
      setLayout(newLayout);
    },

    toggleRTL: function () {
      // Function to toggle RTL
      const newRTL = !layout.isRTL;
      setLayout({ ...layout, isRTL: newRTL });
      localStorage.setItem("isRTL", JSON.stringify(newRTL)); // Store RTL value in local storage
    },
  };

  useEffect(() => {
    // Update HTML attribute 'dir' based on RTL state
    document.documentElement.setAttribute("dir", layout.isRTL ? "rtl" : "ltr");
  }, [layout.isRTL]);

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      const width = entries[0].contentRect.width;
      const headerBreak = layout.breaks[layout.headerCollapse];

      if (width > headerBreak && layout.sideBarActive) {
        const newLayout = { ...layout, sideBarActive: false };
        setLayout(newLayout);
      }
    });

    observer.observe(document.body);

    return () => {
      observer.disconnect();
    };
  }, [layout]);

  return (
    <LayoutContext.Provider value={layout}>
      <LayoutUpdateContext.Provider value={updateLayout}>
        {children}
      </LayoutUpdateContext.Provider>
    </LayoutContext.Provider>
  );
}
