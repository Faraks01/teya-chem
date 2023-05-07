import React from "react";
import {Box} from "@mui/system";
import wildberriesLogoSrc from "../../assets/images/wildberries_logo.png";
import yandexMarketLogoSrc from "../../assets/images/ya_market_logo.png";
import ozonLogoSrc from "../../assets/images/ozon_logo.png";
import sberMarketLogoSrc from "../../assets/images/sb_market_logo.png";
import MarketplaceCard from "./MarketplaceCard";
import Grid from "@mui/system/Unstable_Grid";

const marketplacesCardsPayload = [
  {
    iconSrc: wildberriesLogoSrc,
    iconAltText: "Wildberries logo",
    description: <>Перейти <br/>в Wildberries</>,
    discount: 0
  },
  {
    iconSrc: yandexMarketLogoSrc,
    iconAltText: "Yandex Market logo",
    description: <>Перейти <br/>в Яндекс Маркет</>,
    discount: 20
  },
  {
    iconSrc: ozonLogoSrc,
    iconAltText: "Ozon logo",
    description: <>Перейти <br/>в Ozon</>,
    discount: 0
  },
  {
    iconSrc: sberMarketLogoSrc,
    iconAltText: "SberMarket logo",
    description: <>Перейти <br/>в СберМаркет</>,
    discount: 0
  }
];

const MarketplacesNavigation = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      width="100%"
    >
      <Box
        display="flex"
        flexDirection="column"
        width="100%"
        maxWidth="1294.96px">
        <Box
          pr="30.98px"
          pl="30.98px"
        >
          <Box
            component="span"
            fontFamily="RoadRadio"
            fontWeight={500}
            fontSize={45}
            lineHeight="45px"
            color="colors.nero"
          >
            Покупай онлайн со скидками!
          </Box>
        </Box>

        <Box
          mt="10px"
          pr="30.98px"
          pl="30.98px"
        >
          <Box
            component="span"
            fontWeight={500}
            fontSize={30}
            lineHeight="36px"
            color="colors.gray33"
          >
            Мы на маркетплейсах
          </Box>
        </Box>

        <Box
          mt="30px"
        >
          <Grid container>
            {marketplacesCardsPayload.map(p => (
              <Grid
                item
                xs={12}
                md={6}
                key={p.description}
              >
                <MarketplaceCard
                  iconSrc={p.iconSrc}
                  iconAltText={p.iconAltText}
                  description={p.description}
                  discount={p.discount}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  )
}

export default MarketplacesNavigation
