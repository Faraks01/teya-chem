import React from "react";
import {Box} from "@mui/system";
import springPicSrc from "../../assets/images/spring_picture.png";
import dodecahedronPicSrc from "../../assets/images/dodecahedron_picture.png";

export const ABOUT_US_SECTION_ID = 'about_us';

const AboutUs = () => {
    return (
      <Box
        id={ABOUT_US_SECTION_ID}
        pt="122px"
        pb="201.43px"
        display="flex"
        justifyContent="center"
        width="100%">
          <Box
            display="flex"
            flexDirection="column"
            position="relative"
            width="100%"
            maxWidth="1233px">
              <Box
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
                mt="28.5px"
                mr="auto"
                height={151}
                width={678}
                pt="40.5px"
                pl="33.5px"
                pr="38.5px"
                position="relative"
              >
                  <Box
                    component="span"
                    fontWeight={500}
                    fontSize={20}
                    lineHeight="24.2px"
                    color="colors.gray33"
                    position="relative"
                    zIndex={1}
                  >
                      ООО «Тея-хим» - это российская компания, поставляющая<br/>
                      на рынок продукцию исключительно собственного<br/>
                      производства на основе собственных научных разработок.
                  </Box>

                  <Box
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
              </Box>

              <Box
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
                mt="34.5px"
                ml="auto"
                height={246}
                width={724}
                pt="36px"
                pl="34px"
                position="relative"
              >
                  <Box
                    component="span"
                    fontFamily="RoadRadio"
                    fontWeight={700}
                    fontSize={30}
                    lineHeight="30.27px"
                    color="colors.nero"
                    position="relative"
                    zIndex={1}
                  >
                      Компания разрабатывает<br/>
                      и специализируется на производстве<br/>
                      автохимии, продуктах бытовой химии<br/>
                      и реагентах, имеющих нишевое<br/>
                      применение, таких как очистители<br/>
                      резиновых поверхностей.
                  </Box>

                  <Box
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
              </Box>

              <Box
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
