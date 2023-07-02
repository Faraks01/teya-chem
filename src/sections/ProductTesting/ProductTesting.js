import React from "react";
import {Box} from "@mui/system";
import productTestingPicture1 from "../../assets/images/product_testing_picture_1.png";
import productTestingPicture2 from "../../assets/images/product_testing_picture_2.png";

const ProductTesting = () => {
  return (
    <Box
      mt='122px'
      component='section'
      display='flex'
      justifyContent='center'
      width='100%'>
      <Box
        display="flex"
        flexDirection="column"
        position="relative"
        width="100%"
        maxWidth="1231px">

        <Box
          display='flex'
        >
          <Box
            display='flex'
            flexDirection='column'
          >
            <Box
              component="span"
              fontFamily="RoadRadio"
              fontWeight={700}
              fontSize={45}
              lineHeight="45.4px"
              color="colors.nero"
            >
              Испытание продукции
            </Box>

            <Box
              mt='78px'
              component="span"
              fontWeight={500}
              fontSize={20}
              lineHeight="24.2px"
              color="colors.gray33"
            >
              Присадки в виде жидкости для дизельных двигателей — <br/>
              это добавки, которые используются для улучшения<br/>
              качества топлива и повышения эффективности работы<br/>
              двигателя.
              <br/>
              <br/>
              Эти присадки могут включать различные химические<br/>
              соединения, такие как синтетические полимеры,<br/>
              диспергирующие и очищающие агенты, антиоксиданты,<br/>
              ингибиторы коррозии и антизадирные добавки.
            </Box>
          </Box>

          <Box
            ml='auto'
            mt='27px'
            component='img'
            alt='product testing picture 1'
            src={productTestingPicture1}
            width="430.11px"
            height="343px"
          />
        </Box>

        <Box
          mt='83px'
          display='flex'
          alignItems='center'
        >
          <Box
            component='img'
            alt='product testing picture 2'
            src={productTestingPicture2}
            width="389px"
            height="343px"
          />

          <Box
            ml='121px'
            component="span"
            fontWeight={500}
            fontSize={20}
            lineHeight="24.2px"
            color="colors.gray33"
          >
            Другие присадки в виде жидкости могут помочь снизить<br/>
            расход топлива, улучшить смазку и защитить двигатель от<br/>
            износа. Все это позволяет улучшить производительность и<br/>
            продлить срок эксплуатации дизельных двигателей.
            <br/>
            <br/>
            Однако перед использованием любых присадок<br/>
            необходимо убедиться, что они соответствуют<br/>
            требованиям производителя топлива и не вызовут<br/>
            повреждений двигателя или системы выхлопа.
          </Box>
        </Box>

      </Box>
    </Box>
  )
}

export default ProductTesting
