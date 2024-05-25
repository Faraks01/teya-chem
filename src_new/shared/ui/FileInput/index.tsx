import React, { FC, InputHTMLAttributes, SelectHTMLAttributes } from "react";
import { Box } from "@mui/system";

const ALLOWED_FILE_FORMATS = [
  ".png",
  ".jpg",
  ".jpeg",
  ".doc",
  ".docx",
  ".xlsx",
  ".pdf",
];

interface FileInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "accept"> {
  label?: string;
  fileName?: string;
  inputWidth?: number | string;
}

const FileInput: FC<FileInputProps> = (props) => {
  const {
    id,
    label,
    name,
    inputWidth,
    fileName = "Загрузить файл",
    ...restInputProps
  } = props;

  return (
    <Box display="flex" flexDirection="column">
      {!!label && (
        <Box
          mb="13px"
          htmlFor={id}
          component="label"
          fontWeight={500}
          fontSize={17}
          lineHeight="23.69px"
          color="colors.romanSilver"
        >
          {label}
        </Box>
      )}

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        component="label"
        width={inputWidth}
        height="121px"
        borderRadius="14.21px"
        bgcolor="colors.white"
        sx={{
          border: "1px dashed #CECECE",
          cursor: "pointer",
        }}
      >
        <Box mt="15px">
          <svg
            width="39"
            height="25"
            viewBox="0 0 39 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Vector"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.0614 4.42404C14.1547 2.71454 15.7583 1.39633 17.6427 0.658056C19.527 -0.0802147 21.5955 -0.200699 23.5522 0.313847C25.5089 0.828394 27.2534 1.95159 28.536 3.5227C29.8187 5.09381 30.5738 7.03229 30.6932 9.06072C31.7511 9.01067 32.8082 9.17391 33.8022 9.5408C34.7963 9.9077 35.7072 10.4708 36.4812 11.197C37.2552 11.9232 37.8767 12.7977 38.309 13.7689C38.7413 14.7402 38.9756 15.7886 38.9982 16.8523C39.0208 17.916 38.8312 18.9735 38.4405 19.9624C38.0499 20.9513 37.4661 21.8517 36.7236 22.6103C35.9812 23.369 35.095 23.9707 34.1174 24.3798C33.1398 24.789 32.0906 24.9974 31.0316 24.9927H10.395C8.91572 24.9908 7.45388 24.6721 6.10688 24.0579C4.75988 23.4437 3.55866 22.5481 2.58328 21.4308C1.6079 20.3135 0.880775 19.0002 0.45036 17.5784C0.0199444 16.1566 -0.103871 14.6589 0.0871655 13.1853C0.278202 11.7116 0.779703 10.2958 1.55824 9.03214C2.33678 7.76851 3.37448 6.6861 4.60216 5.85707C5.82985 5.02803 7.21932 4.47142 8.67797 4.22431C10.1366 3.97721 11.631 4.0453 13.0614 4.42404ZM19.4749 19.653C19.7938 19.653 20.0861 19.5409 20.3164 19.3504L24.735 15.8013C24.8713 15.6916 24.9849 15.5561 25.0691 15.4024C25.1533 15.2487 25.2065 15.0798 25.2258 14.9055C25.245 14.7311 25.2299 14.5546 25.1812 14.3861C25.1326 14.2176 25.0514 14.0604 24.9423 13.9234C24.8332 13.7865 24.6983 13.6724 24.5453 13.5878C24.3923 13.5032 24.2242 13.4497 24.0507 13.4304C23.8771 13.4111 23.7014 13.4263 23.5337 13.4751C23.366 13.524 23.2095 13.6056 23.0732 13.7152L20.8036 15.5414V9.41848C20.8036 9.06443 20.6636 8.72489 20.4144 8.47454C20.1653 8.22419 19.8273 8.08355 19.4749 8.08355C19.1225 8.08355 18.7845 8.22419 18.5353 8.47454C18.2861 8.72489 18.1461 9.06443 18.1461 9.41848V15.5414L15.8748 13.717C15.7385 13.6075 15.582 13.526 15.4143 13.4773C15.2466 13.4285 15.071 13.4134 14.8976 13.4328C14.7241 13.4522 14.5561 13.5058 14.4032 13.5904C14.2503 13.6751 14.1156 13.7891 14.0065 13.9261C13.8975 14.0631 13.8165 14.2203 13.7679 14.3887C13.7194 14.5572 13.7044 14.7336 13.7237 14.9079C13.743 15.0822 13.7964 15.2509 13.8806 15.4045C13.9648 15.5581 14.0784 15.6935 14.2147 15.803L18.6404 19.3593C18.8737 19.5488 19.1642 19.6529 19.4642 19.6548H19.4749V19.653Z"
              fill="#CFCFCF"
            />
          </svg>
        </Box>

        <Box
          mt="11.82px"
          component="span"
          fontWeight={600}
          fontSize={17}
          lineHeight="23.69px"
          color="colors.nero"
          textAlign="center"
        >
          {fileName.length > 15 ? fileName.slice(0, 15) + "..." : fileName}
        </Box>

        <Box
          component="span"
          fontWeight={500}
          fontSize={14}
          lineHeight="23.69px"
          color="colors.romanSilver"
          textAlign="center"
        >
          Не более 5 мб
        </Box>

        <Box
          display="none"
          id={id}
          component="input"
          type="file"
          name={name}
          {...restInputProps}
          accept={ALLOWED_FILE_FORMATS.join(", ")}
        />
      </Box>
    </Box>
  );
};

export default FileInput;
