import React from "react";
import {Box} from "@mui/system";
import springPicSrc from "../../assets/images/spring_picture.png";
import dodecahedronPicSrc from "../../assets/images/dodecahedron_picture.png";

export const ABOUT_US_SECTION_ID = 'about_us';

const AboutUs = () => {
    return (
      <Box
        id={ABOUT_US_SECTION_ID}
        component='section'
        pt="122px"
        pb="201.43px"
        display="flex"
        justifyContent="center"
        width="100%">
          <Box
            display="flex"
            alignItems={{xs: 'center', md: 'flex-start'}}
            flexDirection="column"
            position="relative"
            width="100%"
            maxWidth="1233px">
              <Box
                mr={{xs: 0, md: 'auto'}}
                width={{xs: 300, md: '100%'}}
                component="span"
                fontFamily="RoadRadio"
                fontWeight={700}
                fontSize={45}
                lineHeight="45.4px"
                color="colors.nero"
              >
                  О НАС
              </Box>

              <Box
                mt={{xs: '46px', md: '28.5px'}}
                mr={{xs: 0, md: 'auto'}}
                height={{xs: 285, md: 151}}
                width={{xs: 300, md: 678}}
                pt={{xs: '66px', md: '40.5px'}}
                pl={{xs: '24px', md: '33.5px'}}
                pr={{xs: '23px', md: '38.5px'}}
                position="relative"
              >
                  <Box
                    component="span"
                    fontWeight={500}
                    fontSize={{xs: 18, md: 20}}
                    lineHeight={{xs: 'normal', md: '24.2px'}}
                    color="colors.gray33"
                    position="relative"
                    zIndex={1}
                  >
                      ООО «Тея-хим» - это российская компания, поставляющая
                      на рынок продукцию исключительно собственного
                      производства на основе собственных научных разработок.
                  </Box>

                  <Box
                    display={{xs: 'none', md: 'block'}}
                    position="absolute"
                    top={0}
                    bottom={0}
                    left={0}
                    right={0}
                  >
                      <svg width="679" height="152" viewBox="0 0 679 152" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0.5 110.715V31.2402V22.7402C0.5 10.59 10.3497 0.740234 22.5 0.740234H656.5C668.65 0.740234 678.5 10.59 678.5 22.7402V39.7402V129.74C678.5 141.891 668.65 151.74 656.5 151.74H63.3698C60.1621 151.74 56.9932 151.039 54.0851 149.685L13.2153 130.659C5.45949 127.049 0.5 119.27 0.5 110.715Z" fill="white"/>
                      </svg>
                  </Box>

                  <Box
                    display={{xs: 'block', md: 'none'}}
                    position="absolute"
                    top={0}
                    bottom={0}
                    left={0}
                    right={0}
                  >
                      <svg width="300" height="285" viewBox="0 0 300 285" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0 241.009V36.7618V22.0002C0 9.84998 9.84973 0.000244141 22 0.000244141H278C290.15 0.000244141 300 9.85 300 22.0003V47.0069V263C300 275.151 290.15 285 278 285H53.3873C48.8702 285 44.4627 283.61 40.7633 281.018L9.376 259.026C3.49937 254.909 0 248.184 0 241.009Z" fill="white"/>
                      </svg>
                  </Box>

                  <Box
                    display={{xs: 'block', md: 'none'}}
                    component="img"
                    alt={"Spring picture"}
                    src={springPicSrc}
                    position="absolute"
                    top="-300px"
                    right="-75%"
                    width="461.46px"
                    height="481.27px"
                  />
              </Box>

              <Box
                display={{xs: 'none', md: 'block'}}
                component="img"
                alt={"Spring picture"}
                src={springPicSrc}
                position="absolute"
                top="-133.46px"
                right="6px"
                width="461.46px"
                height="481.27px"
              />

              <Box
                mt={{xs: '53px', md: '34.5px'}}
                ml={{xs: 0, md: 'auto'}}
                height={{xs: 234, md: 246}}
                width={{xs: 299, md: 724}}
                pt={{xs: '26px', md: '36px'}}
                pl={{xs: '17px', md: '34px'}}
                pr={{xs: '17px', md: 0}}
                position="relative"
              >
                  <Box
                    component="span"
                    fontFamily="RoadRadio"
                    fontWeight={700}
                    fontSize={{xs: 18, md: 30}}
                    lineHeight={{xs: 'normal', md: '30.27px'}}
                    color="colors.nero"
                    position="relative"
                    zIndex={1}
                  >
                      Компания разрабатывает
                      и специализируется на производстве
                      автохимии, продуктах бытовой химии
                      и реагентах, имеющих нишевое
                      применение, таких как очистители
                      резиновых поверхностей.
                  </Box>

                  <Box
                    display={{xs: 'none', md: 'block'}}
                    position="absolute"
                    top={0}
                    bottom={0}
                    left={0}
                    right={0}
                  >
                      <svg width="726" height="248" viewBox="0 0 726 248" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 224.572V22.572C1 10.4218 10.8497 0.572021 23 0.572021H703C715.15 0.572021 725 10.4218 725 22.572V190.526C725 197.765 721.439 204.54 715.477 208.646L702.616 217.502C698.946 220.029 694.595 221.382 690.139 221.382H623.43H536.913C531.414 221.382 526.115 223.442 522.058 227.154L507.151 240.8C503.095 244.513 497.795 246.572 492.297 246.572H23C10.8497 246.572 1 236.722 1 224.572Z" stroke="#B8B8B8"/>
                      </svg>
                  </Box>

                  <Box
                    display={{xs: 'block', md: 'none'}}
                    position="absolute"
                    top={0}
                    bottom={0}
                    left={0}
                    right={0}
                  >
                      <svg width="301" height="236" viewBox="0 0 301 236" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 213V23.0003C1 10.85 10.8497 1.00025 23 1.00025L278 1.00035C290.15 1.00036 300 10.8501 300 23.0004V195.653C300 203.091 296.241 210.026 290.008 214.087L287.216 215.906C283.643 218.233 279.471 219.472 275.208 219.472H233.813H180.065C174.776 219.472 169.663 221.378 165.664 224.841L160.131 229.631C156.133 233.094 151.02 235 145.73 235L23 235C10.8497 235 1 225.15 1 213Z" stroke="#B8B8B8"/>
                      </svg>
                  </Box>

                  <Box
                    display={{xs: 'block', md: 'none'}}
                    component="img"
                    alt={"Dodecahedron picture"}
                    src={dodecahedronPicSrc}
                    position="absolute"
                    bottom="-240px"
                    left="-22%"
                    width="303.38px"
                    height="318.02px"
                  />
              </Box>

              <Box
                display={{xs: 'none', md: 'block'}}
                component="img"
                alt={"Dodecahedron picture"}
                src={dodecahedronPicSrc}
                position="absolute"
                top="285px"
                left={0}
                width="303.38px"
                height="318.02px"
              />
          </Box>
      </Box>
    )
}

export default AboutUs
