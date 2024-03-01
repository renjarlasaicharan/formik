import React from "react"
import ReactDOM from "react-dom";
import { useFormik, Field, Form, Formik } from "formik";
import * as Yup from 'yup';

const initialValues = {
  name: '',
  email: '',
  password: '',
  cpassword: ''
}
 
const Formfield = () => {

  const validationSchema = Yup.object({
    name: Yup.string().min(3).required('Please Enter name'),
    email: Yup.string().email('Please Enter Valid email').required('Please Enter Email'),
    password: Yup.string().min(5).required('Plese Enter Password'),
    cpassword: Yup.string().oneOf([Yup.ref('password')], 'Password not matched').required('Please Enter c Password')
  })


  const { values, handleBlur, handleChange, handleSubmit, errors, touched } = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values)
    }
  })

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>Name:</label><br />
        <input name="name" type="text" onBlur={handleBlur} onChange={handleChange} value={values.name} />
        <br/>
        {touched.name && <small>{errors.name}</small>}
        <br/>
        <label>email:</label><br />
        <input name="email" type="email" onBlur={handleBlur} onChange={handleChange} value={values.email} />
        <br/>
        {touched.email && <small>{errors.email}</small>}
        <br/>
        <label>PassWord:</label><br />
        <input name="password" type="password" onBlur={handleBlur} onChange={handleChange} value={values.password} />
        <br/>
        {touched.password && <small>{errors.password}</small>}
        <br/>
        <label>Confirm PassWord:</label><br />
        <input name="cpassword" type="password" onBlur={handleBlur} onChange={handleChange} value={values.cpassword} />
        <br />
        {touched.cpassword && <small>{errors.cpassword}</small>}
        <br />
        <button type="submit">Submit</button>
        <br />
      </form>

    </div>
  );
}
export default Formfield