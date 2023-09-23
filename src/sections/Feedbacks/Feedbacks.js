import React from "react";
import { Box, Stack } from "@mui/system";
import feedbackAuthorPicture1 from "../../assets/images/feedback_author_1.png";
import feedbackAuthorPicture2 from "../../assets/images/feedback_author_2.png";
import playIcon from "../../assets/vectors/play_icon.svg";

export const FEEDBACKS_SECTION_ID = "feedbacks";

const Feedbacks = () => {
  return (
    <Box
      id={FEEDBACKS_SECTION_ID}
      mt={{ xs: "85px", md: "122px" }}
      component="section"
      display="flex"
      justifyContent="center"
      width="100%"
    >
      <Stack
        alignItems={{ xs: "center", md: "flex-start" }}
        position="relative"
        width="100%"
        maxWidth="1236px"
      >
        <Box
          component="span"
          fontFamily="RoadRadio"
          fontWeight={700}
          fontSize={{ xs: 30, md: 45 }}
          lineHeight={{ xs: "normal", md: "45.4px" }}
          color="colors.nero"
        >
          Отзывы
        </Box>

        <Stack
          mt={{ xs: "40px", md: "50px" }}
          position="relative"
          width={{ xs: "300px", md: "100%" }}
          pt={{ xs: "40px", md: "49px" }}
          pl={{ xs: "24px", md: "51px" }}
          pr={{ xs: "25px", md: 0 }}
          pb={{ xs: "44.54px", md: 0 }}
        >
          <Box
            zIndex={2}
            component="span"
            fontFamily="RoadRadio"
            fontWeight={700}
            fontSize={{ xs: 20, md: 30 }}
            lineHeight={{ xs: "normal", md: "30.27px" }}
            color="colors.nero"
          >
            Александр
          </Box>

          <Box
            zIndex={2}
            mt={{ xs: "20px", md: "41px" }}
            width={{ xs: "auto", md: 564 }}
            component="span"
            fontWeight={500}
            fontSize={{ xs: 18, md: 22 }}
            lineHeight={{ xs: "normal", md: "26.63px" }}
            color="colors.gray33"
          >
            Использовал несколько месяцев, в порядке испытаний, присадку на
            своём Volskwagen Amarok. Машине 10 лет, механика, полный привод, 2,0
            л. Заметил снижение шумности двигателя и расхода потребления ДТ.
            Расход в городе без присадки около 10 л а с присадкой около 8 л на
            100 км. Фильтра чистые. Проверял сам.
          </Box>

          <Box
            mt="36px"
            display={{ xs: "flex", md: "none" }}
            zIndex={2}
            position="relative"
            component="button"
            width="104.791px"
            height="128px"
          >
            <Box
              component="img"
              alt="feedback author picture"
              src={feedbackAuthorPicture1}
              height="inherit"
              width="inherit"
            />

            <Box
              zIndex={1}
              position="absolute"
              top={0}
              bottom={0}
              left={0}
              right={0}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Box
                width="37.729px"
                height="38.146px"
                component="img"
                alt="play icon"
                src={playIcon}
              />
            </Box>
          </Box>

          <Box
            zIndex={2}
            mt="54px"
            width="100%"
            display={{ xs: "none", md: "flex" }}
          >
            <Box
              component="button"
              display="flex"
              justifyContent="center"
              alignItems="center"
              borderRadius="22px"
              height="94px"
              width="345px"
              sx={{ border: "1px solid #D3D3D3" }}
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
                ml="34px"
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="57px"
                width="57px"
                borderRadius="17.74px"
                backgroundColor="colors.blurple"
              >
                <svg
                  width="11"
                  height="20"
                  viewBox="0 0 11 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.475856 0.460893C0.756187 0.165768 1.13619 0 1.53239 0C1.92859 0 2.30859 0.165768 2.58892 0.460893L10.5628 8.86598C10.8427 9.16147 11 9.56202 11 9.97965C11 10.3973 10.8427 10.7978 10.5628 11.0933L2.58892 19.4984C2.45205 19.6532 2.28699 19.7774 2.10359 19.8636C1.92019 19.9497 1.72222 19.996 1.52147 19.9998C1.32072 20.0035 1.12132 19.9646 0.935153 19.8853C0.748987 19.806 0.579876 19.6881 0.437904 19.5384C0.295933 19.3888 0.18401 19.2105 0.108815 19.0143C0.0336193 18.818 -0.00330927 18.6079 0.000232676 18.3962C0.00377462 18.1846 0.0477144 17.976 0.12943 17.7826C0.211146 17.5893 0.328965 17.4153 0.475856 17.2711L7.39316 9.97965L0.475856 2.68824C0.195874 2.39275 0.0386104 1.9922 0.0386104 1.57457C0.0386104 1.15694 0.195874 0.756385 0.475856 0.460893Z"
                    fill="white"
                  />
                </svg>
              </Box>
            </Box>

            <Box
              ml="auto"
              mr="102.5px"
              component="button"
              display="flex"
              justifyContent="center"
              alignItems="center"
              borderRadius="22px"
              height="94px"
              width="346px"
              sx={{ border: "1px solid #D3D3D3" }}
            >
              <Box
                component="span"
                fontFamily="RoadRadio"
                fontWeight={400}
                fontSize={22}
                lineHeight="22.2px"
                color="colors.nero"
                textAlign="center"
              >
                Смотреть <br />
                видео-отзывы
              </Box>
            </Box>
          </Box>

          <Box
            zIndex={4}
            position="absolute"
            bottom="179.73px"
            right="236.51px"
            display={{ xs: "none", md: "flex" }}
            component="button"
          >
            <Box
              component="img"
              alt="feedback author picture"
              src={feedbackAuthorPicture1}
              width="286.99px"
              height="350.55px"
            />

            <Box
              zIndex={1}
              position="absolute"
              top={0}
              bottom={0}
              left={0}
              right={0}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Box component="img" alt="play icon" src={playIcon} />
            </Box>
          </Box>

          <Box
            zIndex={3}
            position="absolute"
            bottom="249.45px"
            right="80.5px"
            display={{ xs: "none", md: "flex" }}
            component="button"
          >
            <Box
              component="img"
              alt="feedback author picture"
              src={feedbackAuthorPicture2}
              width="286.99px"
              height="350.55px"
            />

            <Box
              zIndex={1}
              position="absolute"
              top={0}
              bottom={0}
              left={0}
              right={0}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Box component="img" alt="play icon" src={playIcon} />
            </Box>
          </Box>

          <Box
            display={{ xs: "none", md: "block" }}
            position="absolute"
            top={0}
            bottom={0}
            left={0}
            right={0}
          >
            <svg
              width="1236"
              height="505"
              viewBox="0 0 1236 505"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 433.396V22C0 9.84974 9.84977 0 22 0H1214C1226.15 0 1236 9.84973 1236 22V412.006C1236 417.008 1234.3 421.861 1231.17 425.765L1174.27 496.759C1170.09 501.968 1163.78 505 1157.1 505H971.306H48.2919H22C9.84974 505 0 495.15 0 483V433.396Z"
                fill="white"
              />
            </svg>
          </Box>

          <Box
            display={{ xs: "block", md: "none" }}
            position="absolute"
            top={0}
            bottom={0}
            left={0}
            right={0}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="300"
              height="597"
              viewBox="0 0 300 597"
              fill="none"
            >
              <path
                d="M0 552.552V36.7616V22C0 9.84973 9.84973 0 22 0H278C290.15 0 300 9.84975 300 22V47.0066V574.543C300 586.693 290.15 596.543 278 596.543H53.3873C48.8702 596.543 44.4627 595.153 40.7633 592.561L9.37599 570.569C3.49936 566.452 0 559.727 0 552.552Z"
                fill="white"
              />
            </svg>
          </Box>
        </Stack>

        <Box
          mt="40.72px"
          component="button"
          display={{ xs: "flex", md: "none" }}
          justifyContent="center"
          alignItems="center"
          borderRadius="19.1px"
          height={81.739}
          width={300}
          sx={{ border: "1px solid #D3D3D3" }}
        >
          <Box
            component="span"
            fontWeight={500}
            fontSize={19.13}
            lineHeight="normal"
            color="colors.gray33"
          >
            Следующий отзыв
          </Box>

          <Box
            ml="28.96px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            height={49.565}
            width={49.565}
            borderRadius="15.4px"
            backgroundColor="colors.blurple"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="51"
              height="51"
              viewBox="0 0 51 51"
              fill="none"
            >
              <rect
                x="0.956543"
                y="50.4785"
                width="49.5652"
                height="49.5652"
                rx="15.4266"
                transform="rotate(-90 0.956543 50.4785)"
                fill="#3D3AD1"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.3703 17.8353C21.6141 17.5787 21.9445 17.4346 22.2891 17.4346C22.6336 17.4346 22.964 17.5787 23.2078 17.8353L30.1415 25.1441C30.385 25.4011 30.5218 25.7494 30.5218 26.1125C30.5218 26.4757 30.385 26.824 30.1415 27.0809L23.2078 34.3897C23.0888 34.5244 22.9452 34.6323 22.7858 34.7072C22.6263 34.7821 22.4541 34.8224 22.2796 34.8257C22.105 34.8289 21.9316 34.7951 21.7697 34.7261C21.6078 34.6572 21.4608 34.5546 21.3373 34.4245C21.2139 34.2944 21.1166 34.1394 21.0512 33.9687C20.9858 33.7981 20.9537 33.6153 20.9567 33.4313C20.9598 33.2473 20.998 33.0658 21.0691 32.8977C21.1401 32.7296 21.2426 32.5783 21.3703 32.4529L27.3854 26.1125L21.3703 19.7722C21.1269 19.5152 20.9901 19.1669 20.9901 18.8038C20.9901 18.4406 21.1269 18.0923 21.3703 17.8353Z"
                fill="white"
              />
            </svg>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default Feedbacks;
