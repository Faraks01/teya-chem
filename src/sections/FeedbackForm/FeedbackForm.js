import React from "react";
import { Box, Stack } from "@mui/system";
import TextInput from "../../components/TextInput";
import TextAreaInput from "../../components/TextAreaInput";
import FileInput from "../../../src_new/shared/ui/FileInput";
import { Formik } from "formik";
import { toast } from "react-toastify";
import { submitFeedbackForm } from "../../requests/feedback_form/POST";

export const FEEDBACK_FORM_SECTION_ID = "feedback_form";

const FeedbackForm = () => {
  return (
    <Box
      id={FEEDBACK_FORM_SECTION_ID}
      mt="122px"
      component="section"
      display="flex"
      justifyContent="center"
      width="100%"
    >
      <Formik
        initialValues={{
          full_name: "",
          email: "",
          comment: "",
          phone: "",
          attachment_file: "",
          attachment_file_name: "",
        }}
        // validate={values => {
        //   const errors = {};
        //   if (!values.email) {
        //     errors.email = 'Введите почту';
        //   } else if (
        //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        //   ) {
        //     errors.email = 'Неверный формат';
        //   }
        //   return errors;
        // }}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          setSubmitting(true);

          const [isSucceded, message] = await submitFeedbackForm({
            full_name: values["full_name"],
            email: values["email"],
            comment: values["comment"],
            phone: values["phone"],
            attachment_file: values["attachment_file"],
          });

          if (isSucceded) {
            toast.success(message);
            resetForm();
          } else {
            toast.error(message);
          }

          setSubmitting(false);
        }}
      >
        {({
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          setValues,
        }) => (
          <Box
            component="form"
            onSubmit={handleSubmit}
            display="flex"
            flexDirection="column"
            position="relative"
            width="100%"
            maxWidth={{ xs: "320px", md: "1236px" }}
          >
            <Box
              alignSelf="center"
              component="span"
              fontFamily="RoadRadio"
              fontWeight={700}
              fontSize={45}
              lineHeight={{ xs: "normal", md: "45.4px" }}
              color="colors.nero"
            >
              Контакты
            </Box>

            <Stack
              mt={{ xs: "41px", md: "40px" }}
              direction={{ xs: "column", md: "row" }}
              backgroundColor="colors.white"
              borderRadius="22px"
              width="100%"
              pt={{ xs: "30px", md: "37px" }}
              pb={{ xs: "17px", md: "37px" }}
              pl={{ xs: "19px", md: "27px" }}
              pr={{ xs: "22px", md: "27px" }}
            >
              <Stack spacing={{ xs: "26px", md: "33px" }}>
                <Stack direction={{ xs: "column", md: "row" }} spacing="26px">
                  <TextInput
                    id="full_name"
                    label="Имя"
                    name="full_name"
                    inputWidth={{ xs: "inherit", md: "335px" }}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.full_name}
                    disabled={isSubmitting}
                    maxlength={60}
                    pattern="[а-яА-Яa-zA-Z ]{3,60}"
                    title="Пожалуйста, введите имя."
                  />

                  <Box
                    ml={{ xs: 0, md: "50px" }}
                    display="flex"
                    flexDirection="column"
                  >
                    <TextInput
                      id="email"
                      type="email"
                      label="Email"
                      name="email"
                      inputWidth={{ xs: "inherit", md: "236.88px" }}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      disabled={isSubmitting}
                      maxlength={254}
                      pattern="[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+"
                    />
                  </Box>
                </Stack>

                <Box display={{ xs: "none", md: "block" }}>
                  <TextAreaInput
                    id="comment"
                    label="Комментарий"
                    name="comment"
                    inputWidth={{ xs: "inherit", md: "634px" }}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.comment}
                    disabled={isSubmitting}
                    maxlength={800}
                  />
                </Box>
              </Stack>

              <Stack
                mt={{ xs: "26px", md: 0 }}
                spacing={{ xs: "26px", md: 0 }}
                ml={{ xs: 0, md: "37.88px" }}
                justifyContent={{ xs: "flex-start", md: "space-between" }}
              >
                <Stack
                  direction={{ xs: "column", md: "row" }}
                  spacing={{ xs: "26px", md: "50.24px" }}
                >
                  <TextInput
                    id="phone"
                    label="Телефон"
                    name="phone"
                    inputWidth={{ xs: "inherit", md: "236.88px" }}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phone}
                    disabled={isSubmitting}
                    maxlength={20}
                    pattern="^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$"
                    title="Пожалуйста, введите номер телефона."
                  />

                  <Box ml={{ xs: 0, md: "auto" }}>
                    <FileInput
                      id="file_input"
                      name="attachment_file_name"
                      label="Приложить файл"
                      inputWidth={{ xs: "inherit", md: "223px" }}
                      onChange={(evt) => {
                        const file = evt?.target?.files[0];

                        if (file) {
                          // Размер файла не должен быть больше 5мб
                          if (file.size < 5242880) {
                            setValues((pval) => ({
                              ...pval,
                              attachment_file_name: file.name,
                              attachment_file: file,
                            }));
                          } else {
                            toast.error(
                              "Размер файла не должен быть больше 5 мб!",
                            );
                          }
                        }
                      }}
                      onBlur={handleBlur}
                      fileName={values.attachment_file_name || undefined}
                      disabled={isSubmitting}
                    />
                  </Box>

                  <Box display={{ xs: "block", md: "none" }}>
                    <TextAreaInput
                      id="comment"
                      label="Комментарий"
                      name="comment"
                      inputWidth={{ xs: "inherit", md: "634px" }}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.comment}
                      disabled={isSubmitting}
                      maxlength={800}
                    />
                  </Box>
                </Stack>

                <Box
                  ml={{ xs: 0, md: "23.12px" }}
                  component="button"
                  type="submit"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  backgroundColor="#262C27"
                  borderRadius="18px"
                  height="60px"
                  width={{ xs: "inherit", md: "487px" }}
                >
                  <Box
                    component="span"
                    fontFamily="RoadRadio"
                    fontWeight={700}
                    fontSize={17}
                    color="colors.white"
                    disabled={isSubmitting}
                  >
                    Отправить
                  </Box>
                </Box>
              </Stack>
            </Stack>
          </Box>
        )}
      </Formik>
    </Box>
  );
};

export default FeedbackForm;
