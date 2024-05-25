import { FC, ReactElement } from "react";
import Backdrop from "../../../shared/ui/Backdrop";
import Modal from "../../../shared/ui/Modal";
import { useDispatch } from "react-redux";
import { setDialogClosed, useDialogIsOpenStatus } from "../model";

interface DialogProps {
  children: ReactElement;
}

export const Dialog: FC<DialogProps> = ({ children }) => {
  const dispatch = useDispatch();
  const closeDialog = () => dispatch(setDialogClosed());
  const dialogOpen = useDialogIsOpenStatus();

  return (
    <Modal
      open={dialogOpen}
      onClose={closeDialog}
      slots={{ backdrop: Backdrop }}
    >
      {children}
    </Modal>
  );
};
