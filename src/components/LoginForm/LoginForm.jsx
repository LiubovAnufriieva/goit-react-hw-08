import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";

import css from "./LoginForm.module.css";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";

const contactSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address!").required("Required!"),
  password: Yup.string()
    .min(5, "Too Short!")
    .max(12, "Too Long!")
    .required("Required!"),
});

const initialValues = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(login(values));
    actions.resetForm();
  };
  return (
    <div>
    
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={contactSchema}
      >
        <Form className={css.form} autoComplete="off">
          <div>
            <div className={css.wrapper}>
              <label className={css.label}>
                Email
                <Field type="email" name="email" className={css.field} />
                <ErrorMessage
                  className={css.error}
                  name="email"
                  component="span"
                />
              </label>
            </div>

            <div className={css.inputWrapper}>
              <label className={css.label}>
                Password
                <Field type="password" name="password" className={css.field} />
                <ErrorMessage
                  className={css.error}
                  name="password"
                  component="span"
                />
              </label>
            </div>
          </div>

          <button className={css.btn} type="submit">
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
