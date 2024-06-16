import React, { useMemo } from "react";
import { Box, Stack } from "@mui/system";

const SlideSwitcher = ({
  activeSlide = 0,
  slidesLength = 1,
  reversedSwitch = false,
  setActiveSlide,
}) => {
  const slidesIndexTuple = useMemo(
    () => Array.from(Array(slidesLength).keys()),
    [slidesLength],
  );

  const setNextSlide = () => {
    setActiveSlide(reversedSwitch ? activeSlide - 1 : activeSlide + 1);
  };

  return (
    <Stack>
      <_NavigationButton
        onClick={setNextSlide}
        reversedArrow={reversedSwitch}
      />

      <Box mt="10px" display="flex" alignItems="center">
        <Box
          width={{ xs: "77.63px", md: "107px" }}
          height={{ xs: "33.37px", md: "46px" }}
          borderRadius={{ xs: "72.55px", md: "100px" }}
          backgroundColor="colors.white"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          {slidesIndexTuple.map((n) => (
            <Box
              key={"slide__" + n}
              ml={{
                xs: !!n ? "10.88px" : 0,
                md: !!n ? "15px" : 0,
              }}
              component="button"
              width={{ xs: "26.12px", md: "36px" }}
              height={{ xs: "26.12px", md: "36px" }}
              borderRadius="18px"
              backgroundColor={
                activeSlide === n ? "colors.nero" : "colors.lightGray"
              }
              onClick={() => n !== activeSlide && setActiveSlide(n)}
            />
          ))}
        </Box>

        <Box ml="10px" width="32px">
          <Box
            component="span"
            fontWeight={{ xs: 400, md: 500 }}
            fontSize={{ xs: "15.96px", md: "22px" }}
            lineHeight={{ xs: "normal", md: "27px" }}
            color="colors.white"
          >
            {activeSlide + 1}/{slidesLength}
          </Box>
        </Box>
      </Box>
    </Stack>
  );
};

const _NavigationButton = ({ reversedArrow = false, onClick }) => {
  const arrowSvgTransformValue = `rotate(${reversedArrow ? 180 : 0})`;

  return (
    <Box
      component="button"
      width={{ xs: "77.63px", md: "107px" }}
      height={{ xs: "33.37px", md: "46px" }}
      borderRadius={{ xs: "72.55px", md: "100px" }}
      backgroundColor="colors.white"
      display="flex"
      justifyContent="center"
      alignItems="center"
      onClick={onClick}
    >
      <Box>
        <Box display={{ xs: "none", md: "contents" }}>
          <svg
            transform={arrowSvgTransformValue}
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

        <Box display={{ xs: "contents", md: "none" }}>
          <svg
            transform={arrowSvgTransformValue}
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
    </Box>
  );
};

export default SlideSwitcher;
