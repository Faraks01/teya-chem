import React from "react";
import {Box, Stack} from "@mui/system";
import productTestingPicture1 from "../../assets/images/product_testing_picture_1.png";
import productTestingPicture2 from "../../assets/images/product_testing_picture_2.png";

const ProductTesting = () => {
  return (
    <Box
      mt={{xs: '85px', md: '122px'}}
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
        <Stack
          direction={{xs: 'column', md: 'row'}}
          alignItems={{xs: 'center', md: 'flex-start'}}
          spacing={{xs: '67px', md: '78px'}}
        >
          <Stack
            spacing={{xs: '67px', md: '78px'}}
          >
            <Box
              component="span"
              fontFamily="RoadRadio"
              fontWeight={700}
              fontSize={{xs: 30, md: 45}}
              lineHeight={{xs: 'normal', md: '45.4px'}}
              textAlign={{xs: 'center', md: 'left'}}
              color="colors.nero"
            >
              Испытание продукции
            </Box>

            <Stack spacing='24.2px'>
              <Box
                component="span"
                fontWeight={500}
                fontSize={{xs: 18, md: 20}}
                lineHeight={{xs: 'normal', md: '24.2px'}}
                color="colors.gray33"
              >
                Присадки в виде жидкости для дизельных двигателей —
                это добавки, которые используются для улучшения
                качества топлива и повышения эффективности работы
                двигателя.
              </Box>

              <Box
                component="span"
                fontWeight={500}
                fontSize={{xs: 18, md: 20}}
                lineHeight={{xs: 'normal', md: '24.2px'}}
                color="colors.gray33"
              >
                Эти присадки могут включать различные химические
                соединения, такие как синтетические полимеры,
                диспергирующие и очищающие агенты, антиоксиданты,
                ингибиторы коррозии и антизадирные добавки.
              </Box>
            </Stack>
          </Stack>

          <Box
            ml={{xs: 0, md: 'auto'}}
            mt='27px'
            component='img'
            alt='product testing picture 1'
            src={productTestingPicture1}
            width={{xs: 300, md: 430.11}}
            height={{xs: 239, md: 343}}
          />
        </Stack>

        <Stack
          mt={{xs: '67px', md: '83px'}}
          direction={{xs: 'column-reverse', md: 'row'}}
          spacing={{xs: '67px', md: '121px'}}
          alignItems='center'
        >
          <Box
            component='img'
            alt='product testing picture 2'
            src={productTestingPicture2}
            width={{xs: 300, md: 389}}
            height={{xs: 265, md: 343}}
          />

          <Stack spacing='24.2px'>
            <Box
              component="span"
              fontWeight={500}
              fontSize={{xs: 18, md: 20}}
              lineHeight={{xs: 'normal', md: '24.2px'}}
              color="colors.gray33"
            >
              Другие присадки в виде жидкости могут помочь снизить
              расход топлива, улучшить смазку и защитить двигатель от
              износа. Все это позволяет улучшить производительность и
              продлить срок эксплуатации дизельных двигателей.
            </Box>

            <Box
              component="span"
              fontWeight={500}
              fontSize={{xs: 18, md: 20}}
              lineHeight={{xs: 'normal', md: '24.2px'}}
              color="colors.gray33"
            >
              Однако перед использованием любых присадок
              необходимо убедиться, что они соответствуют
              требованиям производителя топлива и не вызовут
              повреждений двигателя или системы выхлопа.
            </Box>
          </Stack>
        </Stack>

      </Box>
    </Box>
  )
}

export default ProductTesting
