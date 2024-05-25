import React from "react";
import { Stack } from "@mui/system";
import { Dialog } from "../../../entities/Dialog";
import { AnchorLink } from "../../../entities/AnchorLink";
import { sharedConfigSections } from "../../../shared/config";

const { ABOUT_US_SECTION, FEEDBACK_FORM_SECTION, FEEDBACKS_SECTION } =
  sharedConfigSections.SectionName;

const NavigationDialog = () => {
  return (
    <Dialog>
      <Stack
        borderRadius="12px"
        pt={5}
        pb={5}
        spacing={3}
        alignItems="center"
        bgcolor="colors.white"
        width="95%"
      >
        <AnchorLink href={ABOUT_US_SECTION}>Блог</AnchorLink>
        <AnchorLink href={FEEDBACKS_SECTION}>Отзывы</AnchorLink>
        <AnchorLink href={FEEDBACK_FORM_SECTION}>Контакты</AnchorLink>
      </Stack>
    </Dialog>
  );
};

export default NavigationDialog;
