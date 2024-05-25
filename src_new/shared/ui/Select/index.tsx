import { FC, SelectHTMLAttributes } from "react";
import { Box } from "@mui/system";

interface Option {
  label: string;
  value: string | number;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  selectWidth?: number | string;
  options: Option[];
}

const Select: FC<SelectProps> = (props) => {
  const {
    id,
    label,
    name,
    selectWidth,
    options = [],
    ...restSelectProps
  } = props;

  return (
    <Box display="flex" flexDirection="column" position="relative">
      {!!label && (
        <Box
          mb="11px"
          htmlFor={id}
          component="label"
          fontWeight={500}
          fontSize={14}
          lineHeight="normal"
          color="colors.jetBlack"
        >
          {label}
        </Box>
      )}

      <Box
        id={id}
        display="flex"
        alignItems="center"
        pl="16px"
        pr="16px"
        component="select"
        fontWeight={500}
        fontSize={16}
        color="colors.gray33"
        name={name}
        width={selectWidth}
        height="53px"
        borderRadius="12px"
        bgcolor="colors.white"
        sx={{
          border: "1px solid #D7D7D7",
          appearance: "none",
          cursor: "pointer",
        }}
        {...restSelectProps}
      >
        {options.map((o) => (
          <Box key={"option__" + o.label} component="option" value={o.value}>
            {o.label}
          </Box>
        ))}
      </Box>

      <Box
        position="absolute"
        bottom="19px"
        right="16px"
        sx={{
          pointerEvents: "none",
        }}
      >
        <svg
          width="12"
          height="7"
          viewBox="0 0 12 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.7071 0.292893C12.0976 0.683418 12.0976 1.31658 11.7071 1.70711L6.70711 6.70711C6.31658 7.09763 5.68342 7.09763 5.29289 6.70711L0.292893 1.70711C-0.0976315 1.31658 -0.0976315 0.683417 0.292893 0.292893C0.683417 -0.0976316 1.31658 -0.0976316 1.70711 0.292893L6 4.58579L10.2929 0.292893C10.6834 -0.0976312 11.3166 -0.0976311 11.7071 0.292893Z"
            fill="#1E1E1E"
          />
        </svg>
      </Box>
    </Box>
  );
};

export default Select;
