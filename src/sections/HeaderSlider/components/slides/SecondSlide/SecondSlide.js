import React, { useContext } from "react";
import { Box } from "@mui/system";
import sliderImg2Src from "@/assets/images/header_slider_img_2.png";
import calculatorPicSrc from "@/assets/images/calculator_picture.png";
import { PriceCalculatorContext } from "@/components/PriceCalculator/PriceCalculator";

const SecondSlide = () => {
  const { changeDialogState } = useContext(PriceCalculatorContext);

  const openCalculatorDialog = () => changeDialogState(true);

  return (
    <Box width="100%" height="100%" position="relative">
      <Box
        display={{ xs: "none", md: "flex" }}
        position="absolute"
        top="85px"
        left="66px"
        height="65px"
        width="fit-content"
        borderRadius="12px"
        pl="8px"
        pr="19px"
        alignItems="center"
        backgroundColor="colors.midnightBloom"
      >
        <Box
          component="span"
          fontFamily="RoadRadio"
          fontWeight={400}
          fontSize="45px"
          lineHeight="45px"
          color="colors.white"
        >
          Ваша экономия и выгода!
        </Box>
      </Box>

      <Box
        display={{ xs: "block", md: "none" }}
        top="42px"
        left="13px"
        width="224px"
        position="absolute"
        lineHeight="normal"
      >
        <Box
          component="span"
          fontFamily="RoadRadio"
          fontSize={25}
          fontWeight={400}
          color="colors.white"
        >
          ПОСЧИТАЙТЕ ВЫГОДУ С КАЛЬКУЛЯТОРОМ
        </Box>
      </Box>

      <Box
        position="absolute"
        top={{ xs: "147px", md: "165px" }}
        left={{ xs: "13px", md: "74px" }}
        width={{ xs: "243px", md: "fit-content" }}
        lineHeight={{ xs: "normal", md: "24px" }}
      >
        <Box
          display={{ xs: "none", md: "inline" }}
          component="span"
          fontWeight={500}
          fontSize={20}
          color="colors.gray72"
        >
          Рассчитайте самостоятельно вашу выгоду при использовании присадки
        </Box>

        <Box
          display={{ xs: "inline", md: "none" }}
          component="span"
          fontWeight={500}
          fontSize={16}
          color="colors.mercury"
        >
          Рассчитайте, какое кол-во присадки доливать, чтобы экономить на каждой
          заправке
        </Box>
      </Box>

      <Box
        position="absolute"
        top={{ xs: "253px", md: "unset" }}
        bottom={{ xs: "unset", md: "67px" }}
        left={{ xs: "50%", md: "74px" }}
        sx={{ transform: { xs: "translateX(-50%)", md: "none" } }}
        component="button"
        width={{ xs: "calc(100% - 26px)", md: "334px" }}
        height={{ xs: "46.6px", md: "62px" }}
        borderRadius={{ xs: "13.5px", md: "18px" }}
        backgroundColor="colors.white"
        display="flex"
        justifyContent="center"
        alignItems="center"
        onClick={openCalculatorDialog}
      >
        <Box
          component="span"
          fontFamily="RoadRadio"
          fontWeight={700}
          fontSize={{ xs: 13.5, md: 18 }}
          color="colors.nero"
          whiteSpace="nowrap"
        >
          Открыть калькулятор
        </Box>

        <Box
          ml={{ xs: "16.5px", md: "22px" }}
          component="img"
          src={calculatorPicSrc}
          height={{ xs: 25.5, md: 34 }}
          width={{ xs: 19.5, md: 26 }}
          alt="calculator_picture"
        />
      </Box>

      <Box
        position="absolute"
        zIndex="-2"
        top={0}
        bottom={0}
        left={0}
        right={0}
        backgroundColor="rgba(0, 0, 0, 0.7)"
      />

      <Box
        position="absolute"
        zIndex="-3"
        top={0}
        bottom={0}
        left={0}
        right={0}
        sx={{
          backgroundImage: `url('${sliderImg2Src}')`,
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
            "linear-gradient(235.57deg, rgba(0, 0, 0, 0) 25.15%, #232323 84.89%)",
        }}
      />
    </Box>
  );
};

export default SecondSlide;
