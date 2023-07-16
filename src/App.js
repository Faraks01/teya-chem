import "./generalStyles.css";
import NavigationBar from "./sections/NavigationBar";
import HeaderSlider from "./sections/HeaderSlider";
import MarketplacesNavigation from "./sections/MarketplacesNavigation";
import AboutUs from "./sections/AboutUs";
import ProductEffectExplanation from "./sections/ProductEffectExplanation";
import ProductUsageInstruction from "./sections/ProductUsageInstruction";
import ProductDocumentationAndCertification from "./sections/ProductDocumentationAndCertification";
import ProductTesting from "./sections/ProductTesting";
import BuyOnThisSite from "./sections/BuyOnThisSite";
import Feedbacks from "./sections/Feedbacks";
import FeedbackForm from "./sections/FeedbackForm";
import Footer from "./sections/Footer";
import PriceCalculator from "./components/PriceCalculator";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <NavigationBar/>
      <HeaderSlider/>
      <MarketplacesNavigation/>
      <AboutUs/>
      <ProductEffectExplanation/>
      <ProductUsageInstruction/>
      <ProductDocumentationAndCertification/>
      <ProductTesting/>
      <BuyOnThisSite/>
      <Feedbacks/>
      <FeedbackForm/>
      <Footer/>

      {/* Dialogs */}
      <PriceCalculator/>

      {/* Toasts Notifications */}
      <ToastContainer/>
    </div>
  );
}

export default App;
