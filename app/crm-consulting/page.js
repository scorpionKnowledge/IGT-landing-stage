"use client";
import AkpagerAccordion from "@/components/AkpagerAccordion";
import Counter from "@/components/Counter";
import PageBanner from "@/components/PageBanner";
import AkpagerLayout from "@/layouts/AkpagerLayout";
import Link from "next/link";
import { useState } from "react";
import { Accordion } from "react-bootstrap";
const accordionItems = [
  {
    id: 1,
    title: "How To Get Our Services?",
    value:
      "At vero eoset accusamus etiusto dignissimos duci blanditiis praesentium corrupti dolores molest excepturi sint occaecati cupiditate",
  },
  {
    id: 2,
    title: "What Is Data Analysis For Business ?",
    value:
      "At vero eoset accusamus etiusto dignissimos duci blanditiis praesentium corrupti dolores molest excepturi sint occaecati cupiditate",
  },
  {
    id: 3,
    title: "Why Need Marketing Data Analysis ?",
    value:
      "At vero eoset accusamus etiusto dignissimos duci blanditiis praesentium corrupti dolores molest excepturi sint occaecati cupiditate",
  },
  {
    id: 4,
    title: "Have Any Dedicated Support Team ?",
    value:
      "At vero eoset accusamus etiusto dignissimos duci blanditiis praesentium corrupti dolores molest excepturi sint occaecati cupiditate",
  },
];
const page = () => {
  const [active, setActive] = useState("collapse1");
  return (
    <AkpagerLayout onePage={true}>
      <PageBanner
        pageName={"CRM Consulting Services"}

        titleTag="h2"
      />
      {/* Service Management Area Start */}
      <section className="service-mamagement-area pt-60 rpt-30 pb-90 rpb-60">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="service-mamagement-content mt-40 rmb-20"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-30">
                  <h2>
                  Ignite Growth with Intelligent CRM Innovation
                  </h2>
                </div>
                <p>
                At Infinity Global Tech, we enable business to redefine their customer engagement and operational capabilities through a unique, tailored Salesforce consulting services. As your Salesforce partner, we provide holistic solutions, starting from strategic clarity, technical precision, and industry insight to every engagement from conceptualization to deployment and beyond. Thus, our custom solutions enhance performance, scalability, and return on investment, whether you're starting your Salesforce journey or optimizing a stable environment.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="management-images float-lg-end my-40"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img
                  src="assets/images/about/service-management.png"
                  alt="Management"
                />
                <div className="management-over">
                  <img
                    src="assets/images/about/management2.png"
                    alt="Management"
                    data-aos="fade-right"
                    data-aos-delay={50}
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service Management Area End */}
      {/* Marketing Solutions Area Start */}
      <section className="marketing-solutions-area pb-80 rpb-50">
        <div className="container">
          <div className="row gap-90 align-items-center">
            <div className="col-lg-6">
              <div
                className="marketing-solutions-images mb-50"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img
                  className="br-20"
                  src="assets/images/about/marketing-solutions.png"
                  alt="About"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="marketing-solutions-content"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-30">
                  <h2>
                  Our Salesforce Expertise: Strategic. Scalable. Seamless.
                  </h2>
                </div>
                <p>
                Our Salesforce consulting practice is built on a foundation of domain knowledge and deep platform fluency. We specialize in:
                </p>
                <ul>
                  <li>
                    <b>CRM Strategy & Road mapping:</b> We help you to align your Salesforce adoption by keeping in mind your long-term business goals through a clear, scalable roadmap tailored to your industry.
                  </li>
                  <li>
                    <b>End-to-End Salesforce Implementation:</b> We ensure a seamless migration into the Salesforce ecosystem. Starting from initial planning and configuration to data migration and user onboarding, we forge a successful implementation.
                  </li>
                  <li>
                    <b>Custom Application Development: </b> We develop customized, robust, industry-specific apps using Apex, Lightning Components, and Visualforce to optimize user experiences and operational outcomes.
                  </li>
                  <li>
                    <b>AppExchange Enablement:</b> We guide you to uncover and integrate powerful applications on Salesforce AppExchange to expand and amplify your digital capabilities.
                  </li>
                  <li>
                    <b>Training & Post-Go-Live Optimization:</b> Our assistance doesn't stop at deployment. We offer continuous user training, performance improvements, and system optimization to keep your CRM future-ready.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Marketing Solutions Area End */}

      {/* FAQs area start */}
      <section className="faqs-area pt-100 rpt-70">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="faq-content-four rmb-65"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title pb-20">
                  <h2>
                  Why Choose Infinity Global Tech?
                  </h2>
                </div>
                <ul className="why-card-wrapper">
                  <li>We provide business-aligned custom solutions.</li>
                  <li>Rapid Deployment with Minimal Downtime</li>
                  <li>Expertise Across Multiple Domains</li>
                  <li>AppExchange Navigation & Support</li>
                </ul>
                <p>
                From finance and healthcare to retail, real estate, and technology, our team brings proven success in diverse sectors—delivering Salesforce solutions that don’t just support growth but accelerate it.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="faq-images-part ms-lg-auto"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="assets/images/faq/faq1.png" alt="FAQs" />
                </div>
                <div className="row gap-20">
                  <div className="col-6">
                    <div className="image">
                      <img src="assets/images/faq/faq2.png" alt="FAQs" />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="image">
                      <img src="assets/images/faq/faq3.png" alt="FAQs" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQs area End */}
    </AkpagerLayout>
  );
};
export default page;
