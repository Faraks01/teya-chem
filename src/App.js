import "./generalStyles.css";
import NavigationBar from "./sections/NavigationBar";
import HeaderSlider from "./sections/HeaderSlider";
import MarketplacesNavigation from "./sections/MarketplacesNavigation";
import AboutUs from "./sections/AboutUs";
import ProductEffectExplanation from "./sections/ProductEffectExplanation";

function App() {
  return (
    <div>
      <NavigationBar/>
      <HeaderSlider/>
      <MarketplacesNavigation/>
      <AboutUs/>
      <ProductEffectExplanation/>
    </div>
  );
}

export default App;
