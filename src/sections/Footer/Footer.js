import React from "react";
import {Box} from "@mui/system";
import SocialMediaButton from "./SocialMediaButton";
import teyaLogoSrc from "../../assets/images/teya-logo.png";
import lightningIcon from "../../assets/vectors/lightning_icon.svg";
import wavesSeparatorVector from "../../assets/vectors/waves_separator.svg";
import documentVector from "../../assets/vectors/document_icon.svg";
import telegramVector from "../../assets/vectors/telegram_icon.svg";
import vkVector from "../../assets/vectors/vk_icon.svg";
import whatsappVector from "../../assets/vectors/whats_app_icon.svg";
import {BUY_ON_THIS_SITE_SECTION_ID} from "../BuyOnThisSite/BuyOnThisSite";
import {ABOUT_US_SECTION_ID} from "../AboutUs/AboutUs";
import {FEEDBACKS_SECTION_ID} from "../Feedbacks/Feedbacks";
import {FEEDBACK_FORM_SECTION_ID} from "../FeedbackForm/FeedbackForm";

const Footer = () => {
  return (
    <Box
      mt='121px'
      pb='111px'
      display="flex"
      flexDirection='column'
      alignItems='center'
      position='relative'
      width="100%"
      backgroundColor='#EFEFEF'
      justifyContent="center">
      <Box
        className='footer-content-body'
        display="flex"
        width="100%"
        maxWidth="1237px"
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

        <Box ml="30px">
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

        <Box ml="77px">
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

        <Box ml="28px">
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

      <Box
        position='relative'
        mt='8px'
        width='100%'
        height='15px'
        flexShrink={0}
        sx={{background: `url('${wavesSeparatorVector}')`}}
      />

      <Box
        className='footer-content-body'
        mt='25px'
        display="flex"
        width="100%"
        maxWidth="1237px"
        alignItems="flex-start">
        <Box
          component='a'
          href='/'
          display='flex'
          alignItems='center'

        >
          <Box
            component='img'
            height={20}
            width={16}
            src={documentVector}
          />

          <Box
            ml='10px'
            component="span"
            fontSize={16}
            fontWeight={500}
            color="colors.gray33"
          >
            Политика конфиденциальности
          </Box>
        </Box>

        <Box
          ml='28px'
          component='a'
          href='/'
          display='flex'
          alignItems='center'
        >
          <Box
            component='img'
            height={20}
            width={16}
            src={documentVector}
          />

          <Box
            ml='10px'
            component="span"
            fontSize={16}
            fontWeight={500}
            color="colors.gray33"
          >
            Договор оферты
          </Box>
        </Box>

        <Box
          ml='auto'
          display='flex'
        >
          <SocialMediaButton
            url='#'
          >
            <Box
              component='img'
              height={16}
              width={19}
              src={telegramVector}
            />
          </SocialMediaButton>

          <Box
            ml='20px'
          >
            <SocialMediaButton
              url='#'
            >
              <Box
                component='img'
                height={17.85}
                width={32.3}
                src={vkVector}
              />
            </SocialMediaButton>
          </Box>

          <Box
            ml='20px'
          >
            <SocialMediaButton
              url='#'
            >
              <Box
                component='img'
                height={18}
                width={18}
                src={whatsappVector}
              />
            </SocialMediaButton>
          </Box>
        </Box>
      </Box>

      <Box
        mt='79.69px'
        display="flex"
        width="100%"
        maxWidth="1237px"
        justifyContent="center">
        <Box
          component="span"
          fontSize={14}
          fontWeight={500}
          color="colors.gray33"
          lineHeight='normal'
          textAlign='center'
        >
          Все права защищены.<br/>
          ©2023-2024
        </Box>
      </Box>
    </Box>
  )
}

export default Footer
