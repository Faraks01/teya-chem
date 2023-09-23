import React from "react";
import { Box } from "@mui/system";
import fillingGunPicSrc from "../../assets/images/filling_gun_picture.png";
import sectionBgPicSrc from "../../assets/images/product_effect_explanation_bg.jpg";

const ProductEffectExplanation = () => {
  return (
    <Box
      component="section"
      display="flex"
      justifyContent="center"
      width="100%"
    >
      <Box
        pb={{ xs: "54px", md: "100px" }}
        display="flex"
        flexDirection="column"
        position="relative"
        width="100%"
        maxWidth="1354px"
        borderRadius="22px"
        backgroundColor="transparent"
        overflow={{ xs: "hidden", md: "auto" }}
      >
        <Box
          mt={{ xs: "64px", md: "54px" }}
          pl={{ xs: 0, md: "60px" }}
          pr={{ xs: 0, md: "77px" }}
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          alignItems={{ xs: "center", md: "flex-start" }}
          position="relative"
          zIndex={{ xs: 3, md: 1 }}
        >
          <Box
            ml={{ xs: "30px", md: 0 }}
            mr={{ xs: "auto", md: 0 }}
            component="span"
            fontFamily="RoadRadio"
            fontWeight={700}
            fontSize={{ xs: 30, md: 45 }}
            lineHeight={{ xs: "normal", md: "45px" }}
            color="colors.white"
          >
            Как работает присадка?
          </Box>

          <Box
            ml={{ xs: "16px", md: "76px" }}
            mr={{ xs: "16px", md: 0 }}
            mt={{ xs: "39px", md: 0 }}
            height={{ xs: "321px", md: "176px" }}
            width={{ xs: "269px", md: "522px" }}
            backgroundColor="transparent"
            position="relative"
            display="flex"
          >
            <Box
              position="absolute"
              zIndex={2}
              top={0}
              bottom={0}
              left={0}
              right={0}
              display="flex"
              flexDirection={{ xs: "column", md: "row" }}
              pl={{ xs: "18px", md: "33px" }}
              pr={{ xs: "18px", md: 0 }}
              pt={{ xs: "59px", md: "34px" }}
            >
              <Box width="44px" height="44px">
                <svg
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.84463 0.670553C17.923 -0.223518 26.0756 -0.223518 34.154 0.670553C38.896 1.19916 42.7243 4.9253 43.2798 9.68792C44.2401 17.8657 44.2401 26.1316 43.2798 34.3121C42.7217 39.0695 38.8934 42.7982 34.154 43.3294C26.0756 44.2235 17.923 44.2235 9.84463 43.3294C5.10267 42.7982 1.27432 39.0695 0.718886 34.3121C-0.239629 26.131 -0.239629 17.8663 0.718886 9.68532C1.27432 4.9253 5.10527 1.19916 9.84463 0.667962V0.670553ZM24.5948 11.6313C24.595 11.9716 24.528 12.3086 24.3977 12.623C24.2675 12.9375 24.0764 13.2232 23.8355 13.4639C23.5946 13.7047 23.3086 13.8957 22.9938 14.0261C22.6789 14.1564 22.3415 14.2236 22.0006 14.2238C21.3122 14.2241 20.6519 13.9515 20.1649 13.4658C19.678 12.9801 19.4042 12.3211 19.4038 11.6339C19.4038 10.9467 19.6773 10.2876 20.164 9.80165C20.6508 9.31571 21.311 9.04271 21.9993 9.04271C22.6877 9.04271 23.3479 9.31571 23.8346 9.80165C24.3214 10.2876 24.5948 10.9441 24.5948 11.6313ZM21.9993 18.7571C22.5156 18.7571 23.0107 18.9619 23.3758 19.3263C23.7408 19.6908 23.9459 20.1851 23.9459 20.7005V33.6565C23.9459 34.1719 23.7408 34.6662 23.3758 35.0307C23.0107 35.3951 22.5156 35.5999 21.9993 35.5999C21.483 35.5999 20.9879 35.3951 20.6229 35.0307C20.2578 34.6662 20.0527 34.1719 20.0527 33.6565V20.7005C20.0527 20.1851 20.2578 19.6908 20.6229 19.3263C20.9879 18.9619 21.483 18.7571 21.9993 18.7571Z"
                    fill="white"
                  />
                </svg>
              </Box>

              <Box
                mt={{ xs: "15px", md: 0 }}
                ml={{ xs: 0, md: "23px" }}
                component="span"
                fontWeight={500}
                fontSize={{ xs: 18, md: 22 }}
                lineHeight={{ xs: "normal", md: "26.63px" }}
                color="colors.white"
              >
                Присадка Тея-ДТ обладает многофункциональным набором воздействия
                на работу топливной аппаратуры автомобиля:
              </Box>
            </Box>

            <Box
              display={{ xs: "none", md: "block" }}
              position="absolute"
              zIndex={1}
              top={0}
              bottom={0}
              left={0}
              right={0}
            >
              <svg
                width="524"
                height="178"
                viewBox="0 0 524 178"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M407.25 0.5H79.6652H23C10.5736 0.5 0.5 10.5736 0.5 23V155C0.5 167.426 10.5736 177.5 23 177.5H501C513.426 177.5 523.5 167.426 523.5 155V139.5V62.8824C523.5 57.0548 521.239 51.4544 517.193 47.2604L478.716 7.37795C474.475 2.98268 468.63 0.5 462.523 0.5H407.25Z"
                  stroke="#CBCBCB"
                  strokeOpacity="0.6"
                />
              </svg>
            </Box>

            <Box
              display={{ xs: "block", md: "none" }}
              position="absolute"
              zIndex={1}
              top={0}
              bottom={0}
              left={0}
              right={0}
            >
              <svg
                width="269"
                height="321"
                viewBox="0 0 269 321"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M151.382 0.5H79.6652H23C10.5736 0.5 0.5 10.5736 0.5 23V298C0.5 310.426 10.5736 320.5 23 320.5H245.132C257.559 320.5 267.632 310.426 267.632 298V139.5V62.8824C267.632 57.0548 265.371 51.4544 261.325 47.2604L222.848 7.37795C218.608 2.98268 212.763 0.5 206.655 0.5H151.382Z"
                  stroke="#CBCBCB"
                  strokeOpacity="0.6"
                />
              </svg>
            </Box>
          </Box>
        </Box>

        <Box
          mt={{ xs: "69px", md: "74px" }}
          pl={{ xs: 0, md: "74px" }}
          display="flex"
          justifyContent={{ xs: "center", md: "flex-start" }}
          position="relative"
          zIndex={1}
        >
          <Box
            pl={{ xs: "20px", md: "31px" }}
            pt={{ xs: "49px", md: "45px" }}
            height={{ xs: "465px", md: "250px" }}
            width={{ xs: "262px", md: "681px" }}
            display="flex"
            justifyContent={{ xs: "center", md: "flex-start" }}
            borderRadius="22px"
            backgroundColor="rgba(40, 40, 40, 0.5)"
            sx={{
              backdropFilter: "blur(15px)",
            }}
          >
            <Box component="ul" pl="31px" pr={{ xs: "20px", md: "31px" }} m={0}>
              <Box
                component="li"
                fontWeight={500}
                fontSize={{ xs: 18, md: 22 }}
                lineHeight={{ xs: "normal", md: "26.63px" }}
                color="colors.white"
              >
                снижает расход и потребление дизельного топлива во время
                эксплуатации автомобиля, за счёт более полного и быстрого
                сгорания дизельного топлива в камерах сгорания поршневой группы
                двигателя, что повышает мощность двигателя и приводит к более
                экономному расходу топлива.
              </Box>
            </Box>
          </Box>

          <Box display={{ xs: "none", md: "block" }} mt="55.71px" ml="152.79px">
            <svg
              width="155"
              height="63"
              viewBox="0 0 155 63"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.41302 1.70532C9.95092 4.39194 6.32979 14.5518 13.8677 17.2384C21.4056 19.925 25.0267 9.76517 32.5646 12.4518C40.1025 15.1384 36.4814 25.2983 44.0016 27.9786C51.5397 30.6653 55.1608 20.5054 62.6808 23.1857C70.2189 25.8723 66.5978 36.0322 74.1178 38.7124C81.6558 41.3991 85.277 31.2392 92.8145 33.9257C100.353 36.6124 96.7314 46.7723 104.269 49.4589C111.807 52.1454 115.428 41.9855 122.966 44.6722C130.504 47.3589 126.883 57.5188 134.421 60.2055C141.959 62.8919 145.58 52.7321 153.118 55.4187"
                stroke="#CACACA"
                strokeWidth="3"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
            </svg>
          </Box>
        </Box>

        <Box
          position="relative"
          zIndex={3}
          mt={{ xs: "17px", md: "44px" }}
          ml={{ xs: 0, md: "581px" }}
          pt={{ xs: "49px", md: "59px" }}
          pl={{ xs: 0, md: "54px" }}
          height={{ xs: "391px", md: "250px" }}
          width={{ xs: "262px", md: "681px" }}
          borderRadius="22px"
          backgroundColor="rgba(84, 84, 84, 0.5)"
          display="flex"
          justifyContent={{ xs: "center", md: "flex-start" }}
          alignSelf={{ xs: "center", md: "auto" }}
          sx={{
            backdropFilter: "blur(15px)",
          }}
        >
          <Box component="ul" pl="31px" pr={{ xs: "20px", md: "31px" }} m={0}>
            <Box
              component="li"
              fontWeight={500}
              fontSize={{ xs: 18, md: 22 }}
              lineHeight={{ xs: "normal", md: "26.63px" }}
              color="colors.white"
            >
              обеспечивает противоизносный эффект, за счет создания на
              поверхности трущихся деталей топливной аппаратуры адсорбционной
              пленки, улучшающей смазывающие свойства дизельного топлива.
            </Box>
          </Box>
        </Box>

        <Box
          mt={{ xs: "17px", md: "44px" }}
          ml={{ xs: 0, md: "159px" }}
          pt={{ xs: "49px", md: "61px" }}
          pl={{ xs: 0, md: "54px" }}
          position="relative"
          zIndex={1}
          height={{ xs: "264px", md: "198px" }}
          width={{ xs: "262px", md: "681px" }}
          borderRadius="22px"
          backgroundColor="rgba(40, 40, 40, 0.5)"
          display="flex"
          justifyContent={{ xs: "center", md: "flex-start" }}
          alignSelf={{ xs: "center", md: "auto" }}
          sx={{
            backdropFilter: "blur(15px)",
          }}
        >
          <Box component="ul" pl="31px" pr={{ xs: "20px", md: "31px" }} m={0}>
            <Box
              component="li"
              fontWeight={500}
              fontSize={{ xs: 18, md: 22 }}
              lineHeight={{ xs: "normal", md: "26.63px" }}
              color="colors.white"
            >
              обеспечивает депрессорный эффект, за счёт блокирования роста
              кристаллов парафиновых углеводородов в дизельном топливе
            </Box>
          </Box>
        </Box>

        <Box
          mt={{ xs: "17px", md: "44px" }}
          pl={{ xs: 0, md: "213px" }}
          display="flex"
          position="relative"
          justifyContent={{ xs: "center", md: "flex-start" }}
          zIndex={1}
        >
          <Box display={{ xs: "none", md: "block" }} mt="123px">
            <svg
              width="134"
              height="70"
              viewBox="0 0 134 70"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 64.9644C8.49876 61.815 12.7435 70.5743 19.2423 67.425C25.7411 64.2757 21.4963 55.5164 27.995 52.3671C34.4938 49.2177 38.7386 57.977 45.2221 54.8351C51.7211 51.6857 47.4763 42.9264 53.9596 39.7845C60.4585 36.6351 64.7033 45.3944 71.1867 42.2526C77.6856 39.1032 73.4408 30.3439 79.9392 27.1947C86.4381 24.0453 90.6829 32.8046 97.1818 29.6552C103.68 26.5061 99.4354 17.7468 105.934 14.5974C112.433 11.448 116.678 20.2073 123.177 17.0579C129.675 13.9087 125.431 5.14945 131.929 2.00006"
                stroke="#CACACA"
                strokeWidth="3"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
            </svg>
          </Box>

          <Box ml={{ xs: 0, md: "233.83px" }}>
            <Box
              pt={{ xs: "49px", md: "56px" }}
              pl={{ xs: 0, md: "62px" }}
              height={{ xs: "318px", md: "223px" }}
              width={{ xs: "262px", md: "681px" }}
              borderRadius="22px"
              backgroundColor="rgba(84, 84, 84, 0.5)"
              display="flex"
              justifyContent={{ xs: "center", md: "flex-start" }}
              sx={{
                backdropFilter: "blur(15px)",
              }}
            >
              <Box
                component="ul"
                pl="31px"
                pr={{ xs: "20px", md: "31px" }}
                m={0}
              >
                <Box
                  component="li"
                  fontWeight={500}
                  fontSize={{ xs: 18, md: 22 }}
                  lineHeight={{ xs: "normal", md: "26.63px" }}
                  color="colors.white"
                >
                  обеспечивает антидымный эффект, за счёт снижения токсичных
                  компонентов сгорания дизельного топлива, таких как сажа, в
                  отработанных газах дизельных двигателей.
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          top={{ xs: 0, md: 537 }}
          left={{ xs: 195, md: 235 }}
          position="absolute"
          component="img"
          src={fillingGunPicSrc}
          height={239}
          width={365}
          alt="filling gun picture"
          zIndex={2}
        />

        <Box
          top={0}
          bottom={0}
          left={0}
          right={0}
          borderRadius="22px"
          position="absolute"
          component="img"
          src={sectionBgPicSrc}
          height="100%"
          width="100%"
          alt="product effect section background"
          zIndex={0}
        />
      </Box>
    </Box>
  );
};

export default ProductEffectExplanation;
