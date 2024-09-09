import css from "./ContactForm.module.css";
import toast from 'react-hot-toast';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import { addContact } from "../../redux/contacts/operations";
import { useDispatch } from "react-redux";
import * as Yup from "yup";

const ContactsSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .matches(/^[0-9()+\-]+$/, "Phone number is not valid ")
    .min(6, "Too Short!")
    .max(18, "Too Long!")
    .required("Required"),
});

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = () => {
  const dispatch = useDispatch();
  const fieldId = useId();

  const handleSubmit = (values, actions) => {
    // console.log(values);
    dispatch(addContact(values))
      .unwrap()
      .then(() => {
        toast.success("Successfully added!");
      })
      .catch(() => {
        toast.error("Failed to add. Please try again.");
      });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactsSchema}
    >
      <Form className={css.form}>
        <div className={css.wrapper}>
          <label htmlFor={`${fieldId}-name`} className={css.label}>
            Name
          </label>
          <Field
            className={css.field}
            type="text"
            name="name"
            id={`${fieldId}-name`}
            placeholder="Name Surname"
          />
          <ErrorMessage className={css.error} name="name" component="span" />
          </div>
          <div className={css.wrapper}>
          <label htmlFor={`${fieldId}-number`} className={css.label}>
            Number
          </label>
          <Field
            className={css.field}
            type="tel"
            name="number"
            id={`${fieldId}-number`}
            placeholder="000-00-00"
          />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>
        <button type="submit" className={css.button}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
