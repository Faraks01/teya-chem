import React from "react";
import styled from "@emotion/styled/macro";
import { Box } from "@mui/system";
import productPicture from "@/assets/images/product_bottle_picture.png";
import { PRODUCT } from "@/constants";

const ProductCard = (props) => {
  const { className } = props;

  return (
    <Box
      className={className}
      position="relative"
      width="296.66px"
      display="flex"
      flexDirection="column"
      alignItems="center"
      pb="14.78px"
      pl="24.3px"
      pr="24.98px"
      pt="9.86px"
    >
      <Box
        zIndex={3}
        top="25px"
        right="25.66px"
        position="absolute"
        width="75px"
        height="35px"
        backgroundColor="colors.nero"
        borderRadius="100px"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.5384 1.28871C13.4329 1.1057 13.2814 0.953792 13.0991 0.848193C12.9169 0.742594 12.7102 0.687012 12.4999 0.687012C12.2896 0.687012 12.0829 0.742594 11.9007 0.848193C11.7184 0.953792 11.5669 1.1057 11.4614 1.28871L8.20297 6.93825C8.09011 7.13365 7.93508 7.30107 7.74931 7.42815C7.56354 7.55524 7.35178 7.63875 7.12964 7.67252L1.02224 8.60002C-0.00306674 8.75702 -0.363244 10.0589 0.436349 10.7255L4.98539 14.5153C5.40559 14.8667 5.60369 15.421 5.50164 15.9608L4.31186 22.2468C4.2696 22.4701 4.29083 22.7008 4.37309 22.9124C4.45535 23.1241 4.59531 23.3081 4.77689 23.4433C4.95847 23.5786 5.17429 23.6595 5.39955 23.6769C5.62482 23.6942 5.85038 23.6473 6.05031 23.5415L11.8011 20.4957C12.0166 20.3817 12.2564 20.3221 12.4999 20.3221C12.7434 20.3221 12.9832 20.3817 13.1986 20.4957L18.9495 23.5415C19.1494 23.6473 19.375 23.6942 19.6002 23.6769C19.8255 23.6595 20.0413 23.5786 20.2229 23.4433C20.4045 23.3081 20.5444 23.1241 20.6267 22.9124C20.7089 22.7008 20.7302 22.4701 20.6879 22.2468L19.4981 15.9608C19.4477 15.6955 19.469 15.4213 19.5598 15.1671C19.6506 14.9128 19.8076 14.6877 20.0144 14.5153L24.5646 10.7243C25.363 10.0601 25.0028 8.75581 23.9763 8.60002L17.8713 7.67252C17.649 7.63892 17.437 7.55549 17.251 7.42839C17.065 7.3013 16.9098 7.13379 16.7968 6.93825L13.5384 1.28871Z"
            fill="#FFD43E"
          />
        </svg>

        <Box
          ml="5px"
          component="span"
          fontFamily="RoadRadio"
          fontWeight={700}
          fontSize={18}
          lineHeight="18.16px"
          color="colors.white"
        >
          4,9
        </Box>
      </Box>

      <Box
        component="img"
        alt="product picture"
        src={productPicture}
        width="147.84px"
        height="142.04px"
        zIndex={2}
      />

      <Box
        mt="20.47px"
        component="span"
        fontFamily="RoadRadio"
        fontWeight={700}
        fontSize={30}
        lineHeight="30.27px"
        color="colors.nero"
        zIndex={2}
      >
        ТЕЯ ДТ
      </Box>

      <Box
        mt="6px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="20px"
        width="60px"
        borderRadius="100px"
        sx={{ border: "1px solid #B8B8B8" }}
        zIndex={2}
      >
        <Box
          component="span"
          fontFamily="RoadRadio"
          fontWeight={700}
          fontSize={12}
          lineHeight="12.11px"
          textAlign="center"
          color="colors.nero"
        >
          {PRODUCT.variants.COMMON.volume} мл
        </Box>
      </Box>

      <Box
        mt="11px"
        component="span"
        fontWeight={500}
        fontSize={16}
        lineHeight="19.36px"
        textAlign="center"
        color="colors.gray33"
        zIndex={2}
      >
        Многофункциональная присадка для дизельных двигателей
      </Box>

      <Box
        mt="27.67px"
        component="span"
        fontFamily="RoadRadio"
        fontWeight={700}
        fontSize={20}
        lineHeight="20.18px"
        textAlign="center"
        color="colors.nero"
        zIndex={2}
      >
        {PRODUCT.variants.COMMON.price} руб
      </Box>

      <Box
        className="productCardButton"
        mt="30.48px"
        component="button"
        display="flex"
        justifyContent="center"
        alignItems="center"
        backgroundColor="#D7D7D7"
        borderRadius="18px"
        height="63.08px"
        width="247.38px"
        zIndex={2}
      >
        <Box
          className="productCardButtonText"
          component="span"
          fontSize={16}
          fontWeight={500}
          color="#545454"
          lineHeight="19px"
        >
          Заказать на сайте
        </Box>
      </Box>

      <Box position="absolute" top={0} bottom={0} left={0} right={0}>
        <svg
          width="297"
          height="453"
          viewBox="0 0 297 453"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 69.4991C0 63.0697 0 59.855 0.906708 56.8189C1.81342 53.7828 3.57628 51.0946 7.102 45.7182L24.2394 19.585C30.5243 10.0011 33.6668 5.20911 38.4894 2.60455C43.312 0 49.0425 0 60.5033 0H74.1655H148.331H253.296C273.739 0 283.961 0 290.311 6.35079C296.662 12.7016 296.662 22.923 296.662 43.3659V409.019C296.662 429.462 296.662 439.684 290.311 446.034C283.961 452.385 273.739 452.385 253.296 452.385H43.3659C22.923 452.385 12.7016 452.385 6.35079 446.034C0 439.684 0 429.462 0 409.019V226.193V113.096V69.4991Z"
            fill="white"
          />
        </svg>
      </Box>
    </Box>
  );
};

export default styled(ProductCard)`
  .productCardButton {
    &:hover {
      background-color: #3d3ad1;

      .productCardButtonText {
        color: white;
      }
    }
  }
`;
