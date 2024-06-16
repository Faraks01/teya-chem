import React from "react";
import { Box, Stack } from "@mui/system";
import sliderImg1Src from "@/assets/images/header_slider_img_1.png";
import sciencetistsPicSrc from "@/assets/images/sciencetists_picture.png";
import laboratoryPicSrc from "@/assets/images/laboratory_picture.png";

const FirstSlide = () => {
  return (
    <Box width="100%" height="100%" position="relative">
      <Box
        position="absolute"
        top={{ xs: "19px", md: "170px" }}
        left={{ xs: "50%", md: "65px" }}
        sx={{ transform: { xs: "translateX(-50%)", md: "none" } }}
        height={{ xs: "49px", md: "63px" }}
        width="fit-content"
        borderRadius="12px"
        pl={{ xs: "10px", md: "11px" }}
        pr={{ xs: "11px", md: "12px" }}
        display="flex"
        alignItems="center"
        backgroundColor="colors.midnightBloom"
        lineHeight={{ xs: "normal", md: "45px" }}
      >
        <Box
          component="span"
          fontFamily="RoadRadio"
          fontWeight={400}
          fontSize={{ xs: 30, md: 45 }}
          color="colors.white"
          whiteSpace="nowrap"
        >
          ООО ТЭЯ-ХИМ
        </Box>
      </Box>

      <Box
        position="absolute"
        top={{ xs: "82px", md: "259px" }}
        left={{ xs: "50%", md: "65px" }}
        sx={{ transform: { xs: "translateX(-50%)", md: "none" } }}
        width={{ xs: "274px", md: "515px" }}
        textAlign={{ xs: "center", md: "left" }}
        lineHeight={{ xs: "normal", md: "24px" }}
      >
        <Box
          component="span"
          fontWeight={400}
          fontSize={{ xs: 15, md: 20 }}
          color="colors.white"
        >
          это российская компания, поставляющая на рынок продукцию, такую как
          многофункциональные присадки и очистители резины
        </Box>
      </Box>

      <Box
        position="absolute"
        top={{ xs: "177px", md: "35px" }}
        right={{ xs: "unset", md: "35px" }}
        left={{ xs: "13px", md: "unset" }}
        width={{ xs: "240px", md: "455px" }}
        height={{ xs: "138px", md: "111px" }}
      >
        <Box
          display={{ xs: "none", md: "block" }}
          position="absolute"
          top={0}
          bottom={0}
          left={0}
          right={0}
        >
          <svg
            width="455"
            height="111"
            viewBox="0 0 455 111"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M210.769 0H63.7315H22C9.84974 0 0 9.84974 0 22V89C0 101.15 9.84971 111 22 111H152.273H303.636H433C445.15 111 455 101.15 455 89V60.1046C455 55.1573 453.332 50.3544 450.267 46.4715L420.181 8.36688C416.009 3.0828 409.647 0 402.914 0H210.769Z"
              fill="white"
            />
          </svg>
        </Box>

        <Box
          display={{ xs: "block", md: "none" }}
          position="absolute"
          top={0}
          bottom={0}
          left={0}
          right={0}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="240"
            height="138"
            viewBox="0 0 240 138"
            fill="none"
          >
            <path
              d="M185.036 0H55.9505H19.4055C8.68816 0 0 8.68816 0 19.4055V118.197C0 128.915 8.68817 137.603 19.4056 137.603H133.682L220.355 137.603C231.073 137.603 239.923 128.915 239.923 118.197V48.8961C239.923 44.1994 238.22 39.6621 235.129 36.1258L209.354 6.63523C205.669 2.41893 200.343 0 194.743 0H185.036Z"
              fill="white"
            />
          </svg>
        </Box>

        <Stack
          position="absolute"
          top={0}
          bottom={0}
          left={0}
          right={0}
          direction={{ xs: "column", md: "row" }}
          alignItems={{ xs: "flex-start", md: "center" }}
          pl={{ xs: "18px", md: "33px" }}
          pr={{ xs: "17.92px", md: "34px" }}
          pt={{ xs: "16px", md: 0 }}
          spacing={{ xs: "10.62px", md: 0 }}
        >
          <Box position="relative" display="flex">
            <Box
              component="img"
              src={sciencetistsPicSrc}
              height={{ xs: 51, md: 64 }}
              width={{ xs: 51, md: 64 }}
              alt="sciencetists_picture"
              zIndex={1}
            />

            <Box
              component="img"
              src={laboratoryPicSrc}
              height={{ xs: 51, md: 64 }}
              width={{ xs: 51, md: 64 }}
              alt="laboratory_picture"
              position="relative"
              left="-31px"
            />
          </Box>

          <Box
            ml={{ xs: 0, md: "-11.2px" }}
            lineHeight={{ xs: "0.9", md: "19px" }}
            width="fit-content"
          >
            <Box
              component="span"
              fontWeight={500}
              fontSize={{ xs: "12px", md: "15.8856px" }}
              color="colors.gray33"
            >
              Исключительно собственного производства на основе собственных
              научных разработок
            </Box>
          </Box>
        </Stack>
      </Box>

      <Box
        position="absolute"
        zIndex="-2"
        top={0}
        bottom={0}
        left={0}
        right={0}
        backgroundColor="rgba(0, 0, 0, 0.5)"
      />

      <Box
        position="absolute"
        zIndex="-3"
        top={0}
        bottom={0}
        left={0}
        right={0}
        sx={{
          backgroundImage: `url('${sliderImg1Src}')`,
          backgroundPositionX: { xs: "-25px", md: "unset" },
          backgroundPositionY: { xs: "-2px", md: "unset" },
        }}
      />

      <Box
        position="absolute"
        zIndex="-1"
        top={0}
        bottom={0}
        left={0}
        right={0}
        sx={{
          background:
            "linear-gradient(238.77deg, rgba(0, 0, 0, 0) 38.54%, #151515 90.63%)",
        }}
      />
    </Box>
  );
};

export default FirstSlide;
