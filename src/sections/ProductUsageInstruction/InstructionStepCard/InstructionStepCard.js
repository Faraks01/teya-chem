import React from "react";
import {Box} from "@mui/system";

const InstructionStepCard = (props) => {
  const {
    cardKey = "",
    description,
    pictureSrc = "",
    pictureAltDescription = "",
    additionalDescription = []
  } = props;

  return (
    <Box
      display="flex"
      flexDirection="column"
    >
      <Box
        pt="33.29px"
        pb="31.58px"
        pl="20px"
        minWidth="296.2px"
        height="260.35px"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        position="relative"
      >
        <Box
          component="span"
          fontWeight={500}
          fontSize={17}
          lineHeight="20.57px"
          color="colors.gray33"
          zIndex={2}
        >
          {description}
        </Box>

        <Box
          component="img"
          src={pictureSrc}
          height="72.56px"
          width="72.56px"
          alt={pictureAltDescription}
          zIndex={2}
        />

        <Box
          position="absolute"
          top={0}
          bottom={0}
          left={0}
          right={0}
        >
          <svg width="297" height="261" viewBox="0 0 297 261" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M204.991 0.327393H61.9842H18.779C8.40765 0.327393 0 8.73504 0 19.1064V241.894C0 252.265 8.40764 260.673 18.779 260.673H148.098H277.417C287.788 260.673 296.196 252.265 296.196 241.894V141.463V60.5687C296.196 56.522 294.889 52.5836 292.469 49.34L261.539 7.87767C257.994 3.12628 252.414 0.327393 246.487 0.327393H204.991Z"
              fill="white"/>
          </svg>
        </Box>
      </Box>

      {!!additionalDescription.length && (
        <Box
          height={{xs: '20px', md: "55.33px"}}
        />
      )}

      {additionalDescription.map((elem, index) => {
        const key = cardKey + "__" + index;

        return (
          <Box
            mt={!!index ? "60px" : 0}
            pl={{xs: '10px', md: 0}}
            key={key}
            display="flex"
            flexDirection="column"
          >
            <Box
              height="30.04px"
              width="30.04px"
            >
              <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14.9995 12.8081C15.3515 12.8081 15.6891 12.9479 15.938 13.1967C16.1869 13.4456 16.3268 13.7831 16.3268 14.135V22.9807C16.3268 23.3326 16.1869 23.6701 15.938 23.9189C15.6891 24.1678 15.3515 24.3076 14.9995 24.3076C14.6475 24.3076 14.3099 24.1678 14.061 23.9189C13.8121 23.6701 13.6723 23.3326 13.6723 22.9807V14.135C13.6723 13.7831 13.8121 13.4456 14.061 13.1967C14.3099 12.9479 14.6475 12.8081 14.9995 12.8081ZM14.9995 9.71212C15.4689 9.71212 15.919 9.52572 16.2508 9.19395C16.5827 8.86217 16.7692 8.41218 16.7692 7.94297C16.7692 7.47377 16.5827 7.02378 16.2508 6.692C15.919 6.36022 15.4689 6.17383 14.9995 6.17383C14.5302 6.17383 14.0801 6.36022 13.7482 6.692C13.4163 7.02378 13.2299 7.47377 13.2299 7.94297C13.2299 8.41218 13.4163 8.86217 13.7482 9.19395C14.0801 9.52572 14.5302 9.71212 14.9995 9.71212Z"
                  fill="#545454"/>
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M6.71225 0.457822C12.2202 -0.152607 17.7788 -0.152607 23.2868 0.457822C26.52 0.818727 29.1302 3.36276 29.5089 6.61444C30.1637 12.1979 30.1637 17.8414 29.5089 23.4266C29.1284 26.6748 26.5182 29.2206 23.2868 29.5832C17.7788 30.1937 12.2202 30.1937 6.71225 29.5832C3.47909 29.2206 0.868856 26.6748 0.49015 23.4266C-0.163383 17.841 -0.163383 12.1983 0.49015 6.61267C0.868856 3.36276 3.48086 0.818726 6.71225 0.456052V0.457822ZM22.9931 3.09385C17.6803 2.50514 12.3188 2.50514 7.00601 3.09385C6.02278 3.20284 5.10499 3.63995 4.40084 4.33459C3.69668 5.02923 3.24727 5.94086 3.12516 6.92227C2.49578 12.3022 2.49578 17.7371 3.12516 23.117C3.24764 24.0981 3.69722 25.0093 4.40134 25.7036C5.10546 26.3979 6.02304 26.8348 7.00601 26.9437C12.2743 27.5328 17.7248 27.5328 22.9931 26.9437C23.9757 26.8344 24.8929 26.3974 25.5967 25.7031C26.3004 25.0089 26.7497 24.0978 26.8721 23.117C27.5015 17.7371 27.5015 12.3022 26.8721 6.92227C26.7501 5.94113 26.301 5.02971 25.5972 4.3351C24.8934 3.64049 23.976 3.20322 22.9931 3.09385Z"
                      fill="#545454"/>
              </svg>
            </Box>

            <Box
              mt="30.96px"
              component="span"
              fontWeight={500}
              fontSize={18}
              lineHeight="21.78px"
              color="colors.gray33"
            >
              {elem}
            </Box>
          </Box>
        );
      })}
    </Box>
  )
}

export default InstructionStepCard
