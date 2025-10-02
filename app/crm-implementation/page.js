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
        pageName={"CRM Implementation Services"}

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
                  Tailored CRM Solutions for Seamless Digital Transformation
                  </h2>
                </div>
                <p>
                At Infinity Global Tech, our expert team is all set to help your business start your digital journey with our customized Salesforce implementation services. We help you blend technical expertise with strategic insight to create scalable CRM ecosystems. So, if you are deploying Salesforce for the first time or just revamping your existing setup, we offer a smooth implementation that is effective, tailored, and tangible. With our expertise, we forge Salesforce implementation services with the goal of creating a CRM that truly empowers your team and business.
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
                  Our Implementation Approach
                  </h2>
                </div>
                <p>
                We follow a systematic, step-by-step implementation process to ensure maximum ROI:
                </p>
                <ul>
                  <li>
                    <b>Requirement Gathering & Analysis:</b> We first analyze and map out how your business operates, identifying key business processes, pain points, and expectations, before developing a solution that fits your company's particular needs and goals.
                  </li>
                  <li>
                    <b>Solution Design:</b> After understanding your business requirements, we define system architecture, user roles, and data models to meet business needs and build a solution accordingly.
                  </li>
                  <li>
                    <b>Salesforce Configuration:</b> Set up and tailor Salesforce functionalities using Salesforce Lightning and custom CRM development.
                  </li>
                  <li>
                    <b>System Integration:</b> Connect Salesforce with third-party applications and existing systems to balance today’s interconnected business environment.
                  </li>
                  <li>
                    <b>Testing & Deployment:</b> Conduct thorough system testing and ensure smooth deployment. We ensure the solution is robust, error-free, and ready for your team to use.
                  </li>
                  <li>
                    <b>User Training & Support:</b> The best Salesforce implementation is when your team is fully equipped with the required knowledge of the tools. That's why we provide the training and support your team needs.
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
                  Why Choose Infinity Global Tech for Salesforce Implementation?
                  </h2>
                </div>
                <ul className="why-card-wrapper">
                  <li>We set up Salesforce to work with your business's processes.</li>
                  <li>Supported by industry-wide successful implementations.</li>
                  <li>Competent in CRM development and Salesforce Lightning.</li>
                  <li>From preparation to support after launch.</li>
                  <li>Agile methods for completing projects on schedule.</li>
                </ul>
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
