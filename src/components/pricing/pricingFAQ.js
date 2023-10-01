import React from "react"
import ScrollAnimation from "react-animate-on-scroll"
import Accordion from 'react-bootstrap/Accordion'
import { SectionHeadings } from "../helperComponents/helpers"

const PricingFAQ = () => {
  return (
    <div className="pricing_faq_section">
      <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
        <SectionHeadings
          heading="Frequently asked questions"
          subheading=""
        />      
      </ScrollAnimation>
      <div className="pricing_faq">
      <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Can I use Securiwiser for free?</Accordion.Header>
          <Accordion.Body>
          You can choose our Basic plan which is completely free. You can upgrade to our Premium or Business plan if you wish to access our premium features.          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>How does pricing work?</Accordion.Header>
          <Accordion.Body>
          Our paid plans are billed either monthly or yearly. Save up to 30% when you choose our yearly plan          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Is there a free trial available?</Accordion.Header>
          <Accordion.Body>
          You can try our Securiwiser Premium/Business Plan free for 7 days. To activate, you will need to upgrade using your credit card. You can cancel at any time during your free trial.          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>What is the difference between the Premium and Business Plan?</Accordion.Header>
          <Accordion.Body>
          The business plan gives you access to the API and compliance forms which you don't get in the premium pan.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>What payment methods do you accept?</Accordion.Header>
            <Accordion.Body>
            We accept all major Credit Cards as well as PayPal payments.
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>Can I change my plan?</Accordion.Header>
            <Accordion.Body>
            Yes. You can upgrade or downgrade your plan any time from your ‘Billings’.
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>Can I add multiple users to my plan?</Accordion.Header>
          <Accordion.Body>
          Yes. With our “Premium” and “Business” plans, you can have multiple users and team collaboration.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header>What is your refund policy?</Accordion.Header>
          <Accordion.Body>
          We do not offer refunds on paid services, but you can choose to cancel any time before your next billing date from your dashboard.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      </div>
    </div>
  )
}

export default PricingFAQ
