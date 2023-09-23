import React, {
  Children,
  cloneElement,
  createContext,
  useContext,
  useState,
} from "react";
import { Box, Stack } from "@mui/system";
import styled from "@emotion/styled/macro";
import Modal from "@mui/base/Modal";
import { ABOUT_US_SECTION_ID } from "../../sections/AboutUs/AboutUs";
import { FEEDBACKS_SECTION_ID } from "../../sections/Feedbacks/Feedbacks";
import { FEEDBACK_FORM_SECTION_ID } from "../../sections/FeedbackForm/FeedbackForm";

export const DialogMenuContext = createContext({
  dialogOpen: false,
  changeDialogState: (_) => {},
});

export const DialogMenuContextWrapper = ({ children }) => {
  const [dialogOpen, changeDialogState] = useState(false);

  return (
    <DialogMenuContext.Provider value={{ dialogOpen, changeDialogState }}>
      {Children.map(children, (child) => cloneElement(child))}
    </DialogMenuContext.Provider>
  );
};

const Backdrop = React.forwardRef((props, ref) => {
  const { open, className, ...other } = props;
  return (
    <div
      className={`${className} ${open && "MuiBackdrop-open"}`}
      ref={ref}
      {...other}
    />
  );
});

const StyledModal = styled(Modal)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const DialogMenu = () => {
  const { dialogOpen, changeDialogState } = useContext(DialogMenuContext);

  const closeDialog = () => changeDialogState(false);

  return (
    <Box>
      <StyledModal
        open={dialogOpen}
        onClose={closeDialog}
        slots={{ backdrop: StyledBackdrop }}
      >
        <Stack
          borderRadius="12px"
          pt={5}
          pb={5}
          spacing={3}
          alignItems="center"
          backgroundColor="colors.white"
          width="95%"
        >
          <Box
            onClick={closeDialog}
            component="a"
            href={"#" + ABOUT_US_SECTION_ID}
            fontSize={18}
            fontWeight={500}
            color="colors.nero"
            lineHeight="22px"
          >
            Блог
          </Box>

          <Box
            onClick={closeDialog}
            component="a"
            href={"#" + FEEDBACKS_SECTION_ID}
            fontSize={18}
            fontWeight={500}
            color="colors.nero"
            lineHeight="22px"
          >
            Отзывы
          </Box>

          <Box
            onClick={closeDialog}
            component="a"
            href={"#" + FEEDBACK_FORM_SECTION_ID}
            fontSize={18}
            fontWeight={500}
            color="colors.nero"
            lineHeight="22px"
          >
            Контакты
          </Box>
        </Stack>
      </StyledModal>
    </Box>
  );
};

export default DialogMenu;
