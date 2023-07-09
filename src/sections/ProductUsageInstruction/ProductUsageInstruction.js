import React, {useContext} from "react";
import {Box} from "@mui/system";
import Grid from "@mui/system/Unstable_Grid";
import {stepCardsData} from "./stepCardsData";
import InstructionStepCard from "./InstructionStepCard";
import {PriceCalculatorContext} from "../../components/PriceCalculator/PriceCalculator";

const ProductUsageInstruction = () => {

  const {
    changeDialogState
  } = useContext(PriceCalculatorContext);

  const openCalculatorDialog = () => changeDialogState(true);

  return (
    <Box
      pt="122px"
      component='section'
      display="flex"
      justifyContent="center"
      width="100%">
      <Box
        ml="7px"
        display="flex"
        flexDirection="column"
        position="relative"
        width="100%"
        maxWidth="1243px">
        <Box
          component="span"
          fontFamily="RoadRadio"
          fontWeight={700}
          fontSize={45}
          lineHeight="45.4px"
          color="colors.nero"
        >
          Инструкция по применению
        </Box>

        <Box
          mt="54px"
          height={147}
          width={775}
          pl="41px"
          pt="37px"
          display="flex"
          position="relative"
        >
          <Box
            mt="6px"
            width={49}
            height={49}
            display="flex"
            position="relative"
            zIndex={2}
          >
            <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M24.4657 20.8913C25.0399 20.8913 25.5905 21.1193 25.9965 21.5251C26.4025 21.931 26.6306 22.4815 26.6306 23.0555V37.4837C26.6306 38.0577 26.4025 38.6082 25.9965 39.0141C25.5905 39.42 25.0399 39.648 24.4657 39.648C23.8915 39.648 23.3409 39.42 22.9349 39.0141C22.5289 38.6082 22.3008 38.0577 22.3008 37.4837V23.0555C22.3008 22.4815 22.5289 21.931 22.9349 21.5251C23.3409 21.1193 23.8915 20.8913 24.4657 20.8913ZM24.4657 15.8414C25.2312 15.8414 25.9654 15.5373 26.5068 14.9962C27.0481 14.455 27.3522 13.721 27.3522 12.9557C27.3522 12.1904 27.0481 11.4564 26.5068 10.9153C25.9654 10.3741 25.2312 10.0701 24.4657 10.0701C23.7002 10.0701 22.966 10.3741 22.4247 10.9153C21.8833 11.4564 21.5792 12.1904 21.5792 12.9557C21.5792 13.721 21.8833 14.455 22.4247 14.9962C22.966 15.5373 23.7002 15.8414 24.4657 15.8414Z"
                fill="#545454"/>
              <path fillRule="evenodd" clipRule="evenodd"
                    d="M10.9484 0.746753C19.9324 -0.248918 28.9991 -0.248918 37.9831 0.746753C43.2567 1.33543 47.5143 5.48499 48.132 10.7888C49.2 19.8959 49.2 29.1012 48.132 38.2112C47.5114 43.5092 43.2539 47.6617 37.9831 48.2532C28.9991 49.2489 19.9324 49.2489 10.9484 48.2532C5.67475 47.6617 1.41719 43.5092 0.799483 38.2112C-0.266494 29.1005 -0.266494 19.8966 0.799483 10.7859C1.41719 5.48499 5.67764 1.33542 10.9484 0.743867V0.746753ZM37.504 5.04637C28.8384 4.08613 20.0931 4.08613 11.4275 5.04637C9.82375 5.22416 8.32675 5.93713 7.1782 7.07015C6.02966 8.20318 5.29662 9.69014 5.09745 11.2909C4.07087 20.0661 4.07087 28.931 5.09745 37.7062C5.29723 39.3064 6.03053 40.7927 7.17902 41.9252C8.32751 43.0576 9.82419 43.7702 11.4275 43.9478C20.0206 44.9087 28.9109 44.9087 37.504 43.9478C39.1068 43.7696 40.6028 43.0567 41.7507 41.9243C42.8986 40.7919 43.6315 39.306 43.8311 37.7062C44.8578 28.931 44.8578 20.0661 43.8311 11.2909C43.6321 9.69057 42.8995 8.20395 41.7515 7.07098C40.6036 5.938 39.1072 5.22477 37.504 5.04637Z"
                    fill="#545454"/>
            </svg>
          </Box>

          <Box
            ml="31.07px"
            component="span"
            fontWeight={500}
            fontSize={20}
            lineHeight="24.2px"
            color="colors.nero"
            position="relative"
            zIndex={2}
          >
            Меры предосторожности!<br/>
            Горючая жидкость! Беречь от воздействия прямых<br/>
            солнечных лучей. Хранить при температуре не выше 50C
          </Box>

          <Box
            position="absolute"
            top={0}
            bottom={0}
            left={0}
            right={0}
          >
            <svg width="775" height="147" viewBox="0 0 775 147" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0 103V44C0 23.2582 0 12.8873 6.44365 6.44365C12.8873 0 23.2582 0 44 0H731C751.742 0 762.113 0 768.556 6.44365C775 12.8873 775 23.2582 775 44V79.1012C775 87.5373 775 91.7554 773.51 95.5949C772.021 99.4343 769.176 102.549 763.486 108.777L763.486 108.777L741.654 132.676C735.208 139.732 731.986 143.26 727.745 145.13C723.504 147 718.725 147 709.168 147H647.562H546.797H44C23.2582 147 12.8873 147 6.44365 140.556C0 134.113 0 123.742 0 103Z"
                fill="white"/>
            </svg>
          </Box>
        </Box>

        <Box
          height="108.33px"
        />

        <Grid container>
          {stepCardsData.map((data, index) => {
            const key = data.key + "___" + index;

            return (
              <Grid
                key={key}
                cardKey={data.key}
                sm={6}
                md={3}
              >
                <InstructionStepCard
                  description={data.description}
                  pictureSrc={data.pictureSrc}
                  pictureAltDescription={data.pictureAltDescription}
                  additionalDescription={data.additionalDescription}
                />
              </Grid>
            );
          })}
        </Grid>

        <Box
          mt="91px"
          pt="24px"
          pb='16px'
          pr='42px'
          pl='42px'
          display='flex'
          flexDirection='column'
          alignItems='center'
          width='100%'
          borderRadius='22px'
          sx={{
            border: '1px solid #B8B8B8'
          }}
        >

          <Box
            component="span"
            fontWeight={500}
            fontSize={20}
            lineHeight="24.2px"
            color="colors.nero"
            textAlign='center'
          >
            Вы можете самостоятельно расчитать дозировку, а так же увидеть реальную<br/>
            экономию, воспользовавшись калькулятором
          </Box>

          <Box
            mt='25px'
            component='button'
            display='flex'
            alignItems='center'
            justifyContent='center'
            backgroundColor='colors.blurple'
            borderRadius='17.7px'
            height='69px'
            width='100%'
            onClick={openCalculatorDialog}
          >
            <Box
              component="span"
              fontFamily="RoadRadio"
              fontSize='17.74px'
              fontWeight={700}
              color="colors.white"
              lineHeight="19.9px"
            >
              Открыть калькулятор
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default ProductUsageInstruction
