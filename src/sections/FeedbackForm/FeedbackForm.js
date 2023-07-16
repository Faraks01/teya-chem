import React from "react";
import {Box} from "@mui/system";
import TextInput from "../../components/TextInput";
import TextAreaInput from "../../components/TextAreaInput";
import FileInput from "../../components/FileInput";
import {Formik} from "formik";
import { toast } from 'react-toastify';
import {submitFeedbackForm} from "../../requests/feedback_form/POST";

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
          attachment_file_name: '',
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
        onSubmit={async (values, {setSubmitting}) => {
          setSubmitting(true);

          const [isSucceded, message] = await submitFeedbackForm({
            full_name: values['full_name'],
            email: values['email'],
            comment: values['comment'],
            phone: values['phone'],
            attachment_file: values['attachment_file']
          });

          if (isSucceded) {
            toast.success(message)
          } else {
            toast.error(message)
          }

          setSubmitting(false);
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
            setValues
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
                    disabled={isSubmitting}
                    maxlength={60}
                    pattern="[а-яА-Яa-zA-Z ]{3,60}"
                    title='Пожалуйста, введите имя.'
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
                      disabled={isSubmitting}
                      maxlength={254}
                      pattern='[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+'
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
                    disabled={isSubmitting}
                    maxlength={800}
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
                    disabled={isSubmitting}
                    maxlength={20}
                    pattern="^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$"
                    title='Пожалуйста, введите номер телефона.'
                  />

                  <Box
                    ml='auto'
                  >
                    <FileInput
                      id='file_input'
                      name='attachment_file_name'
                      label='Приложить файл'
                      onChange={
                        (evt) => {
                          const file = evt?.target?.files[0];

                          if (file) setValues((pval) => ({
                            ...pval,
                            attachment_file_name: file.name,
                            attachment_file: file,
                          }));
                        }
                      }
                      onBlur={handleBlur}
                      fileName={values.attachment_file_name || undefined}
                      disabled={isSubmitting}
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
