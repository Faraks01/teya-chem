import React from "react";
import { Box } from "@mui/system";
import Grid from "@mui/system/Unstable_Grid";
import ProductCard from "./ProductCard";

export const BUY_ON_THIS_SITE_SECTION_ID = "buy_here";

const BuyOnThisSite = () => {
  return (
    <Box
      id={BUY_ON_THIS_SITE_SECTION_ID}
      mt="122px"
      component="section"
      display="flex"
      justifyContent="center"
      width="100%"
    >
      <Box
        display="flex"
        flexDirection="column"
        position="relative"
        width="100%"
        maxWidth="1241px"
      >
        <Box
          component="span"
          fontFamily="RoadRadio"
          fontWeight={700}
          fontSize={{ xs: 30, md: 45 }}
          lineHeight={{ xs: "normal", md: "45.4px" }}
          textAlign={{ xs: "center", md: "left" }}
          color="colors.nero"
        >
          Заказать на сайте
        </Box>

        <Box mt={{ xs: "45px", md: "60px" }}>
          <Grid width="100%" container rowSpacing={{ xs: "25px", md: 0 }}>
            {Array.from(Array(4).keys()).map((_, index) => (
              <Grid xs={12} md={6} lg={3} key={"product__" + index}>
                <Box
                  display="flex"
                  justifyContent={{ xs: "center", md: "flex-start" }}
                >
                  <ProductCard />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box
          mt={{ xs: "24px", md: "30.61px" }}
          component="button"
          display="flex"
          justifyContent="center"
          alignItems="center"
          backgroundColor="#D7D7D7"
          borderRadius="17.74px"
          height="67.99px"
          alignSelf="center"
          width={{ xs: "300px", md: "100%" }}
          zIndex={2}
        >
          <Box
            component="span"
            fontFamily="RoadRadio"
            fontWeight={700}
            fontSize="17.74px"
            lineHeight="17.9px"
            color="colors.nero"
          >
            Заказать на сайте
          </Box>

          <Box ml="37px">
            <svg
              width="27"
              height="28"
              viewBox="0 0 27 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.80127 7.79396C4.63179 7.75025 4.47424 7.67076 4.33976 7.56111C4.20528 7.45146 4.09716 7.31434 4.02305 7.15945C3.94894 7.00455 3.91065 6.83567 3.9109 6.66475C3.91114 6.49383 3.94991 6.32505 4.02446 6.17035L6.67231 0.672796C6.76875 0.471476 6.92217 0.301202 7.1145 0.182012C7.30684 0.0628214 7.53009 -0.000325497 7.75799 1.26173e-06C7.98589 0.000328021 8.20895 0.064115 8.40092 0.183856C8.5929 0.303597 8.7458 0.47431 8.84163 0.675906L10.0092 3.11598C10.0509 3.09968 10.0935 3.08566 10.1368 3.07399C12.8916 2.35468 15.8125 2.53848 18.4495 3.59709C21.0865 4.65571 23.2934 6.53038 24.73 8.93227C26.1666 11.3342 26.7533 14.13 26.3996 16.889C26.046 19.648 24.7716 22.2171 22.7729 24.2004C20.7742 26.1837 18.162 27.4712 15.3389 27.8645C12.5158 28.2578 9.6383 27.7351 7.14986 26.3769C4.66143 25.0187 2.7001 22.9004 1.56808 20.3484C0.436051 17.7964 0.196145 14.9523 0.885321 12.2542C0.923444 12.1055 0.99123 11.9656 1.08481 11.8425C1.17839 11.7194 1.29593 11.6154 1.43071 11.5366C1.5655 11.4577 1.7149 11.4055 1.87037 11.383C2.02585 11.3604 2.18436 11.3679 2.33685 11.4051C2.48935 11.4423 2.63284 11.5083 2.75914 11.5996C2.88543 11.6908 2.99206 11.8054 3.07293 11.9368C3.15381 12.0682 3.20734 12.2139 3.23047 12.3655C3.25361 12.5171 3.2459 12.6716 3.20777 12.8203C2.64888 15.0102 2.83999 17.3182 3.75197 19.3923C4.66394 21.4665 6.2467 23.1928 8.25886 24.3081C10.271 25.4234 12.6021 25.8664 14.8966 25.5696C17.191 25.2727 19.323 24.2523 20.9671 22.664C22.6113 21.0756 23.6775 19.0066 24.0031 16.7723C24.3287 14.5381 23.8958 12.2613 22.7705 10.2893C21.6452 8.31735 19.8891 6.75834 17.7703 5.85012C15.6514 4.9419 13.286 4.73431 11.0349 5.25902L12.2152 7.72087C12.3119 7.92193 12.3476 8.1457 12.3183 8.3659C12.289 8.58609 12.1958 8.79355 12.0498 8.96389C11.9037 9.13424 11.7108 9.2604 11.4937 9.32754C11.2766 9.39468 11.0444 9.40002 10.8243 9.34292L4.80127 7.79396Z"
                fill="#9B9B9B"
              />
            </svg>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BuyOnThisSite;
