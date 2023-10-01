import React, { useRef } from "react"
import { Formik } from "formik"
import { Link } from "gatsby"
import Swal from "sweetalert2/dist/sweetalert2.js"
import "sweetalert2/src/sweetalert2.scss"
const ContactForm = () => {
  const formref = useRef() 
  return (
    <>
      <h1 className="fome-heading sw-heading-1">
        Contact our team
      </h1>
      <Formik
        initialValues={{ firstname: "", lastname: "", companyname: "", phone: "", message: "", query: "", email: "" }}
        validate={values => {
          const errors = {}
          if (!values.firstname) {
            errors.firstname = "Please fill out this field."
          }
          if (!values.lastname) {
            errors.lastname = "Please fill out this field."
          }
          if (!values.companyname) {
            errors.companyname = "Please fill out this field."
          }
          if (!values.query) {
            errors.query = "Please select an item."
          }
          if (!values.message) {
            errors.message = "Please fill out this field."
          }
          if (!values.email) {
            errors.email = "Please fill out this field."
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address"
          }
          return errors
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          let formData = new FormData(formref.current)
         
          fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString(),
          })
            .then(() => {
              setSubmitting(false)
              if (typeof window !== "undefined") {
                window.location = "/thank-you/"
              }
              resetForm()
            })
            .catch(error => {
              setSubmitting(false)
              Swal.fire({
                icon: "error",
                title: "Message Failed",
                text: "Something went wrong",
                confirmButtonColor: "#2D9AFF",
              })
            })
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
          <form
            method="POST"
            name="contact"
            onSubmit={handleSubmit}
            data-netlify="true"
            ref={formref}
          >
            <input type="hidden" name="contact" value="contact" />
            {/* NAME */}
            <div className="form-group">
              <div className="input-group">
                <label for="firstname">First name<span>*</span></label>
                <input
                  className="input-0"
                  type="text"
                  name="firstname"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.firstname}
                />
                <p className="error">
                  {errors.firstname && touched.firstname && errors.firstname}
                </p>
              </div>
              <div className="input-group">
                <label for="lastname">Last name<span>*</span></label>
                <input
                  className="input-0"
                  type="text"
                  name="lastname"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastname}
                />
                <p className="error">
                  {errors.lastname && touched.lastname && errors.lastname}
                </p>
              </div>
            </div>
            {/* COMPANY */}
            <div className="form-group">
              <div className="input-group">
                <label for="email">Work email<span>*</span></label>
                <input
                  className="input-0"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <p className="error">
                  {errors.email && touched.email && errors.email}
                </p>
              </div>
              <div className="input-group">
                <label for="companyname">School name<span>*</span></label>
                <input
                  className="input-0"
                  type="text"
                  name="companyname"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.companyname}
                />
                <p className="error">
                  {errors.companyname && touched.companyname && errors.companyname}
                </p>
              </div>
            </div>
            {/* PHONE */}
            <div className="form-group">
              <div className="input-group">
                <label for="phone">Phone number</label>
                <input
                  type="phone"
                  name="phone"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phone}
                />
              </div>
              <div className="input-group">
              <label for="query">Type of query<span>*</span></label>
                <select 
                  name="query"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.query}
                >
                  <option value="">Please select</option>
                  <option value="account">Account</option>
                  <option value="sales">Sales</option>
                  <option value="support">Support</option>
                  <option value="press">Press</option>
                  <option value="other">Other</option>
                </select>
                <p className="error">
                  {errors.query && touched.query && errors.query}
                </p>
              </div>
            </div>
              {/* MESSAGE */}
            <div className="form-group">
              <div className="input-group">
                <label for="message">How can our team help you<span>*</span></label>
                <textarea
                  type="text"
                  name="message"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.message}
                  placeholder="Tell us more about your team and what you’d like to manage with securiwiser.com"
                />
                <p className="error">
                  {errors.message && touched.message && errors.message}
                </p>
                <p className="privacy-policy">By clicking submit, I acknowledge receipt of the securiwiser.com <Link className="sw-link" to="/privacy-policy/" target="_blank">Privacy policy</Link></p>
              </div>
            </div>
            {!isSubmitting ? (
              <button
                className="sw-primary-btn sw-nav-links sw-font-weight-md fom-btn"
                type="submit"
              >
                Submit
              </button>
            ) : (
              <button
                className="sw-primary-btn sw-nav-links sw-font-weight-md fom-btn"
                type="button"
                disabled
              >
                Submitting...
              </button>
            )}
          </form>
        )}
      </Formik>
    </>
  )
}

export default ContactForm
