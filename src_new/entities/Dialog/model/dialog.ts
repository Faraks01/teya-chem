import { createSelector, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

interface IInitialState {
  isOpened: boolean;
}

const initialState: IInitialState = {
  isOpened: false,
};

const dialogModel = createSlice({
  name: "dialog",
  initialState,
  reducers: {
    setDialogOpen: (state) => {
      state.isOpened = true;
    },
    setDialogClosed: (state) => {
      state.isOpened = false;
    },
  },
});

export const { setDialogOpen, setDialogClosed } = dialogModel.actions;

export const useDialogIsOpenStatus = () =>
  useSelector(
    createSelector(
      (state: RootState) => state.dialog,
      (dialog) => dialog.isOpened,
    ),
  );

export const reducer = dialogModel.reducer;
