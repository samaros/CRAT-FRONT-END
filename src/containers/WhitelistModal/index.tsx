/* eslint-disable react/jsx-props-no-spreading */
import {
  Button, Modal, Input, Text,
} from 'components';
import {
  Formik,
  FormikHelpers,
  Form,
  Field,
  FieldProps,
} from 'formik';
import React, { FC, SyntheticEvent } from 'react';
import * as Yup from 'yup';
import WhitelistError from './components/WhitelistError';
import styles from './styles.module.scss';

type FormValues = {
  address: string,
  email: string,
};

type Props = {
  isOpen: boolean,
  onClose: () => void,
};

const validationSchema = Yup.object().shape({
  address: Yup.string()
    .length(42)
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

const WhitelistModal: FC<Props> = ({ isOpen, onClose }) => (
  <Modal
    isOpen={isOpen}
    onClose={onClose}
    className={styles.container}
  >
    <Formik
      initialValues={{
        address: '',
        email: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(
        values: FormValues,
        { setSubmitting }: FormikHelpers<FormValues>,
      ) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 500);
      }}
    >
      {({
        errors, touched, values, handleChange, handleBlur, isValid,
      }) => (
        <Form className={styles.formWrapper} translate={undefined}>
          <Text color="green" size="xl">WHITELIST AND BUT TOKENS!</Text>
          <Field
            id="address"
            name="address"
            render={
                ({ form: { isSubmitting } }: FieldProps) => (
                  <Input
                    name="address"
                    disabled={isSubmitting}
                    label="YOUR BSC ADDRESS"
                    value={values.address}
                    onChange={handleChange}
                    onBlur={(e: SyntheticEvent) => handleBlur(e)}
                    classNameInput={styles.input}
                  />
                )
              }
          />
          {errors.address && touched.address && (
          <WhitelistError
            body="BSC address must be exactly 42 characters long starting with '0x'"
          />
          )}
          <Field
            id="email"
            render={
                ({ form: { isSubmitting } }: FieldProps) => (
                  <Input
                    name="email"
                    disabled={isSubmitting}
                    label="YOUR E-MAIL"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={(e: SyntheticEvent) => handleBlur(e)}
                    classNameInput={styles.input}
                  />
                )
              }
          />
          {errors.email && touched.email && (
          <WhitelistError
            body="Please include '@' and proper domain"
          />
          )}
          <Button
            className={styles.submitBtn}
            color="green"
            type="submit"
            disabled={!isValid}
          >
            <Text color="white" weight="bold" size="l">WHITELIST</Text>
          </Button>
        </Form>
      )}
    </Formik>
  </Modal>
);

export default WhitelistModal;
