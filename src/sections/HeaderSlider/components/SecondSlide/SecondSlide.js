import React, {useContext} from "react";
import {Box} from "@mui/system";
import sliderImg2Src from "../../../../assets/images/header_slider_img_2.png";
import calculatorPicSrc from "../../../../assets/images/calculator_picture.png";
import {PriceCalculatorContext} from "../../../../components/PriceCalculator/PriceCalculator";

const SecondSlide = () => {

  const {
    changeDialogState
  } = useContext(PriceCalculatorContext);

  const openCalculatorDialog = () => changeDialogState(true);

  return (
    <Box
      width="100%"
      height="100%"
      position="relative"
    >
      <Box
        position="absolute"
        top="85px"
        left="66px"
        height="65px"
        width="fit-content"
        borderRadius="12px"
        pl="8px"
        pr="19px"
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
          Ваша экономия и выгода!
        </Box>
      </Box>

      <Box
        position="absolute"
        top="165px"
        left="74px"
        width="fit-content"
      >
        <Box
          component="span"
          fontWeight={500}
          fontSize="20px"
          lineHeight="24px"
          color="colors.gray72"
        >
          Рассчитайте самостоятельно вашу выгоду при <br/>
          использовании присадки
        </Box>
      </Box>

      <Box
        position="absolute"
        bottom="67px"
        left="74px"
        component="button"
        width="334px"
        height="62px"
        borderRadius="18px"
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
          fontSize="18px"
          lineHeight="18px"
          color="colors.nero"
        >
          Открыть калькулятор
        </Box>

        <Box
          ml="22px"
          component="img"
          src={calculatorPicSrc}
          height={34}
          width={26}
          alt="calculator_picture"
        />
      </Box>

      <Box
        component="img"
        position="absolute"
        zIndex="-2"
        top={0}
        bottom={0}
        left={0}
        right={0}
        src={sliderImg2Src}
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
          background: "linear-gradient(235.57deg, rgba(0, 0, 0, 0) 25.15%, #232323 84.89%)"
        }}
      />
    </Box>
  )
}

export default SecondSlide
