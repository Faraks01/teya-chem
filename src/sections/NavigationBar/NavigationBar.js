import React from "react";
import {Box} from "@mui/system";
import teyaLogoSrc from "../../assets/teya-logo.png";
import lightningIcon from "../../assets/lightning_icon.svg";

const NavigationBar = () => {
  return (
    <Box
      display="flex"
      width="100%"
      justifyContent="center">
      <Box
        display="flex"
        width="100%"
        maxWidth="1233px"
        height="106px"
        alignItems="center">
        <img
          alt={"Teya logo"}
          src={teyaLogoSrc}
          width="auto"
          height={39}
        />

        <Box ml="26px">
          <Box
            component="span"
            fontSize={14}
            fontWeight={500}
            color="colors.gray33"
            lineHeight="17px"
          >
            Универсальная присадка <br/>для дизельного топлива
          </Box>
        </Box>

        <Box ml="53px">
          <Box
            component="button"
            display="flex"
            alignItems="center"
            backgroundColor="colors.blurple"
            borderRadius="12px"
            height="51px"
            p="0 17px"
          >
            <Box
              component="span"
              fontSize={16}
              fontWeight={500}
              color="colors.white"
              lineHeight="19px"
            >
              Заказать на сайте
            </Box>

            <Box
              ml="10px">
              <img
                alt="lightning icon"
                src={lightningIcon}
              />
            </Box>
          </Box>
        </Box>

        <Box ml="52px">
          <Box
            component="span"
            fontSize={18}
            fontWeight={500}
            color="colors.nero"
            lineHeight="22px"
          >
            Блог
          </Box>
        </Box>

        <Box ml="47px">
          <Box
            component="span"
            fontSize={18}
            fontWeight={500}
            color="colors.nero"
            lineHeight="22px"
          >
            Отзывы
          </Box>
        </Box>

        <Box ml="47px">
          <Box
            component="span"
            fontSize={18}
            fontWeight={500}
            color="colors.nero"
            lineHeight="22px"
          >
            Контакты
          </Box>
        </Box>

        <Box ml="70px">
          <Box
            component="button"
            display="flex"
            alignItems="center"
            backgroundColor="colors.lightGray"
            borderRadius="18px"
            height="64px"
            pl="34px"
            pr="33px"
          >
            <Box
              component="span"
              fontFamily="RoadRadio"
              fontSize={18}
              fontWeight={700}
              color="colors.nero"
              lineHeight="18px"
            >
              Связаться с нами
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default NavigationBar
