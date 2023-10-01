import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/layout";
import Home from "../components/home";
import SEO from "../components/layout/seo";
import Index from "../components/glossary/index";
const GlossaryPage = () => {
  return (
    <Layout>
      <SEO
        description="Welcome to the world of cybersecurity, where every byte of information is valuable and every click of a mouse could potentially expose you to a variety of cyber threats."
        title="The ABC of Cybersecurity"
      />
      <Index/>
    </Layout>
  )
}

export default GlossaryPage