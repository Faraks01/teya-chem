import React, { useContext } from "react";
import { Box } from "@mui/system";
import teyaLogoSrc from "../../assets/images/teya-logo.png";
import lightningIcon from "../../assets/vectors/lightning_icon.svg";
import { ABOUT_US_SECTION_ID } from "../AboutUs/AboutUs";
import { FEEDBACKS_SECTION_ID } from "../Feedbacks/Feedbacks";
import { FEEDBACK_FORM_SECTION_ID } from "../FeedbackForm/FeedbackForm";
import { BUY_ON_THIS_SITE_SECTION_ID } from "../BuyOnThisSite/BuyOnThisSite";
import { DialogMenuContext } from "../../components/DialogMenu/DialogMenu";

const NavigationBar = () => {
  const { changeDialogState } = useContext(DialogMenuContext);

  const openDialogMenu = () => changeDialogState(true);

  return (
    <Box
      component="section"
      display="flex"
      width="100%"
      justifyContent="center"
    >
      <Box
        display="flex"
        width="100%"
        maxWidth="1233px"
        height="106px"
        alignItems="center"
      >
        <Box
          component="a"
          href={"#"}
          display="flex"
          height="fit-content"
          width="fit-content"
        >
          <Box
            component="img"
            alt={"Teya logo"}
            src={teyaLogoSrc}
            width="auto"
            height={{ xs: 34, md: 39 }}
            sx={{
              mixBlendMode: "darken",
            }}
          />
        </Box>

        <Box display={{ xs: "none", md: "block" }} ml="26px">
          <Box
            component="span"
            fontSize={14}
            fontWeight={500}
            color="colors.gray33"
            lineHeight="17px"
          >
            Универсальная присадка <br />
            для дизельного топлива
          </Box>
        </Box>

        <Box ml={{ xs: "auto", md: "53px" }}>
          <Box
            component="a"
            href={"#" + BUY_ON_THIS_SITE_SECTION_ID}
            display="flex"
            alignItems="center"
            backgroundColor="colors.blurple"
            borderRadius="12px"
            height={{ xs: 50, md: 51 }}
            p="0 17px"
          >
            <Box
              display={{ xs: "none", md: "inline" }}
              component="span"
              fontSize={16}
              fontWeight={500}
              color="colors.white"
              lineHeight="19px"
            >
              Заказать на сайте
            </Box>

            <Box ml={{ xs: 0, md: "10px" }}>
              <img alt="lightning icon" src={lightningIcon} />
            </Box>
          </Box>
        </Box>

        <Box display={{ xs: "none", md: "block" }} ml="52px">
          <Box
            component="a"
            href={"#" + ABOUT_US_SECTION_ID}
            fontSize={18}
            fontWeight={500}
            color="colors.nero"
            lineHeight="22px"
          >
            Блог
          </Box>
        </Box>

        <Box display={{ xs: "none", md: "block" }} ml="47px">
          <Box
            component="a"
            href={"#" + FEEDBACKS_SECTION_ID}
            fontSize={18}
            fontWeight={500}
            color="colors.nero"
            lineHeight="22px"
          >
            Отзывы
          </Box>
        </Box>

        <Box display={{ xs: "none", md: "block" }} ml="47px">
          <Box
            component="a"
            href={"#" + FEEDBACK_FORM_SECTION_ID}
            fontSize={18}
            fontWeight={500}
            color="colors.nero"
            lineHeight="22px"
          >
            Контакты
          </Box>
        </Box>

        <Box ml={{ xs: "10px", md: "70px" }}>
          <Box
            component="a"
            href={"#" + FEEDBACK_FORM_SECTION_ID}
            display="flex"
            alignItems="center"
            justifyContent={{ xs: "center", md: undefined }}
            backgroundColor={{ xs: "colors.white", md: "colors.lightGray" }}
            borderRadius={{ xs: "12px", md: "18px" }}
            height={{ xs: 50, md: 64 }}
            width={{ xs: 50, md: "auto" }}
            pl={{ xs: 0, md: "34px" }}
            pr={{ xs: 0, md: "33px" }}
          >
            <Box display={{ xs: "block", md: "none" }}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.910155 7.17426C3.00875 11.7471 6.73769 15.3714 11.3668 17.3375L12.1101 17.6689C12.9332 18.0357 13.8593 18.1 14.7252 17.8505C15.5911 17.601 16.3411 17.0537 16.8432 16.305L17.815 14.8569C17.9671 14.6298 18.0286 14.3539 17.9876 14.0836C17.9465 13.8134 17.8058 13.5683 17.5931 13.3967L14.3007 10.7388C14.186 10.6463 14.0539 10.578 13.9121 10.5379C13.7704 10.4978 13.622 10.4867 13.4759 10.5054C13.3298 10.5241 13.189 10.5722 13.062 10.6467C12.9349 10.7212 12.8242 10.8206 12.7365 10.939L11.7177 12.3139C9.10254 11.0215 6.98577 8.90308 5.69467 6.28612L7.06761 5.26673C7.18594 5.17897 7.28532 5.06819 7.35978 4.94103C7.43424 4.81388 7.48226 4.67298 7.50094 4.52679C7.51963 4.38061 7.50859 4.23215 7.4685 4.09034C7.42841 3.94853 7.36009 3.81628 7.26765 3.70155L4.61141 0.407129C4.4399 0.19434 4.19497 0.0535293 3.92487 0.0124333C3.65477 -0.0286628 3.37908 0.0329356 3.15211 0.185094L1.695 1.16292C0.942292 1.668 0.393214 2.42405 0.145585 3.29638C-0.102045 4.16872 -0.0321447 5.10069 0.342833 5.92627L0.910155 7.17426Z"
                  fill="#B8B8B8"
                />
              </svg>
            </Box>

            <Box
              display={{ xs: "none", md: "block" }}
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

        <Box
          display={{ xs: "block", md: "none" }}
          ml={{ xs: "10px", md: "70px" }}
        >
          <Box
            component="button"
            onClick={openDialogMenu}
            display="flex"
            alignItems="center"
            justifyContent={"center"}
            backgroundColor={"colors.white"}
            borderRadius={"12px"}
            height={50}
            width={50}
          >
            <Box mt="3px">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="18"
                viewBox="0 0 26 18"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M26 9C26 8.68866 25.8675 8.39007 25.6315 8.16992C25.3956 7.94977 25.0756 7.82609 24.7419 7.82609H1.25806C0.924405 7.82609 0.604411 7.94977 0.368478 8.16992C0.132546 8.39007 0 8.68866 0 9C0 9.31134 0.132546 9.60993 0.368478 9.83008C0.604411 10.0502 0.924405 10.1739 1.25806 10.1739H24.7419C25.0756 10.1739 25.3956 10.0502 25.6315 9.83008C25.8675 9.60993 26 9.31134 26 9ZM26 1.17391C26 0.862572 25.8675 0.563982 25.6315 0.343831C25.3956 0.12368 25.0756 0 24.7419 0H1.25806C0.924405 0 0.604411 0.12368 0.368478 0.343831C0.132546 0.563982 0 0.862572 0 1.17391C0 1.48525 0.132546 1.78384 0.368478 2.00399C0.604411 2.22415 0.924405 2.34783 1.25806 2.34783H24.7419C25.0756 2.34783 25.3956 2.22415 25.6315 2.00399C25.8675 1.78384 26 1.48525 26 1.17391ZM26 16.8261C26 16.5147 25.8675 16.2162 25.6315 15.996C25.3956 15.7759 25.0756 15.6522 24.7419 15.6522H1.25806C0.924405 15.6522 0.604411 15.7759 0.368478 15.996C0.132546 16.2162 0 16.5147 0 16.8261C0 17.1374 0.132546 17.436 0.368478 17.6562C0.604411 17.8763 0.924405 18 1.25806 18H24.7419C25.0756 18 25.3956 17.8763 25.6315 17.6562C25.8675 17.436 26 17.1374 26 16.8261Z"
                  fill="#B8B8B8"
                />
              </svg>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default NavigationBar;
