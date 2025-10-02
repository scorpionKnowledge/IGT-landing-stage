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
        pageName={"Ongoing Maintenance & Support"}

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
                  Keep Your Salesforce Running at Peak Performance with Trusted Expert Support
                  </h2>
                </div>
                <p>
                At Infinity Global Tech, we understand how important an updated CRM is for your business. So, we have created Salesforce Maintenance and Support services to help you build a CRM that is optimized, secure, and aligned with your business growth. Keeping your CRM active requires attention, timely updates, and proactive issue resolution.
                </p>
                <p>
                Our Salesforce Maintenance and Support services are designed to provide an end-to-end solution—from ongoing support and troubleshooting to regular updates— all to help your platform deliver better results. Our team of experts is here to ensure your Salesforce system runs smoothly and efficiently, regardless of any system errors, performance lags, or routine updates.
                </p>
                <p>
                Working with Infinity Global Tech gives you access to a group of Salesforce professionals who are dedicated to your long-term success.
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
                  What Our Salesforce Maintenance and Support Services Offer
                  </h2>
                </div>

                <ul>
                  <li>
                    <b>System Monitoring & Issue Resolution:</b> We provide proactive monitoring to detect and resolve issues before they impact users.
                  </li>
                  <li>
                    <b>User Administration & Security Management:</b> We ensure secure data access by managing roles, profiles, and permissions efficiently.
                  </li>
                  <li>
                    <b>Performance Optimization:</b> Continuous audits and system tuning to improve efficiency and reduce load times.
                  </li>
                  <li>
                    <b>Feature Enhancements & Updates:</b> Implementing new features, workflows, and customizations as your business evolves.
                  </li>
                  <li>
                    <b>Data Management & Cleanup:</b> Ensure data accuracy through regular backups, deduplication, and archiving.
                  </li>
                  <li>
                    <b>Salesforce Version Upgrades:</b> Seamless transition during Salesforce seasonal releases and updates.
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
                  Why Choose Us for Salesforce Support?

                  </h2>
                </div>
                <ul className="why-card-wrapper">
                  <li>Quick turnaround and personalized assistance.</li>
                  <li>Expertise in both Salesforce Classic and Lightning environments.</li>
                  <li>Scalable service plans tailored to your business size and budget.</li>
                  <li>Proactive maintenance to prevent issues before they occur.</li>
                  <li>End-to-end coverage from security to feature enhancements.</li>
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
