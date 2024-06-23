import React, { useRef, useState } from "react";
import { Box } from "@mui/system";
import { SlideSwitcher, FirstSlide, SecondSlide } from "./components";
import { useSlideOrder } from "./hooks";

const slides = [<FirstSlide />, <SecondSlide />];

const SLIDE_SWITCHING_DELAY = 4000;

const HeaderSlider = () => {
  const sliderBoxRef = useRef(null);

  const [slideSwitchingDelay, setSlideSwitchingDelay] = useState(
    SLIDE_SWITCHING_DELAY,
  );

  const { activeSlideIndex, setActiveSlideIndex } = useSlideOrder({
    slidesLength: slides.length,
    slideSwitchingDelay,
  });

  const disableAutoSlideSwitching = () => {
    setSlideSwitchingDelay(undefined);
  };

  const enableAutoSlideSwitching = () => {
    setSlideSwitchingDelay(SLIDE_SWITCHING_DELAY);
  };

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
        ref={sliderBoxRef}
        className="use-slider-mask-clip"
        display="flex"
        position="relative"
        maxWidth="1233px"
        height={{ xs: "426.5055px", md: "396px" }}
        width={{ xs: "300.000086px", md: "100%" }}
        overflow="hidden"
        onMouseEnter={disableAutoSlideSwitching}
        onMouseLeave={enableAutoSlideSwitching}
      >
        {/* Slides */}
        {slides[activeSlideIndex]}

        {/* Actions */}
        <Box
          position="absolute"
          bottom={{
            xs: "15.5px",
            md: "35px",
          }}
          right={{
            xs: "unset",
            md: "35px",
          }}
          left={{
            xs: "13px",
            md: "unset",
          }}
          zIndex={10}
        >
          <SlideSwitcher
            activeSlide={activeSlideIndex}
            slidesLength={slides.length}
            setActiveSlide={setActiveSlideIndex}
            reversedSwitch={activeSlideIndex === slides.length - 1}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default HeaderSlider;
