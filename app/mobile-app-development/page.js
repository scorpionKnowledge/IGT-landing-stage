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
        pageName={"Mobile App Development"}

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
                  Empowering Businesses with Scalable, User-Friendly Mobile Solutions
                  </h2>
                </div>
                <p>
                Infinity Global Tech makes mobile app development easy with our full-service approach to developing mobile business and client solutions. Our team is ready to build secure, efficacious apps that accomplish what you’re after—whether you want to run them on iOS, Android, or reach across platforms using React Native. With years of industry experience, we focus on usability, reliable performance, and seamless integration to keep your app running smoothly and genuinely contributing to your business growth.
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
                  Our Development Expertise
                  </h2>
                </div>
                <p>
                We specialize in the following platforms:
                </p>
                <ul>
                  <li>
                    <b>iOS App Development:</b> Developing polished, scalable applications for iPhone and iPad that adhere to Apple’s design standards and deliver flawless performance.
                  </li>
                  <li>
                    <b>Android App Development:</b> Creating flexible and highly reliable Android apps across multiple devices and OS versions using cutting-edge tools and techniques.
                  </li>
                  <li>
                    <b>React Native Development:</b> Building high-performance cross-platform apps with React Native for faster time-to-market and a unified experience across both iOS and Android.
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
                  Why Choose Us for Mobile App Development?
                  </h2>
                </div>
                <ul className="why-card-wrapper">
                  <li>Comprehensive native and hybrid app development under one roof.</li>
                  <li>Custom-built apps tailored to your unique business and user needs.</li>
                  <li>UI/UX excellence that drives user engagement and retention.</li>
                  <li>Agile development for quicker turnaround and continuous feedback integration.</li>
                  <li>Post-launch support to ensure smooth app performance and reliability.</li>
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
