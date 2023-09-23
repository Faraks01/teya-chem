import React from "react";
import { Box } from "@mui/system";
import FirstSlide from "./components/FirstSlide";
import SecondSlide from "./components/SecondSlide";

const slides = [<FirstSlide />, <SecondSlide />];

const HeaderSlider = () => {
  const [activeSlideIndex, setActiveSlideIndex] = React.useState(0);

  return (
    <Box
      component="section"
      display="flex"
      justifyContent="center"
      width="100%"
      pt={{ xs: 0, md: "33px" }}
      pb={{ xs: "85px", md: "122px" }}
    >
      <Box
        className="use-slider-mask-clip"
        display="flex"
        position="relative"
        maxWidth="1233px"
        height={{ xs: "426.5055px", md: "396px" }}
        width={{ xs: "300.000086px", md: "100%" }}
        overflow="hidden"
      >
        {/* Slides */}
        {slides[activeSlideIndex]}

        {/* Actions */}
        <Box
          position="absolute"
          bottom={{
            xs: "15.5px",
            md: activeSlideIndex === 0 ? "35px" : "26px",
          }}
          right={{
            xs: "unset",
            md: activeSlideIndex === 0 ? "35px" : "25px",
          }}
          left={{
            xs: "13px",
            md: "unset",
          }}
          display="flex"
          zIndex={10}
          flexDirection="column"
        >
          {activeSlideIndex === 0 && (
            <Box
              component="button"
              width={{ xs: "77.63px", md: "107px" }}
              height={{ xs: "33.37px", md: "46px" }}
              borderRadius={{ xs: "72.55px", md: "100px" }}
              backgroundColor="colors.white"
              display="flex"
              justifyContent="center"
              alignItems="center"
              onClick={() => setActiveSlideIndex(1)}
            >
              <Box display={{ xs: "none", md: "block" }}>
                <svg
                  width="25"
                  height="18"
                  viewBox="0 0 25 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.8088 10.8449H0.000244141V7.15513H17.8088L13.1799 2.60902L15.8364 0L25.0002 8.99999L15.8364 18L13.1799 15.391L17.8088 10.8449Z"
                    fill="#1E1E1E"
                  />
                </svg>
              </Box>

              <Box mt="3px" display={{ xs: "block", md: "none" }}>
                <svg
                  width="19"
                  height="14"
                  viewBox="0 0 19 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.0156 8.38143L14.8879 7.5247H13.6652H1.2453V5.84784H13.6652H14.8879L14.0156 4.99112L11.0206 2.04968L12.2343 0.857676L18.169 6.68627L12.2343 12.5149L11.0206 11.3229L14.0156 8.38143Z"
                    fill="#1E1E1E"
                    stroke="black"
                  />
                </svg>
              </Box>
            </Box>
          )}

          <Box
            mt={activeSlideIndex === 0 ? "10px" : 0}
            display="flex"
            alignItems="center"
            flexDirection={activeSlideIndex === 1 ? "row-reverse" : "row"}
          >
            {activeSlideIndex === 1 && (
              <Box
                mr={{ xs: 0, md: "41px" }}
                ml={{ xs: "10px", md: 0 }}
                width={{ xs: "32px", md: "55px" }}
              >
                <Box
                  component="span"
                  fontFamily="RoadRadio"
                  fontWeight={400}
                  fontSize={{ xs: "15.96px", md: "45px" }}
                  lineHeight={{ xs: "normal", md: "45px" }}
                  color="colors.white"
                >
                  {activeSlideIndex + 1}/{slides.length}
                </Box>
              </Box>
            )}

            <Box
              width={{ xs: "77.63px", md: "107px" }}
              height={{ xs: "33.37px", md: "46px" }}
              borderRadius={{ xs: "72.55px", md: "100px" }}
              backgroundColor="colors.white"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              {slides.map((_, index) => (
                <Box
                  key={"slide__" + index}
                  ml={{
                    xs: !!index ? "10.88px" : 0,
                    md: !!index ? "15px" : 0,
                  }}
                  component="button"
                  width={{ xs: "26.12px", md: "36px" }}
                  height={{ xs: "26.12px", md: "36px" }}
                  borderRadius="18px"
                  backgroundColor={
                    activeSlideIndex === index
                      ? "colors.nero"
                      : "colors.lightGray"
                  }
                  onClick={() =>
                    index !== activeSlideIndex && setActiveSlideIndex(index)
                  }
                />
              ))}
            </Box>

            {activeSlideIndex === 0 && (
              <Box ml="10px" width="32px">
                <Box
                  component="span"
                  fontWeight={{ xs: 400, md: 500 }}
                  fontSize={{ xs: "15.96px", md: "22px" }}
                  lineHeight={{ xs: "normal", md: "27px" }}
                  color="colors.white"
                >
                  {activeSlideIndex + 1}/{slides.length}
                </Box>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeaderSlider;
