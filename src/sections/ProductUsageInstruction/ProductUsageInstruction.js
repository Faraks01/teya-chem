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
      pt={{xs: '85px', md: '122px'}}
      component='section'
      display="flex"
      justifyContent="center"
      width="100%">
      <Box
        ml="7px"
        display="flex"
        flexDirection="column"
        alignItems={{xs: 'center', md: 'flex-start'}}
        position="relative"
        width="100%"
        maxWidth="1243px">
        <Box
          textAlign={{xs: 'center', md: 'left'}}
          component="span"
          fontFamily="RoadRadio"
          fontWeight={700}
          fontSize={{xs: 30, md: 45}}
          lineHeight={{xs: 'normal', md: '45.4px'}}
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
          display={{xs: 'none', md: 'flex'}}
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
            Меры предосторожности! <br/>
            Горючая жидкость! Беречь от воздействия прямых <br/>
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
          mt="54px"
          height={285}
          width={300}
          pl="24px"
          pr="24px"
          pt="37px"
          display={{xs: 'flex', md: 'none'}}
          flexDirection='column'
          position="relative"
        >
          <Box
            width={36}
            height={36}
            display="flex"
            position="relative"
            zIndex={2}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="36" viewBox="0 0 35 36" fill="none">
              <path d="M17.4994 14.9426C17.9101 14.9426 18.3039 15.1057 18.5943 15.396C18.8847 15.6863 19.0479 16.0801 19.0479 16.4906V26.8106C19.0479 27.2212 18.8847 27.6149 18.5943 27.9053C18.3039 28.1956 17.9101 28.3586 17.4994 28.3586C17.0887 28.3586 16.6949 28.1956 16.4045 27.9053C16.1141 27.6149 15.951 27.2212 15.951 26.8106V16.4906C15.951 16.0801 16.1141 15.6863 16.4045 15.396C16.6949 15.1057 17.0887 14.9426 17.4994 14.9426ZM17.4994 11.3306C18.047 11.3306 18.5721 11.1132 18.9593 10.7261C19.3465 10.339 19.564 9.81404 19.564 9.26664C19.564 8.71923 19.3465 8.19424 18.9593 7.80717C18.5721 7.42009 18.047 7.20264 17.4994 7.20264C16.9518 7.20264 16.4267 7.42009 16.0395 7.80717C15.6523 8.19424 15.4348 8.71923 15.4348 9.26664C15.4348 9.81404 15.6523 10.339 16.0395 10.7261C16.4267 11.1132 16.9518 11.3306 17.4994 11.3306Z" fill="#CC0000"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M7.83096 0.534125C14.2569 -0.178042 20.742 -0.178042 27.168 0.534125C30.94 0.955181 33.9852 3.92321 34.4271 7.71685C35.191 14.2308 35.191 20.815 34.4271 27.331C33.9832 31.1206 30.9379 34.0906 27.168 34.5138C20.742 35.226 14.2569 35.226 7.83096 34.5138C4.05894 34.0906 1.01366 31.1206 0.571841 27.331C-0.190614 20.8145 -0.190614 14.2313 0.571841 7.71478C1.01366 3.92321 4.06101 0.955181 7.83096 0.532061V0.534125ZM26.8252 3.60949C20.627 2.92266 14.3719 2.92266 8.17368 3.60949C7.02657 3.73665 5.95582 4.24661 5.13431 5.05702C4.3128 5.86744 3.78848 6.931 3.64602 8.07598C2.91175 14.3525 2.91175 20.6933 3.64602 26.9698C3.78891 28.1145 4.31342 29.1775 5.13489 29.9875C5.95637 30.7975 7.02688 31.3072 8.17368 31.4343C14.32 32.1216 20.6789 32.1216 26.8252 31.4343C27.9717 31.3068 29.0417 30.7969 29.8628 29.987C30.6838 29.177 31.208 28.1141 31.3508 26.9698C32.0851 20.6933 32.0851 14.3525 31.3508 8.07598C31.2085 6.93131 30.6844 5.86799 29.8633 5.05761C29.0422 4.24724 27.972 3.73709 26.8252 3.60949Z" fill="#CC0000"/>
            </svg>
          </Box>

          <Box
            mt='21px'
            component="span"
            fontWeight={500}
            fontSize={18}
            lineHeight="normal"
            color="colors.nero"
            position="relative"
            zIndex={2}
          >
            Меры предосторожности! <br/>
            Горючая жидкость! Беречь <br/>
            от воздействия прямых <br/>
            солнечных лучей.
          </Box>

          <Box
            mt='21px'
            component="span"
            fontWeight={500}
            fontSize={18}
            lineHeight="normal"
            color="colors.nero"
            position="relative"
            zIndex={2}
          >
            Хранить при температуре не выше 50C
          </Box>

          <Box
            position="absolute"
            top={0}
            bottom={0}
            left={0}
            right={0}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="300" height="285" viewBox="0 0 300 285" fill="none">
              <path d="M0 241.009V36.7616V22C0 9.84973 9.84973 0 22 0H278C290.15 0 300 9.84975 300 22V47.0066V263C300 275.15 290.15 285 278 285H53.3873C48.8702 285 44.4627 283.61 40.7633 281.018L9.376 259.026C3.49937 254.909 0 248.184 0 241.009Z" fill="#FFE898"/>
            </svg>
          </Box>
        </Box>

        <Box
          height={{xs: '67px', md: '108.33px'}}
        />

        <Grid
          justifyContent={{xs: 'center', md: 'flex-start'}}
          spacing='21px'
          container>
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
          mt={{xs: '40px', md: '91px'}}
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
            Вы можете самостоятельно расчитать дозировку, а так же увидеть реальную <br/>
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
