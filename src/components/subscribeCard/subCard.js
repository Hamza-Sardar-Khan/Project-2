import React from "react"
import ManLogo from "../../assets/images/subscribe.svg"
import nameLogo from "../../assets/images/sub-name.svg"
import "./style.scss"
import { Formik } from "formik"
import Swal from "sweetalert2/dist/sweetalert2.js"
import "sweetalert2/src/sweetalert2.scss"
import addToMailchimp from "gatsby-plugin-mailchimp"

const SubCard = () => {
  return (
    <div className="main-sub-card">
      <img  loading="lazy"  src={ManLogo} alt="Newsletter" />
      <h6>
        KEEP LEARNING
      </h6>
      <p>
        Subscribe to
      </p>
      <img loading="lazy"  src={nameLogo} alt="Newsletter" />
      <p>Newsletter</p>
      <Formik
        initialValues={{ email: "" }}
        validate={values => {
          const errors = {}
          if (!values.email) {
            errors.email = "Required"
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address"
          }
          return errors
        }}
        onSubmit={(values, { setSubmitting }) => {
          addToMailchimp(values.email) // listFields are optional if you are only capturing the email address.
            .then(data => {
              setSubmitting(false)
              if (data.result === "error") {
                Swal.fire({
                  icon: "error",
                  title: "Message Failed",
                  html: data.msg,
                  confirmButtonColor: "#2D9AFF",
                })
              } else {
                Swal.fire({
                  icon: "success",
                  title: "Message Sent",
                  html: data.msg,
                  confirmButtonColor: "#2D9AFF",
                })
              }
            })
            .catch(() => {
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
          <form onSubmit={handleSubmit}>
            <div className="input-hero">
              <input
                className="inputs sw-link-3 sw-font-weight-xs"
                placeholder=" Email Address"
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <div className="error" style={{ color: "red" }}>
                {errors.email && touched.email && errors.email}
              </div>
            </div>

            {!isSubmitting ? (
              <button
                type="submit"
                className="btn-2 sw-nav-links sw-primary-btn-2"
              >
                Subscribe
              </button>
            ) : (
              <button
                type="submit"
                disabled={true}
                className="btn-2 sw-nav-links sw-primary-btn-2"
              >
                Subscribing ...
              </button>
            )}
          </form>
        )}
      </Formik>
    </div>
  )
}

export default SubCard
