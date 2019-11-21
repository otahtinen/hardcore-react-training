import React from "react";
import { Formik, Form, Field } from "formik";
import Button from "./Button";
import uuid from "uuid";
import * as Yup from "yup";

const schema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  age: Yup.number()
    .max(50)
    .min(16)
    .required("Required")
});

const HirePersonForm = props => {
  const { hirePerson } = props;
  return (
    <div>
      <Formik
        validationSchema={schema}
        initialValues={{
          firstName: "Abel",
          lastName: "Abrahamsson"
        }}
        onSubmit={values => {
          console.log("values", values);

          const newPerson = {
            ...values,
            id: uuid(),
            age: 25,
            gender: "f"
          };

          hirePerson(newPerson);
        }}
      >
        {props => {
          const { isValid, errors } = props;
          return (
            <Form>
              <div>
                <label>Etunimi</label>
                <Field type="text" name="firstName" />
                {errors.firstName && <span>{errors.firstName}</span>}
              </div>
              <div>
                <label>Sukunimi</label>
                <Field type="text" name="lastName" />
                {errors.lastName && <span>{errors.lastName}</span>}
              </div>
              <div>
                <label>Ikä</label>
                <Field type="text" name="age" />
                {errors.age && <span>{errors.age}</span>}
              </div>
              <div>
                <Button disabled={!isValid} type="submit">
                  Palkkaa!
                </Button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default HirePersonForm;
