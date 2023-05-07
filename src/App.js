import "./generalStyles.css";
import NavigationBar from "./sections/NavigationBar";
import HeaderSlider from "./sections/HeaderSlider";
import MarketplacesNavigation from "./sections/MarketplacesNavigation";
import AboutUs from "./sections/AboutUs";

function App() {
  return (
    <div>
      <NavigationBar/>
      <HeaderSlider/>
      <MarketplacesNavigation/>
      <AboutUs/>
    </div>
  );
}

export default App;
