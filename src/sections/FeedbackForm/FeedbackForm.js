import React from "react";
import {Box} from "@mui/system";
import TextInput from "../Feedbacks/TextInput";
import TextAreaInput from "../Feedbacks/TextAreaInput";
import FileInput from "../Feedbacks/FileInput";
import {Formik} from "formik";

export const FEEDBACK_FORM_SECTION_ID = 'feedback_form';

const FeedbackForm = () => {
  return (
    <Box
      id={FEEDBACK_FORM_SECTION_ID}
      mt='122px'
      component='section'
      display='flex'
      justifyContent='center'
      width='100%'>
      <Formik
        initialValues={{
          full_name: '',
          email: '',
          comment: '',
          phone: '',
          attachment_file: '',
      }}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Введите почту';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Неверный формат';
          }
          return errors;
        }}
        onSubmit={(values, {setSubmitting}) => {
          console.log(values);
        }}
      >
        {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
          <Box
            component='form'
            onSubmit={handleSubmit}
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
              Контакты
            </Box>

            <Box
              mt='40px'
              display='flex'
              backgroundColor='colors.white'
              borderRadius='22px'
              width='100%'
              pt='37px'
              pb='37px'
              pl='27px'
              pr='27px'
            >
              <Box
                display='flex'
                flexDirection='column'
              >
                <Box
                  display='flex'
                >
                  <TextInput
                    id='full_name'
                    label='Имя'
                    name='full_name'
                    inputWidth='335px'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.full_name}
                  />

                  <Box
                    ml='50px'
                    display='flex'
                    flexDirection='column'
                  >
                    <TextInput
                      id='email'
                      type='email'
                      label='Email'
                      name='email'
                      inputWidth='236.88px'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                  </Box>
                </Box>

                <Box
                  mt='33px'
                >
                  <TextAreaInput
                    id='comment'
                    label='Комментарий'
                    name='comment'
                    inputWidth='634px'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.comment}
                  />
                </Box>
              </Box>

              <Box
                ml='37.88px'
                display='flex'
                flexDirection='column'
              >
                <Box
                  display='flex'
                >
                  <TextInput
                    id='phone'
                    label='Телефон'
                    name='phone'
                    inputWidth='236.88px'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phone}
                  />

                  <Box
                    ml='auto'
                  >
                    <FileInput
                      id='file_input'
                      name='attachment_file'
                      label='Приложить файл'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.attachment_file}
                    />
                  </Box>
                </Box>

                <Box
                  mt='auto'
                  ml='23.12px'
                  component="button"
                  type='submit'
                  display="flex"
                  justifyContent='center'
                  alignItems="center"
                  backgroundColor="#262C27"
                  borderRadius="18px"
                  height="60px"
                  width='487px'
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
              </Box>
            </Box>
          </Box>
        )}
      </Formik>
    </Box>
  )
}

export default FeedbackForm
