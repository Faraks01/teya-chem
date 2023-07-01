import React from "react";
import {Box} from "@mui/system";
import feedbackAuthorPicture1 from '../../assets/images/feedback_author_1.png';
import feedbackAuthorPicture2 from '../../assets/images/feedback_author_2.png';
import playIcon from "../../assets/vectors/play_icon.svg";

export const FEEDBACKS_SECTION_ID = 'feedbacks';

const Feedbacks = () => {
  return (
    <Box
      id={FEEDBACKS_SECTION_ID}
      mt='122px'
      display='flex'
      justifyContent='center'
      width='100%'>
      <Box
        display="flex"
        flexDirection="column"
        position="relative"
        width="100%"
        maxWidth="1236px">
        <Box
          component="span"
          fontFamily="RoadRadio"
          fontWeight={700}
          fontSize={45}
          lineHeight="45.4px"
          color="colors.nero"
        >
          Отзывы
        </Box>

        <Box
          mt='50px'
          position='relative'
          width='100%'
          display='flex'
          flexDirection='column'
          pt='49px'
          pl='51px'
        >
          <Box
            zIndex={2}
            component="span"
            fontFamily="RoadRadio"
            fontWeight={700}
            fontSize={30}
            lineHeight="30.27px"
            color="colors.nero"
          >
            Александр
          </Box>

          <Box
            zIndex={2}
            mt='41px'
            component="span"
            fontWeight={500}
            fontSize={22}
            lineHeight="26.63px"
            color="colors.gray33"
          >
            Использовал несколько месяцев, в порядке<br/>
            испытаний, присадку на своём Volskwagen<br/>
            Amarok. Машине 10 лет, механика, полный привод,<br/>
            2,0 л. Заметил снижение шумности двигателя и<br/>
            расхода потребления ДТ. Расход в городе без<br/>
            присадки около 10 л а с присадкой около 8 л на<br/>
            100 км. Фильтра чистые. Проверял сам.
          </Box>

          <Box
            zIndex={2}
            mt='54px'
            width='100%'
            display='flex'
          >
            <Box
              component='button'
              display='flex'
              justifyContent='center'
              alignItems='center'
              borderRadius='22px'
              height='94px'
              width='345px'
              sx={{border: '1px solid #D3D3D3'}}
            >
              <Box
                component="span"
                fontWeight={500}
                fontSize={22}
                lineHeight="26.63px"
                color="colors.gray33"
              >
                Следующий отзыв
              </Box>

              <Box
                ml='34px'
                display='flex'
                justifyContent='center'
                alignItems='center'
                height='57px'
                width='57px'
                borderRadius='17.74px'
                backgroundColor='colors.blurple'
              >
                <svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd"
                        d="M0.475856 0.460893C0.756187 0.165768 1.13619 0 1.53239 0C1.92859 0 2.30859 0.165768 2.58892 0.460893L10.5628 8.86598C10.8427 9.16147 11 9.56202 11 9.97965C11 10.3973 10.8427 10.7978 10.5628 11.0933L2.58892 19.4984C2.45205 19.6532 2.28699 19.7774 2.10359 19.8636C1.92019 19.9497 1.72222 19.996 1.52147 19.9998C1.32072 20.0035 1.12132 19.9646 0.935153 19.8853C0.748987 19.806 0.579876 19.6881 0.437904 19.5384C0.295933 19.3888 0.18401 19.2105 0.108815 19.0143C0.0336193 18.818 -0.00330927 18.6079 0.000232676 18.3962C0.00377462 18.1846 0.0477144 17.976 0.12943 17.7826C0.211146 17.5893 0.328965 17.4153 0.475856 17.2711L7.39316 9.97965L0.475856 2.68824C0.195874 2.39275 0.0386104 1.9922 0.0386104 1.57457C0.0386104 1.15694 0.195874 0.756385 0.475856 0.460893Z"
                        fill="white"/>
                </svg>
              </Box>
            </Box>

            <Box
              ml='auto'
              mr='102.5px'
              component='button'
              display='flex'
              justifyContent='center'
              alignItems='center'
              borderRadius='22px'
              height='94px'
              width='346px'
              sx={{border: '1px solid #D3D3D3'}}
            >
              <Box
                component="span"
                fontFamily="RoadRadio"
                fontWeight={400}
                fontSize={22}
                lineHeight="22.2px"
                color="colors.nero"
                textAlign='center'
              >
                Смотреть<br/>
                видео-отзывы
              </Box>
            </Box>
          </Box>

          <Box
            zIndex={4}
            position='absolute'
            bottom='179.73px'
            right='236.51px'
            display='flex'
            component='button'
          >
            <Box
              component='img'
              alt='feedback author picture'
              src={feedbackAuthorPicture1}
              width="286.99px"
              height="350.55px"
            />

            <Box
              zIndex={1}
              position='absolute'
              top={0}
              bottom={0}
              left={0}
              right={0}
              display='flex'
              justifyContent='center'
              alignItems="center"
            >
              <Box
                component='img'
                alt='play icon'
                src={playIcon}
              />
            </Box>
          </Box>

          <Box
            zIndex={3}
            position='absolute'
            bottom='249.45px'
            right='80.5px'
            display='flex'
            component='button'
          >
            <Box
              component='img'
              alt='feedback author picture'
              src={feedbackAuthorPicture2}
              width="286.99px"
              height="350.55px"
            />

            <Box
              zIndex={1}
              position='absolute'
              top={0}
              bottom={0}
              left={0}
              right={0}
              display='flex'
              justifyContent='center'
              alignItems="center"
            >
              <Box
                component='img'
                alt='play icon'
                src={playIcon}
              />
            </Box>
          </Box>

          <Box
            position='absolute'
            top={0}
            bottom={0}
            left={0}
            right={0}
          >
            <svg width="1236" height="505" viewBox="0 0 1236 505" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0 433.396V22C0 9.84974 9.84977 0 22 0H1214C1226.15 0 1236 9.84973 1236 22V412.006C1236 417.008 1234.3 421.861 1231.17 425.765L1174.27 496.759C1170.09 501.968 1163.78 505 1157.1 505H971.306H48.2919H22C9.84974 505 0 495.15 0 483V433.396Z"
                fill="white"/>
            </svg>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Feedbacks
