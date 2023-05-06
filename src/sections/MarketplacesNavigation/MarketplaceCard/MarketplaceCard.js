import React from "react";
import styled from '@emotion/styled/macro';
import {Box} from "@mui/system";

const MarketplaceCard = (props) => {
  const {
    className = "",
    iconSrc = "",
    iconAltText = "",
    description,
    discount = 0
  } = props;

  return (
    <Box
      component="button"
      className={className}
      height={{xs: 126, lg: 196}}
      width="100%"
      position="relative"
      display="flex"
    >
      <Box
        mt="auto"
        height={{xs: 102, lg: 170.5}}
        flex={1}
        display="flex"
        alignItems="center"
        backgroundColor="transparent"
        position="relative"
        zIndex={10}
      >
        <Box
          ml={{xs: "5px", lg: "30.98px"}}
          component="img"
          alt={iconAltText}
          src={iconSrc}
          width={{xs: 77.35, lg: 108.38}}
          height={{xs: 77.35, lg: 108.38}}
        />

        <Box
          ml={{xs: "20.65px", lg: "28.14px"}}
          component="span"
          fontFamily="RoadRadio"
          fontWeight={400}
          fontSize={{xs: 18, lg: 34.96}}
          lineHeight={{xs: "18.16px", lg: "35.28px"}}
          color="colors.nero"
        >
          {description}
        </Box>
      </Box>

      <Box
        className="backgroundPillow"
        position="absolute"
        top={0}
        bottom={0}
        left={0}
        right={0}
        display={{xs: "none", lg: "flex"}}
        justifyContent="flex-start"
        alignItems="flex-end"
      >
        <svg width="626" height="171" viewBox="0 0 626 171" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M115.773 0.5H330.5H603.5C615.65 0.5 625.5 10.3497 625.5 22.5V123.681C625.5 130.219 622.592 136.418 617.565 140.597L587.114 165.916C583.163 169.201 578.187 171 573.049 171H484.5H22.5C10.3497 171 0.5 161.15 0.5 149V65.6611C0.5 61.3177 1.78564 57.0715 4.1949 53.4577L20.9689 28.2966C25.0492 22.1762 31.9183 18.5 39.274 18.5H74.2274C78.3275 18.5 82.3459 17.3543 85.8294 15.1921L104.171 3.80792C107.654 1.64572 111.673 0.5 115.773 0.5Z"
            fill="white"/>
        </svg>
      </Box>

      {!!discount && (
        <Box
          className="discountLabel"
          position="absolute"
          height={48}
          width={115.38}
          left="483.5px"
          bottom="148.22px"
          borderRadius={14}
          sx={{
            background: "linear-gradient(255.03deg, #F41F1F 22.32%, #B30000 94.02%)"
          }}
          display={{xs: "none", lg: "flex"}}
          justifyContent="center"
          alignItems="center"
        >
          <Box
            component="span"
            fontFamily="RoadRadio"
            fontWeight={400}
            fontSize="25.64px"
            lineHeight="25.87px"
            color="colors.white"
          >
            -{discount}%
          </Box>
        </Box>
      )}

      <Box
        className="backgroundPillow"
        position="absolute"
        top={0}
        bottom={0}
        left={0}
        right={0}
        display={{xs: "flex", lg: "none"}}
        justifyContent="flex-start"
        alignItems="flex-end"
      >
        <svg width="306" height="102" viewBox="0 0 306 102" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M61.5737 0H167.176H284C296.15 0 306 9.84975 306 22V72.7478C306 79.2271 303.144 85.3771 298.193 89.5572L289.604 96.8094C285.634 100.161 280.606 102 275.411 102H245.192H22C9.84974 102 0 92.1503 0 80V36.6714C0 32.3811 1.25445 28.1844 3.60895 24.5979L7.16142 19.1866C11.2285 12.9913 18.1415 9.26008 25.5525 9.26008H34.1726C38.3244 9.26008 42.3914 8.08529 45.9036 5.87146L49.8427 3.38862C53.355 1.17479 57.422 0 61.5737 0Z"
            fill="white"/>
        </svg>
      </Box>
    </Box>
  );
}

export default styled(MarketplaceCard)`
  .discountLabel,
  .backgroundPillow {
    opacity: 0;
    transition: 300ms;
  }

  &:hover {
    .discountLabel,
    .backgroundPillow {
      opacity: 1;
    }
  }
`;
