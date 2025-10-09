"use client";
import Counter from "@/components/Counter";
import PageBanner from "@/components/PageBanner";
import AkpagerLayout from "@/layouts/AkpagerLayout";
import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import { useEffect } from "react";
import Slider from "react-slick";

const page = () => {
  useEffect(() => {
    document.title = "Contact Infinity Global Tech | CRM Consulting Experts";
  }, []);
  return (
    <>
      <AkpagerLayout onePage={true}>
        <PageBanner pageName={"INFINITY GLOBAL TECH"} />
        {/* About Area Start */}
        <section className="about-area py-90 rpy-60">
          <div className="container">
            <div className="row gap-90 align-items-center">
              <div className="col-xl-6 col-lg-5">
                <div
                  className="about-images my-20"
                  data-aos="fade-left"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <img src="assets/images/imgs/company.jpg" alt="About" />
                  {/* <div className="about-over">
                  <img src="assets/images/about/about2.png" alt="About" />
                </div> */}
                </div>
              </div>
              <div className="col-xl-6 col-lg-7">
                <div
                  className="about-content mt-40 rmt-15"
                  data-aos="fade-right"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <span className="subtitle d-block mb-10">About Us</span>

                  <div className="section-title mb-30 team-title">
                    <h2>Guided by Legacy, Driven by Innovation</h2>
                  </div>
                  <p>
                    Infinity Global Tech (IGT) is a Salesforce consulting and
                    technology solutions company helping businesses transform
                    operations through CRM innovation and automation.
                  </p>
                  <div className="row">
                    <div className="col-lg-6">
                      <h4>Vision:</h4>
                      <p>
                        To be a trusted digital partner delivering scalable and
                        intelligent Salesforce solutions across industries.
                      </p>
                    </div>
                    <div className="col-lg-6">
                      <h4>Mission:</h4>
                      <p>
                        To simplify technology adoption for businesses and
                        empower teams through powerful CRM systems that drive
                        measurable results.
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <h5>Core Values:</h5>
                      <ul className="dot-list">
                        <li>Integrity in every engagement</li>
                        <li>Client-first approach</li>
                        <li>Innovation through technology</li>
                        <li>Commitment to quality and delivery</li>
                      </ul>
                      <br />
                    </div>
                    <div className="col-lg-12">
                      <h5>Strengths:</h5>
                      <ul className="dot-list">
                        <li>
                          Expertise in Salesforce customization for real estate,
                          manufacturing, and enterprise clients
                        </li>
                        <li>Agile delivery model with end-to-end support</li>
                        <li>Cost-effective implementation strategies</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* About Area End */}

        <section className="innovation-dedication-area py-130 rpy-100">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div
                  className="innovation-dedication-content rmb-55"
                  data-aos="fade-left"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="section-title mb-30 team-title">
                    <h2>
                      Vijayakumar
                      <i>Founder, Infinity Global Tech</i>
                    </h2>
                  </div>
                  <p>
                    A visionary entrepreneur with deep business roots in the
                    well-known Mallika Batteries family, established way back in
                    1955. After spending many years working with a leading
                    architectural firm and helping industries and townships
                    navigate complex approvals, he discovered his real passion —
                    using technology to simplify business challenges.
                  </p>
                  <p>
                    That passion led to the birth of <b>Infinity Global Tech</b>{" "}
                    — a company built on trust, innovation, and a strong belief
                    that technology should empower people. Today, under his
                    leadership, IGT helps businesses harness the power of{" "}
                    <b>Salesforce CRM</b> to work smarter, connect better, and
                    grow faster.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="innovation-dedication-images">
                  <div
                    // className="image-one"
                    data-aos="fade-right"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <img
                      src="assets/images/teams/vijaykumar.png"
                      alt="vijaykumar"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Innovation Dedication Area End */}
        <section className="innovation-dedication-area py-130 rpy-100">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="innovation-dedication-images">
                  <div
                    // className="image-one"
                    data-aos="fade-right"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <img
                      src="assets/images/teams/fullsize/bushan.jpeg"
                      alt="bushan"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="innovation-dedication-content rmb-55"
                  data-aos="fade-left"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="section-title mb-30 team-title">
                    <h2>
                      Bushan Babu
                      <i>Admin &amp; HR</i>
                    </h2>
                  </div>
                  <p>
                    The go-to person who keeps our workplace running smoothly
                    and our team happy! From handling HR processes and
                    onboarding new faces to making sure the day-to-day admin
                    runs like clockwork, he’s the calm center of our busy office
                    life. With a knack for people management and a practical
                    approach to solving challenges, he makes sure everyone has
                    what they need to do their best work. Whether it’s
                    coordinating with vendors, organizing office activities, or
                    keeping things compliant, he does it all with a smile.
                    Behind his easygoing style is someone who truly believes
                    that great culture builds great teams — and he’s all about
                    making that happen every day.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Innovation Dedication Area End */}

        <section className="innovation-dedication-area py-130 rpy-100">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div
                  className="innovation-dedication-content rmb-55"
                  data-aos="fade-left"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="section-title mb-30 team-title">
                    <h2>
                      Suvarna,
                      <i>Business Analyst</i>
                    </h2>
                  </div>
                  <p>
                    A professional who bridges business needs and technical
                    solutions within the Salesforce CRM platform, analyzing
                    requirements, designing optimal configurations, and ensuring
                    seamless integration and user adoption to improve
                    operational efficiency and achieve business goals. Key
                    responsibilities include eliciting and documenting business
                    requirements, developing user stories, collaborating with
                    developers on solution design, leading user acceptance
                    testing (UAT), providing training, and offering
                    post-implementation support.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="innovation-dedication-images">
                  <div
                    // className="image-one"
                    data-aos="fade-right"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <img
                      src="assets/images/teams/fullsize/suvarna.jpeg"
                      alt="suvarna"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Innovation Dedication Area End */}
        <section className="innovation-dedication-area py-130 rpy-100">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="innovation-dedication-images">
                  <div
                    // className="image-one"
                    data-aos="fade-right"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <img
                      src="assets/images/teams/fullsize/sravya.jpeg"
                      alt="sravya"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="innovation-dedication-content rmb-55"
                  data-aos="fade-left"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="section-title mb-30 team-title">
                    <h2>
                      Sravya,
                      <i>Developer</i>
                    </h2>
                  </div>
                  <p>
                    She is stepping into the world of Salesforce with curiosity,
                    energy, and a genuine passion for building smart, efficient
                    solutions. Always eager to learn, explore, and take on new
                    challenges, she brings a refreshing mix of enthusiasm and
                    problem-solving spirit to our tech team. From experimenting
                    with automation flows to understanding the finer details of
                    CRM customization, she is growing fast — contributing fresh
                    ideas, creative thinking, and a hands-on approach to every
                    project. With her learner’s mindset and team-first attitude,
                    she truly embodies the spirit of innovation we value..
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Innovation Dedication Area End */}

        <section className="innovation-dedication-area py-130 rpy-100">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div
                  className="innovation-dedication-content rmb-55"
                  data-aos="fade-left"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="section-title mb-30 team-title">
                    <h2>
                      Prabhu,
                      <i>Developer</i>
                    </h2>
                  </div>
                  <p>
                    He brings fresh energy and curiosity to our Salesforce team,
                    diving deep into the world of CRM development with a keen
                    eye for detail. Passionate about learning and building
                    efficient solutions, he’s quick to explore new tools,
                    automate processes, and turn ideas into working features.
                    With his hands-on approach and steady problem-solving
                    mindset, He is fast becoming a dependable part of our tech
                    crew — blending curiosity with commitment to deliver smart,
                    scalable results.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="innovation-dedication-images">
                  <div
                    // className="image-one"
                    data-aos="fade-right"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <img
                      src="assets/images/teams/fullsize/prabhu.jpeg"
                      alt="prabhu"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Innovation Dedication Area End */}
        <section className="innovation-dedication-area py-130 rpy-100">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="innovation-dedication-images">
                  <div
                    // className="image-one"
                    data-aos="fade-right"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <img
                      src="assets/images/teams/fullsize/sravya.jpeg"
                      alt="sravya"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="innovation-dedication-content rmb-55"
                  data-aos="fade-left"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="section-title mb-30 team-title">
                    <h2>
                      Chandrakala
                      <i>Quality Assurance</i>
                    </h2>
                  </div>
                  <p>
                    She brings a sharp eye for detail and a thoughtful approach
                    to everything she tests. As part of our QA team, she’s
                    passionate about ensuring every feature works seamlessly —
                    and that users get the best possible experience. Curious,
                    patient, and always eager to learn, she approaches quality
                    assurance not just as checking boxes but as understanding
                    how things truly work. With her methodical mindset and
                    steady focus, she is quickly growing into a reliable
                    guardian of product quality..
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Innovation Dedication Area End */}
        {/* Testimonials Area Start */}
        <section className="d-none testimonials-area py-130 rpy-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-7 col-lg-9 col-md-11">
                <div
                  className="section-title text-center mb-60"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <h2>1253+ Global Clients Say About Our Business Services</h2>
                </div>
              </div>
            </div>
            <Slider
              {...sliderProps.testiSliderNine}
              className="testi-slider-nine"
            >
              <div className="testimonial-item">
                <div className="author">
                  <div className="image">
                    <img
                      src="assets/images/testimonials/author11.png"
                      alt="Author"
                    />
                  </div>
                  <div className="title">
                    <b>Kathryn Murphy /</b> System Analyst
                  </div>
                </div>
                <div className="author-text">
                  Highly recommended! This we product exceeded expectation in
                  every way. It has become an essential part of my daily lifes
                  and I'm grateful impact
                </div>
                <div className="testi-footer">
                  <div className="ratting mt-10">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <span className="text mt-10">
                    <span>4.7/5</span> on Trustpilot
                  </span>
                </div>
              </div>
              <div className="testimonial-item">
                <div className="author">
                  <div className="image">
                    <img
                      src="assets/images/testimonials/author12.png"
                      alt="Author"
                    />
                  </div>
                  <div className="title">
                    <b>Cody Fisher /</b> Chief Technology Officer
                  </div>
                </div>
                <div className="author-text">
                  Prompt delivery &amp; top-notch quality. Impressed with to the
                  speed and accuracy. The ways efficiency and speed at which
                  they delivered the product is were impressive.
                </div>
                <div className="testi-footer">
                  <div className="ratting mt-10">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <span className="text mt-10">
                    <span>4.7/5</span> on Trustpilot
                  </span>
                </div>
              </div>
              <div className="testimonial-item">
                <div className="author">
                  <div className="image">
                    <img
                      src="assets/images/testimonials/author13.png"
                      alt="Author"
                    />
                  </div>
                  <div className="title">
                    <b>Devon Lane /</b> Delivery Head
                  </div>
                </div>
                <div className="author-text">
                  Life-changing experience! I learned so much from their
                  program. Participating in their program was a transformative
                  experience for me.
                </div>
                <div className="testi-footer">
                  <div className="ratting mt-10">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <span className="text mt-10">
                    <span>4.7/5</span> on Trustpilot
                  </span>
                </div>
              </div>
              <div className="testimonial-item">
                <div className="author">
                  <div className="image">
                    <img
                      src="assets/images/testimonials/author5.png"
                      alt="Author"
                    />
                  </div>
                  <div className="title">
                    <b>Cody Fisher /</b> Chief Technology Officer
                  </div>
                </div>
                <div className="author-text">
                  Prompt delivery &amp; top-notch quality. Impressed with to the
                  speed and accuracy. The ways efficiency and speed at which
                  they delivered the product is were impressive.
                </div>
                <div className="testi-footer">
                  <div className="ratting mt-10">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <span className="text mt-10">
                    <span>4.7/5</span> on Trustpilot
                  </span>
                </div>
              </div>
            </Slider>
          </div>
        </section>
        {/* Testimonials Area End */}
      </AkpagerLayout>
    </>
  );
};
export default page;
