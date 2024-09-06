import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// context 
import DataProvider from './context/DataProvider/DataProvider';

// components 
import NioScrollToTop from './components/NioScrollToTop/NioScrollToTop';

// landing page 
import Landing from './pages/landing';

// Homepages 
import HomeAnalytics from './pages/home-pages/analytics';
import HomeKidsCourse from './pages/home-pages/kids-course';
import HomeCollaborationTool from './pages/home-pages/collaboration-tool';
import HomeBusinessTracker from './pages/home-pages/business-tracker';
import HomeChatApp from './pages/home-pages/chat-app';
import HomeBusinessSolution from './pages/home-pages/business-solution';
import HomeBusinessExpense from './pages/home-pages/business-expense';
import HomeBusinessDigital from './pages/home-pages/business-digital';
import HomeCryptoProfile from './pages/home-pages/crypto-profile';
import HomeBusinessManagement from './pages/home-pages/business-management';
import HomeBusinessSubscription from './pages/home-pages/business-subscription';
import HomeDataDriven from './pages/home-pages/data-driven';
import HomeLanguageLearning from './pages/home-pages/language-learning';
import HomeProjectManagement from './pages/home-pages/project-management';
import HomeCoachingService from './pages/home-pages/coaching-service';
import HomeProjectManage from './pages/home-pages/project-manage';
import HomeBusinessAnalytics from './pages/home-pages/business-analytics';
import HomeCodebase from './pages/home-pages/codebase';
import HomeHelpDesk from './pages/home-pages/help-desk';
import HomeBusinessConsulting from './pages/home-pages/business-consulting';
import HomeFintech from './pages/home-pages/fintech';
import HomeGreenTech from './pages/home-pages/greentech';
import HomePodcastApp from './pages/home-pages/podcast-app';

// inner pages 
import InnerAbout from './pages/inner-pages/about';
import InnerAboutSolution from './pages/inner-pages/about-solution';
import InnerFeature from './pages/inner-pages/features';
import InnerFeaturesSolution from './pages/inner-pages/features-solution';
import InnerCustomerTestimonial from './pages/inner-pages/customer-testimonial';
import InnerContact from './pages/inner-pages/contact';
import InnerContactSolution from './pages/inner-pages/contact-solution';
import InnerPricing from './pages/inner-pages/pricing';
import InnerPricingSolution from './pages/inner-pages/pricing-solution';
import InnerBlogs from './pages/inner-pages/blogs';
import InnerBlogDetails from './pages/inner-pages/blog-details';
import InnerHelpCenter from './pages/inner-pages/help-center';
import InnerHelpCenterDetails from './pages/inner-pages/help-center-details';
import InnerCareer from './pages/inner-pages/career';
import InnerCareerDetails from './pages/inner-pages/career-details';
import InnerTerms from './pages/inner-pages/terms';
import InnerCareerTwo from './pages/inner-pages/career-project-manage';
import InnerCareerDetailsTwo from './pages/inner-pages/career-details-project-manage';
import InnerShop from './pages/inner-pages/shop';
import InnerProductDetails from './pages/inner-pages/product-details';

// miscellaneous pages
import MiscNotFound from './pages/404';
import MiscLogin from './pages/auth/login';
import MiscSignup from './pages/auth/sign-up';
import MiscResetPassword from './pages/auth/reset-password';
import MiscForgotPassword from './pages/auth/forgot-password';


function AppRoutes() {

  return (
    <Routes>

      {/* landing page */}
      <Route path="/" element={<Landing />} />

      {/* Homepages */}
      <Route path="/index-analytics" element={<HomeAnalytics />} />
      <Route path="/index-kids-course" element={<HomeKidsCourse />} />
      <Route path="/index-collaboration-tool" element={<HomeCollaborationTool />} />
      <Route path="/index-bs-expense-tracker" element={<HomeBusinessTracker />} />
      <Route path="/index-live-chat-app" element={<HomeChatApp />} />
      <Route path="/index-bs-solution" element={<HomeBusinessSolution />} />
      <Route path="/index-saas" element={<HomeBusinessExpense />} />
      <Route path="/index-bs-digital" element={<HomeBusinessDigital />} />
      <Route path="/index-crypto-profile" element={<HomeCryptoProfile />} />
      <Route path="/index-bs-management" element={<HomeBusinessManagement />} />
      <Route path="/index-bs-subscription" element={<HomeBusinessSubscription />} />
      <Route path="/index-data-driven" element={<HomeDataDriven />} />
      <Route path="/index-language-learning" element={<HomeLanguageLearning />} />
      <Route path="/index-project-management" element={<HomeProjectManagement />} />
      <Route path="/index-coaching-service" element={<HomeCoachingService />} />
      <Route path="/index-project-manage" element={<HomeProjectManage />} />
      <Route path="/index-bs-analytics" element={<HomeBusinessAnalytics />} />
      <Route path="/index-codebase" element={<HomeCodebase />} />
      <Route path="/index-help-desk" element={<HomeHelpDesk />} />
      <Route path="/index-bs-consulting" element={<HomeBusinessConsulting />} />
      <Route path="/index-fintech" element={<HomeFintech />} />
      <Route path="/index-green-tech" element={<HomeGreenTech />} />
      <Route path="/index-podcast-app" element={<HomePodcastApp />} />

      {/* inner page  */}
      <Route path='/about' element={<InnerAbout />} />
      <Route path='/about-solution' element={<InnerAboutSolution />} />
      <Route path='/features' element={<InnerFeature />} />
      <Route path='/features-solution' element={<InnerFeaturesSolution />} />
      <Route path='/customer-testimonials' element={<InnerCustomerTestimonial />} />
      <Route path='/contact-us' element={<InnerContact />} />
      <Route path='/contact-us-solution' element={<InnerContactSolution />} />
      <Route path='/pricing' element={<InnerPricing />} />
      <Route path='/pricing-solution' element={<InnerPricingSolution />} />
      <Route path='/blogs' element={<InnerBlogs />} />
      <Route path='/blog-details' element={<InnerBlogDetails />} />
      <Route path='/help-center' element={<InnerHelpCenter />} />
      <Route path='/help-center-details' element={<InnerHelpCenterDetails />} />
      <Route path='/careers' element={<InnerCareer />} />
      <Route path='/career-details' element={<InnerCareerDetails />} />
      <Route path='/terms-and-conditions' element={<InnerTerms />} />
      <Route path='/careers-two' element={<InnerCareerTwo />} />
      <Route path='/careers-two-details' element={<InnerCareerDetailsTwo />} />
      <Route path='/shop' element={<InnerShop />} />
      <Route path='/product-details' element={<InnerProductDetails />} />

      {/* miscellaneous pages */}
      <Route path="*" element={<MiscNotFound />} />
      <Route path="/404" element={<MiscNotFound />} />
      <Route path='/auth/login' element={<MiscLogin />} />
      <Route path='/auth/sign-up' element={<MiscSignup />} />
      <Route path='/auth/reset-password' element={<MiscResetPassword />} />
      <Route path='/auth/forgot-password' element={<MiscForgotPassword />} />

    </Routes>
  );
}


function App() {

  useEffect(() => {
    document.body.classList.add('nl-body');
  }, []);

  return (
    <DataProvider>
      <BrowserRouter>
        <NioScrollToTop />
        <AppRoutes />
      </BrowserRouter>
    </DataProvider>
  );
}



export default App;
