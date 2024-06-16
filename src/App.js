import "react-toastify/dist/ReactToastify.css";
import "./generalStyles.css";
import { Box } from "@mui/system";
import { ToastContainer } from "react-toastify";
import {
  NavigationBar,
  HeaderSlider,
  MarketplacesNavigation,
  AboutUs,
  ProductEffectExplanation,
  ProductUsageInstruction,
  ProductDocumentationAndCertification,
  ProductTesting,
  BuyOnThisSite,
  Feedbacks,
  FeedbackForm,
  Footer,
} from "@/sections";
import { PriceCalculator, DialogMenu } from "@/components";

function App() {
  return (
    <Box pr={{ xs: "10px", md: 0 }} pl={{ xs: "10px", md: 0 }}>
      <NavigationBar />
      <HeaderSlider />
      <MarketplacesNavigation />
      <AboutUs />
      <ProductEffectExplanation />
      <ProductUsageInstruction />
      <ProductDocumentationAndCertification />
      <ProductTesting />
      <BuyOnThisSite />
      <Feedbacks />
      <FeedbackForm />
      <Footer />

      {/* Dialogs */}
      <DialogMenu />
      <PriceCalculator />

      {/* Toasts Notifications */}
      <ToastContainer />
    </Box>
  );
}

export default App;
