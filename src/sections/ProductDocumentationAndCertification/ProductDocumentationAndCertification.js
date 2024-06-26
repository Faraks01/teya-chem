import React from "react";
import { Box, Stack } from "@mui/system";
import certificatePic from "@/assets/images/certificate_example.png";
import sectionBgPicSrc from "@/assets/images/product_documentation_and_certification_bg.jpeg";

const ProductDocumentationAndCertification = () => {
  return (
    <Box
      mt={{ xs: "85px", md: "122px" }}
      component="section"
      display="flex"
      justifyContent="center"
      width="100%"
    >
      <Box
        display="flex"
        flexDirection="column"
        position="relative"
        pl="62px"
        pr="62px"
        pt="42.03px"
        pb="60px"
        width="100%"
        borderRadius="22px"
        overflow="hidden"
        maxWidth="1354px"
      >
        <Box
          display={{ xs: "flex", md: "none" }}
          justifyContent="flex-end"
          zIndex={2}
        >
          <Box component="button">
            <svg
              width="22"
              height="23"
              viewBox="0 0 22 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.8236 21.2739L22 0.0336914C16.6784 0.0854088 6.07448 0.15837 0.753363 0.209626L0.709483 2.86843C5.49612 2.82133 11.8506 2.78254 17.4414 2.73175L0 20.1679L1.86003 22.0274L19.3015 4.59122L19.15 21.3039L21.8244 21.2739L21.8236 21.2739Z"
                fill="#9E9E9E"
              />
            </svg>
          </Box>
        </Box>

        <Box display="flex" alignItems="flex-start" zIndex={2}>
          <Box
            mt="auto"
            component="span"
            fontFamily="RoadRadio"
            fontWeight={700}
            fontSize={{ xs: 30, md: 45 }}
            lineHeight={{ xs: "normal", md: "45.4px" }}
            color="colors.white"
          >
            Документация и сертификация
          </Box>

          <Box display={{ xs: "none", md: "block" }} width={11} />

          <Box component="button" display={{ xs: "none", md: "flex" }}>
            <svg
              width="22"
              height="23"
              viewBox="0 0 22 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.8236 21.2739L22 0.0336914C16.6784 0.0854088 6.07448 0.15837 0.753363 0.209626L0.709483 2.86843C5.49612 2.82133 11.8506 2.78254 17.4414 2.73175L0 20.1679L1.86003 22.0274L19.3015 4.59122L19.15 21.3039L21.8244 21.2739L21.8236 21.2739Z"
                fill="#9E9E9E"
              />
            </svg>
          </Box>
        </Box>

        <Stack
          mt={{ xs: "37px", md: "47px" }}
          direction={{ xs: "column", md: "row" }}
          spacing="25px"
          zIndex={2}
        >
          <Box
            display="flex"
            height={35}
            width={35}
            justifyContent="center"
            alignItems="center"
          >
            <svg
              width="35"
              height="36"
              viewBox="0 0 35 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.4705 15.9103C17.8805 15.9103 18.2737 16.0731 18.5636 16.363C18.8535 16.6528 19.0164 17.0459 19.0164 17.4557V27.7587C19.0164 28.1685 18.8535 28.5616 18.5636 28.8515C18.2737 29.1413 17.8805 29.3041 17.4705 29.3041C17.0605 29.3041 16.6673 29.1413 16.3774 28.8515C16.0875 28.5616 15.9246 28.1685 15.9246 27.7587V17.4557C15.9246 17.0459 16.0875 16.6528 16.3774 16.363C16.6673 16.0731 17.0605 15.9103 17.4705 15.9103ZM17.4705 12.3043C18.0171 12.3043 18.5414 12.0872 18.928 11.7007C19.3145 11.3143 19.5317 10.7902 19.5317 10.2437C19.5317 9.69719 19.3145 9.17307 18.928 8.78664C18.5414 8.4002 18.0171 8.18311 17.4705 8.18311C16.9238 8.18311 16.3996 8.4002 16.013 8.78664C15.6265 9.17307 15.4093 9.69719 15.4093 10.2437C15.4093 10.7902 15.6265 11.3143 16.013 11.7007C16.3996 12.0872 16.9238 12.3043 17.4705 12.3043Z"
                fill="#B8B8B8"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.818 1.52543C14.2333 0.81444 20.7077 0.81444 27.123 1.52543C30.8888 1.94579 33.929 4.90891 34.3701 8.69627C35.1327 15.1995 35.1327 21.7727 34.3701 28.278C33.927 32.0612 30.8867 35.0264 27.123 35.4488C20.7077 36.1599 14.2333 36.1599 7.818 35.4488C4.05223 35.0264 1.01199 32.0612 0.570895 28.278C-0.190298 21.7723 -0.190298 15.2 0.570895 8.6942C1.01199 4.90891 4.05429 1.94579 7.818 1.52337V1.52543ZM26.7808 4.5957C20.5929 3.91001 14.3481 3.91001 8.16016 4.5957C7.01495 4.72265 5.94597 5.23177 5.12581 6.04084C4.30566 6.84992 3.78221 7.91172 3.63999 9.05481C2.90693 15.321 2.90693 21.6512 3.63999 27.9174C3.78264 29.0601 4.30628 30.1214 5.1264 30.9301C5.94651 31.7388 7.01526 32.2476 8.16016 32.3745C14.2963 33.0606 20.6447 33.0606 26.7808 32.3745C27.9254 32.2472 28.9936 31.7381 29.8133 30.9295C30.6331 30.1209 31.1564 29.0598 31.299 27.9174C32.032 21.6512 32.032 15.321 31.299 9.05481C31.1568 7.91203 30.6337 6.85047 29.8139 6.04143C28.9942 5.2324 27.9257 4.72309 26.7808 4.5957Z"
                fill="#B8B8B8"
              />
            </svg>
          </Box>

          <Box
            component="span"
            fontWeight={500}
            fontSize={22}
            lineHeight="27px"
            color="colors.lightGray"
          >
            Проведенные испытания доказали, что использование <br />
            присадки не имеет негативного влияния на работу <br />
            топливной аппаратуры дизельного ДВС и не ухудшает <br />
            физико-химические свойства дизельного топлива.
          </Box>
        </Stack>

        <Stack
          mt={{ xs: "36px", md: "32px" }}
          direction={{ xs: "column", md: "row" }}
          spacing="25px"
          zIndex={2}
        >
          <Box
            display="flex"
            height={35}
            width={35}
            justifyContent="center"
            alignItems="center"
          >
            <svg
              width="35"
              height="36"
              viewBox="0 0 35 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.4705 15.9103C17.8805 15.9103 18.2737 16.0731 18.5636 16.363C18.8535 16.6528 19.0164 17.0459 19.0164 17.4557V27.7587C19.0164 28.1685 18.8535 28.5616 18.5636 28.8515C18.2737 29.1413 17.8805 29.3041 17.4705 29.3041C17.0605 29.3041 16.6673 29.1413 16.3774 28.8515C16.0875 28.5616 15.9246 28.1685 15.9246 27.7587V17.4557C15.9246 17.0459 16.0875 16.6528 16.3774 16.363C16.6673 16.0731 17.0605 15.9103 17.4705 15.9103ZM17.4705 12.3043C18.0171 12.3043 18.5414 12.0872 18.928 11.7007C19.3145 11.3143 19.5317 10.7902 19.5317 10.2437C19.5317 9.69719 19.3145 9.17307 18.928 8.78664C18.5414 8.4002 18.0171 8.18311 17.4705 8.18311C16.9238 8.18311 16.3996 8.4002 16.013 8.78664C15.6265 9.17307 15.4093 9.69719 15.4093 10.2437C15.4093 10.7902 15.6265 11.3143 16.013 11.7007C16.3996 12.0872 16.9238 12.3043 17.4705 12.3043Z"
                fill="#B8B8B8"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.818 1.52543C14.2333 0.81444 20.7077 0.81444 27.123 1.52543C30.8888 1.94579 33.929 4.90891 34.3701 8.69627C35.1327 15.1995 35.1327 21.7727 34.3701 28.278C33.927 32.0612 30.8867 35.0264 27.123 35.4488C20.7077 36.1599 14.2333 36.1599 7.818 35.4488C4.05223 35.0264 1.01199 32.0612 0.570895 28.278C-0.190298 21.7723 -0.190298 15.2 0.570895 8.6942C1.01199 4.90891 4.05429 1.94579 7.818 1.52337V1.52543ZM26.7808 4.5957C20.5929 3.91001 14.3481 3.91001 8.16016 4.5957C7.01495 4.72265 5.94597 5.23177 5.12581 6.04084C4.30566 6.84992 3.78221 7.91172 3.63999 9.05481C2.90693 15.321 2.90693 21.6512 3.63999 27.9174C3.78264 29.0601 4.30628 30.1214 5.1264 30.9301C5.94651 31.7388 7.01526 32.2476 8.16016 32.3745C14.2963 33.0606 20.6447 33.0606 26.7808 32.3745C27.9254 32.2472 28.9936 31.7381 29.8133 30.9295C30.6331 30.1209 31.1564 29.0598 31.299 27.9174C32.032 21.6512 32.032 15.321 31.299 9.05481C31.1568 7.91203 30.6337 6.85047 29.8139 6.04143C28.9942 5.2324 27.9257 4.72309 26.7808 4.5957Z"
                fill="#B8B8B8"
              />
            </svg>
          </Box>

          <Box
            ml="25px"
            component="span"
            fontWeight={500}
            fontSize={22}
            lineHeight="27px"
            color="colors.lightGray"
          >
            Использование присадки не может <br />
            нанести вред вашему двигателю.
          </Box>
        </Stack>

        <Stack
          direction="row"
          justifyContent={{ xs: "center", md: "flex-start" }}
          mt={{ xs: "60px", md: "71px" }}
          spacing="44px"
          zIndex={2}
        >
          <Box
            component="img"
            src={certificatePic}
            height={{ xs: 369, md: 466 }}
            width={{ xs: 256, md: 322 }}
            alt="certificate_picture"
          />

          <Box
            display={{ xs: "none", md: "block" }}
            component="img"
            src={certificatePic}
            height={466}
            width={322}
            alt="certificate_picture"
          />

          <Box
            display={{ xs: "none", md: "block" }}
            component="img"
            src={certificatePic}
            height={466}
            width={322}
            alt="certificate_picture"
          />
        </Stack>

        <Box
          mt={{ xs: "46px", md: "36px" }}
          component="span"
          fontWeight={500}
          fontSize={22}
          lineHeight="27px"
          color="colors.lightGray"
          zIndex={2}
        >
          *Другие документы доступны по требованию
        </Box>

        <Box
          top={0}
          bottom={0}
          left={0}
          right={0}
          position="absolute"
          component="img"
          src={sectionBgPicSrc}
          height="100%"
          width="100%"
          alt="product documentation and certification section background"
          zIndex={0}
        />
      </Box>
    </Box>
  );
};

export default ProductDocumentationAndCertification;
