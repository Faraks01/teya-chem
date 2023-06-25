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
    </div>
  );
}

export default App;
