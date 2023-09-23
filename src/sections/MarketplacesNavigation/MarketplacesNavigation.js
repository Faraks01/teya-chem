import React from "react";
import { Box } from "@mui/system";
import wildberriesLogoSrc from "../../assets/images/wildberries_logo.png";
import yandexMarketLogoSrc from "../../assets/images/ya_market_logo.png";
import ozonLogoSrc from "../../assets/images/ozon_logo.png";
import sberMarketLogoSrc from "../../assets/images/sb_market_logo.png";
import MarketplaceCard from "./MarketplaceCard";
import Grid from "@mui/system/Unstable_Grid";

const marketplacesCardsPayload = [
  {
    key: "Wildberries card",
    iconSrc: wildberriesLogoSrc,
    iconAltText: "Wildberries logo",
    description: (
      <>
        Перейти <br />в Wildberries
      </>
    ),
    discount: 0,
  },
  {
    key: "Yandex Market card",
    iconSrc: yandexMarketLogoSrc,
    iconAltText: "Yandex Market logo",
    description: (
      <>
        Перейти <br />в Яндекс Маркет
      </>
    ),
    discount: 20,
  },
  {
    key: "Ozon card",
    iconSrc: ozonLogoSrc,
    iconAltText: "Ozon logo",
    description: (
      <>
        Перейти <br />в Ozon
      </>
    ),
    discount: 0,
  },
  {
    key: "SberMarket card",
    iconSrc: sberMarketLogoSrc,
    iconAltText: "SberMarket logo",
    description: (
      <>
        Перейти <br />в СберМаркет
      </>
    ),
    discount: 0,
  },
];

const MarketplacesNavigation = () => {
  return (
    <Box
      component="section"
      display="flex"
      justifyContent="center"
      width="100%"
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems={{ xs: "center", md: "flex-start" }}
        width="100%"
        maxWidth="1294.96px"
      >
        <Box
          pr={{ xs: 0, md: "30.98px" }}
          pl={{ xs: 0, md: "30.98px" }}
          textAlign={{ xs: "center", md: "left" }}
          component="span"
          fontFamily="RoadRadio"
          fontWeight={{ xs: 700, md: 500 }}
          fontSize={{ xs: 30, md: 45 }}
          lineHeight={{ xs: "normal", md: "45px" }}
          color="colors.nero"
        >
          Покупай онлайн со скидками!
        </Box>

        <Box
          mt={{ xs: "20px", md: "10px" }}
          pr={{ xs: 0, md: "30.98px" }}
          pl={{ xs: 0, md: "30.98px" }}
          component="span"
          fontWeight={500}
          fontSize={30}
          lineHeight="36px"
          color="colors.gray33"
        >
          Мы на маркетплейсах
        </Box>

        <Box mt={{ xs: "22px", md: "30px" }}>
          <Grid width="100%" container spacing={{ xs: "33px", md: "21.79px" }}>
            {marketplacesCardsPayload.map((p) => (
              <Grid xs={12} xsOffset="auto" md={6} key={p.key}>
                <Box
                  display="flex"
                  justifyContent={{ xs: "center", md: "flex-start" }}
                >
                  <MarketplaceCard
                    iconSrc={p.iconSrc}
                    iconAltText={p.iconAltText}
                    description={p.description}
                    discount={p.discount}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default MarketplacesNavigation;
