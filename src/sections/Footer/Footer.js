import React from "react";
import {Box, Stack} from "@mui/system";
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
      mt={{xs: '100px', md: '121px'}}
      pb='111px'
      display="flex"
      flexDirection='column'
      alignItems='center'
      position='relative'
      width="100%"
      backgroundColor={{xs: 'unset', md: '#EFEFEF'}}
      justifyContent="center">
      <Stack
        className='footer-content-body'
        direction={{xs: 'column', md: 'row'}}
        alignItems='center'
        width="100%"
        maxWidth="1237px"
        height={{xs: 'fit-content', md: "106px"}}
      >
        <Box
          order={1}
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

        <Box
          order={1}
          mt={{xs: '14px', md: 0}}
          ml={{xs: 0, md: '30px'}}
          width={{xs: 178, md: 'auto'}}
        >
          <Box
            component="span"
            fontSize={14}
            fontWeight={500}
            color="colors.gray33"
            lineHeight="17px"
          >
            Универсальная присадка для дизельного топлива
          </Box>
        </Box>

        <Box
          order={{xs: 2, md: 1}}
          mt={{xs: '38.64px', md: 0}}
          ml={{xs: 0, md: "77px"}}
        >
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

        <Stack
          order={1}
          mt={{xs: '46px', md: 0}}
          ml={{xs: 0, md: "28px"}}
          direction={{xs: 'column', md: 'row'}}
          spacing={{xs: '25px', md: '47px'}}
          alignItems='center'
        >
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
        </Stack>

        <Box
          display={{xs: 'block', md: 'none'}}
          mt='37px'
          order={4}
          height={1.5}
          width='100%'
          backgroundColor='colors.lightGray2'
        />

        <Box
          order={{xs: 5, md: 1}}
          mt={{xs: '37px', md: 0}}
          ml={{xs: 0, md: "70px"}}
        >
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
      </Stack>

      <Box
        display={{xs: 'none', md: 'block'}}
        position='relative'
        mt='8px'
        width='100%'
        height='15px'
        flexShrink={0}
        sx={{background: `url('${wavesSeparatorVector}')`}}
      />

      <Stack
        className='footer-content-body'
        mt='25px'
        direction={{xs: 'column', md: 'row'}}
        width="100%"
        maxWidth="1237px"
        alignItems={{xs: 'center', md: 'flex-start'}}>
        <Box
          mt='49px'
          mb='49px'
          display={{xs: 'block', md: 'none'}}
          order={{xs: 2, md: 1}}
          height={1.5}
          width='100%'
          backgroundColor='colors.lightGray2'
        />

        <Stack
          order={{xs: 3, md: 1}}
          direction={{xs: 'column-reverse', md: 'row'}}
          spacing={{xs: '17px', md: '28px'}}
        >
          <Box
            component='a'
            href='/'
            display='flex'
            alignItems='center'
          >
            <Box>
              <img
                height={20}
                width={16}
                src={documentVector}
                alt='document icon'
              />
            </Box>

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
            component='a'
            href='/'
            display='flex'
            alignItems='center'
          >
            <img
              height={20}
              width={16}
              src={documentVector}
              alt='document icon'
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
        </Stack>

        <Stack
          order={{xs: 1, md: 1}}
          direction='row'
          ml={{xs: 0, md: 'auto'}}
          spacing={{xs: '26.46px', md: '20px'}}
        >
          <SocialMediaButton
            url='#'
          >
            <img
              height={16}
              width={19}
              src={telegramVector}
              alt='telegram icon'
            />
          </SocialMediaButton>

          <SocialMediaButton
            url='#'
          >
            <img
              height={17.85}
              width={32.3}
              src={vkVector}
              alt='vkontakte icon'
            />
          </SocialMediaButton>

          <SocialMediaButton
            url='#'
          >
            <img
              height={18}
              width={18}
              src={whatsappVector}
              alt='whatsapp icon'
            />
          </SocialMediaButton>
        </Stack>
      </Stack>

      <Box
        mt={{xs: '123px', md: '79.69px'}}
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
          Все права защищены. <br/>
          ©2023-2024
        </Box>
      </Box>
    </Box>
  )
}

export default Footer
