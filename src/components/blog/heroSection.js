import React from "react"
import HacksImg from "../../assets/images/blog-data.svg"
import addToMailchimp from "gatsby-plugin-mailchimp"
import "./style/index.scss"
import { Formik } from "formik"
import Swal from "sweetalert2/dist/sweetalert2.js"
import "sweetalert2/src/sweetalert2.scss"

const HeroSection = () => {
  return (
    <div className="blog-hero-section">
      <div className="hero-description">
        <div className="hero-about ">
          <h1 className="sw-headind-1 main-heading">
            Learn Cyber Security with great researchers!
          </h1>
          <p className="sub-heading">
            Cyber-threat incidents and data breaches are virtually preventable,
            and businesses have paid the price.
          </p>
          {/* Mobile card */}
          <div className="hero-hacks-1 ">
            <img loading="lazy" className="hackes-img" src={HacksImg} alt="Cyber-threat" />
            <div className="hacks-about">
              <div className="detail-hack-data-mb">
                <p>33,000+</p>
                <span className="sub-heading-sw">HACKS PER DAY</span>
              </div>
              <div className="detail-hack-data-mb ml-5">
                <p>£150 million+</p>
                <span className="sub-heading-sw">DATA BREACH COST</span>
              </div>
            </div>
          </div>

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
                <div className="hero-buttons">
                  <div className="input-hero">
                    <input
                      className="inputs sw-nav-links sw-font-weight-xs"
                      placeholder=" Email Address"
                      type="email"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                  </div>

                  {!isSubmitting ? (
                    <button
                      type="submit"
                      className="sw-primary-btn-2 sw-nav-links sw-font-weight-md btn-2"
                    >
                      Subscribe
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={true}
                      className="sw-primary-btn-2 sw-nav-links sw-font-weight-md btn-2"
                    >
                      Subscribing ...
                    </button>
                  )}
                </div>
                <div className="error" style={{ color: "red" }}>
                  {errors.email && touched.email && errors.email}
                </div>
              </form>
            )}
          </Formik>
        </div>
        {/* Desxtop card */}
        <div className="hero-hacks-2">
          <img loading="lazy" className="hackes-img" src={HacksImg} alt="Cyber-threat" />
          <div className="hacks-about">
            <div className="detail-hack-data">
              <p>33,000+</p>
              <span className="sub-heading-sw">HACKS PER DAY</span>
            </div>
            <div className="detail-hack-data ml-16">
              <p>£150 million+</p>
              <span className="sub-heading-sw">DATA BREACH COST</span>
            </div>
            {/* <p className="sw-headind-3 sw-font-weight-md hacks-heding-1">
              33,000+
              <br />
              <span> HACKS PER DAY</span>
            </p>
            <p className="sw-nav-links  sw-font-weight-xs hacks-heding-1">
              £150 million+ <br />
              <span> DATA BREACH COST</span>
            </p> */}
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  )
}

export default HeroSection
