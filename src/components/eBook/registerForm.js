import React from "react"
import { Formik } from "formik"
import Swal from "sweetalert2/dist/sweetalert2.js"
import "sweetalert2/src/sweetalert2.scss"
import addToMailchimp from "gatsby-plugin-mailchimp"

const RegisterForm = ({ slug, file }) => {
    slug = slug.toLowerCase(); 
    let html
    let title
    if (file) {
        title = 'Your download is ready'
        html = `<a class="download-button" href="${file}" target="_blank" title="Download eBook">Download eBook</a>`
    } else {
        title = 'Coming soon!'
        html = `<a class="download-button disabled" href="#" title="Download eBook">Download eBook</a>`
    }
    return (
        <Formik
            initialValues={{ email: "", name: "" }}
            validate={values => {
            const errors = {}
            if (!values.name) {
                errors.name = "Required"
            }
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
            addToMailchimp(values.email, {
                FNAME: values.name,
                TAGS: slug
            },'https://securiwiser.us6.list-manage.com/subscribe/post?u=c1d918ebb5b3df47d89d58902&amp;id=bfd965d8a1'
            ) // listFields are optional if you are only capturing the email address.
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
                            icon: file ? "success" : "info",
                            title: title,
                            showConfirmButton: false,
                            html: html
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
            <form className="ebook-register" onSubmit={handleSubmit}>
                <div hidden="true"><input type="hidden" name="tags" value="3216341"/></div>
                <input
                    placeholder="Your  name"
                    type="text"
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                />
                <p className="error">
                  {errors.name && touched.name && errors.name}
                </p>
                <input
                    placeholder="Enter your email"
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                />
                <p className="error">
                  {errors.email && touched.email && errors.email}
                </p>
                {!isSubmitting ? (
                <button
                    type="submit"
                >
                    Download Free eBook
                </button>
                ) : (
                <button
                    type="submit"
                    disabled={true}
                >
                    Sending ...
                </button>
                )}
            </form>
            )}
        </Formik>
    )
}

export default RegisterForm