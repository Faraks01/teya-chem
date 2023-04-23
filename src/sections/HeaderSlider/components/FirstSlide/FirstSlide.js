import React from "react";
import {Box} from "@mui/system";
import sliderImg1Src from "../../../../assets/images/header_slider_img_1.png";
import sciencetistsPicSrc from "../../../../assets/images/sciencetists_picture.png";
import laboratoryPicSrc from "../../../../assets/images/laboratory_picture.png";

const FirstSlide = () => {
  return (
    <Box
      width="100%"
      height="100%"
      position="relative"
    >
      <Box
        position="absolute"
        top="170px"
        left="65px"
        height="63px"
        width="fit-content"
        borderRadius="12px"
        pl="11px"
        pr="12px"
        display="flex"
        alignItems="center"
        backgroundColor="colors.blurple"
      >
        <Box
          component="span"
          fontFamily="RoadRadio"
          fontWeight={400}
          fontSize="45px"
          lineHeight="45px"
          color="colors.white"
        >
          ООО ТЭЯ-ХИМ
        </Box>
      </Box>

      <Box
        position="absolute"
        top="259px"
        left="65px"
        width="fit-content"
      >
        <Box
          component="span"
          fontWeight={400}
          fontSize="20px"
          lineHeight="24px"
          color="colors.white"
        >
          это российская компания, поставляющая на рынок<br/>
          продукцию, такую как многофункциональные<br/>
          присадки и очистители резины
        </Box>
      </Box>

      <Box
        position="absolute"
        top="35px"
        right="35px"
        width="455px"
        height="111px"
      >
        <svg
          width="455"
          height="111"
          viewBox="0 0 455 111"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M210.769 0H63.7315H22C9.84974 0 0 9.84974 0 22V89C0 101.15 9.84971 111 22 111H152.273H303.636H433C445.15 111 455 101.15 455 89V60.1046C455 55.1573 453.332 50.3544 450.267 46.4715L420.181 8.36688C416.009 3.0828 409.647 0 402.914 0H210.769Z"
            fill="white"/>
        </svg>

        <Box
          position="absolute"
          top={0}
          bottom={0}
          left={0}
          right={0}
          display="flex"
          alignItems="center"
          pl="33px"
          pr="34px"
        >
          <Box
            position="relative"
            display="flex"
          >
            <Box
              component="img"
              src={sciencetistsPicSrc}
              height={64}
              width={64}
              alt="sciencetists_picture"
              zIndex={1}
            />

            <Box
              component="img"
              src={laboratoryPicSrc}
              height={64}
              width={64}
              alt="laboratory_picture"
              position="relative"
              left="-31px"
            />
          </Box>

          <Box
            ml="-11.2px"
            width="fit-content"
          >
            <Box
              component="span"
              fontWeight={500}
              fontSize="15.8856px"
              lineHeight="19px"
              color="colors.gray33"
            >
              Исключительно собственного<br/>
              производства на основе<br/>
              собственных научных разработок
            </Box>
          </Box>
        </Box>
      </Box>


      <Box
        component="img"
        position="absolute"
        zIndex="-2"
        top={0}
        bottom={0}
        left={0}
        right={0}
        src={sliderImg1Src}
        alt="engine_image"
      />

      <Box
        position="absolute"
        zIndex="-1"
        top={0}
        bottom={0}
        left={0}
        right={0}
        sx={{
          background: "linear-gradient(238.77deg, rgba(0, 0, 0, 0) 38.54%, #151515 90.63%)"
        }}
      />
    </Box>
  )
}

export default FirstSlide
