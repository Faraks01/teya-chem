import "react-toastify/dist/ReactToastify.css";
import "./generalStyles.css";
import { Box, Stack } from "@mui/system";
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
    <Stack bgcolor="inherit" alignItems="stretch">
      <Stack
        bgcolor="inherit"
        pr={{ xs: "10px", md: 0 }}
        pl={{ xs: "10px", md: 0 }}
        pb="10px"
        alignItems="center"
        position="relative"
        sx={{
          "& > *": {
            backgroundColor: "inherit",
          },
        }}
      >
        <Box
          zIndex={10}
          width="100%"
          sx={{
            outline: "1px solid #B8B8B8",
          }}
        >
          <NavigationBar />
        </Box>

        <Stack
          zIndex={5}
          width="fit-content"
          alignItems="center"
          borderRadius="0 0 24px 24px"
          overflow="hidden"
          sx={{
            boxShadow: {
              xs: "none",
              md: "0px 0px 10px 4px rgba(34, 60, 80, 0.2)",
            },
          }}
        >
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
        </Stack>
      </Stack>

      {/* Dialogs */}
      <DialogMenu />
      <PriceCalculator />

      {/* Toasts Notifications */}
      <ToastContainer />
    </Stack>
  );
}

export default App;
