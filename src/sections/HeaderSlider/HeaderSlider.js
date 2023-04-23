import React from "react";
import {Box} from "@mui/system";
import FirstSlide from "./components/FirstSlide";
import SecondSlide from "./components/SecondSlide";

const slides = [
  <FirstSlide/>,
  <SecondSlide/>
];

const HeaderSlider = () => {
  const [activeSlideIndex, setActiveSlideIndex] = React.useState(0);

  return (
    <Box
      display="flex"
      justifyContent="center"
      width="100%"
      pt="33px"
      pb="122px"
    >
      <Box
        className="use-slider-mask-clip"
        display="flex"
        position="relative"
        width="100%"
        maxWidth="1233px"
        height="396px"
        overflow="hidden">

        {/* Slides */}
        {slides[activeSlideIndex]}

        {/* Actions */}
        <Box
          position="absolute"
          bottom={activeSlideIndex === 0 ? "35px" : "26px"}
          right={activeSlideIndex === 0 ? "35px" : "25px"}
          display="flex"
          zIndex={10}
          flexDirection="column"
        >
          {activeSlideIndex === 0 && (
            <Box
              component="button"
              width="107px"
              height="46px"
              borderRadius="100px"
              backgroundColor="colors.white"
              display="flex"
              justifyContent="center"
              alignItems="center"
              onClick={() => setActiveSlideIndex(1)}
            >
              <svg width="25" height="18" viewBox="0 0 25 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M17.8088 10.8449H0.000244141V7.15513H17.8088L13.1799 2.60902L15.8364 0L25.0002 8.99999L15.8364 18L13.1799 15.391L17.8088 10.8449Z"
                  fill="#1E1E1E"/>
              </svg>
            </Box>
          )}

          <Box
            mt={activeSlideIndex === 0 ? "10px" : 0}
            display="flex"
            alignItems="center"
          >
            {activeSlideIndex === 1 && (
              <Box mr="41px" width="55px">
                <Box
                  component="span"
                  fontFamily='RoadRadio'
                  fontWeight={400}
                  fontSize="45px"
                  lineHeight="45px"
                  color="colors.white"
                >
                  {activeSlideIndex + 1}/{slides.length}
                </Box>
              </Box>
            )}

            <Box
              width="107px"
              height="46px"
              borderRadius="100px"
              backgroundColor="colors.white"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              {slides.map((_, index) => (
                <Box
                  key={"slide__" + index}
                  ml={!!index ? "15px" : 0}
                  component="button"
                  width="36px"
                  height="36px"
                  borderRadius="18px"
                  backgroundColor={activeSlideIndex === index ? "colors.nero" : "colors.lightGray"}
                  onClick={() => index !== activeSlideIndex && setActiveSlideIndex(index)}
                />
              ))}
            </Box>

            {activeSlideIndex === 0 && (
              <Box ml="10px" width="32px">
                <Box
                  component="span"
                  fontWeight={500}
                  fontSize="22px"
                  lineHeight="27px"
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
  )
}

export default HeaderSlider
