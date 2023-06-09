import React from "react";
import {Box} from "@mui/system";
import teyaLogoSrc from "../../assets/images/teya-logo.png";
import lightningIcon from "../../assets/vectors/lightning_icon.svg";
import {ABOUT_US_SECTION_ID} from "../AboutUs/AboutUs";
import {FEEDBACKS_SECTION_ID} from "../Feedbacks/Feedbacks";
import {FEEDBACK_FORM_SECTION_ID} from "../FeedbackForm/FeedbackForm";
import {BUY_ON_THIS_SITE_SECTION_ID} from "../BuyOnThisSite/BuyOnThisSite";

const NavigationBar = () => {
  return (
    <Box
      component='section'
      display="flex"
      width="100%"
      justifyContent="center">
      <Box
        display="flex"
        width="100%"
        maxWidth="1233px"
        height="106px"
        alignItems="center">
        <Box
          component="a"
          href={'#'}
          display="flex"
          height="fit-content"
          width='fit-content'
        >
          <Box
            component="img"
            alt={"Teya logo"}
            src={teyaLogoSrc}
            width="auto"
            height={39}
            sx={{
              mixBlendMode: "darken"
            }}
          />
        </Box>

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
            component="a"
            href={'#' + BUY_ON_THIS_SITE_SECTION_ID}
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
            component="a"
            href={'#' + ABOUT_US_SECTION_ID}
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
            component="a"
            href={'#' + FEEDBACKS_SECTION_ID}
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
            component="a"
            href={'#' + FEEDBACK_FORM_SECTION_ID}
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
            component="a"
            href={'#' + FEEDBACK_FORM_SECTION_ID}
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
