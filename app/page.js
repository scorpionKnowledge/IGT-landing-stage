import Counter from "@/components/Counter";

import AkpagerLayout from "@/layouts/AkpagerLayout";
import dynamic from "next/dynamic";
import Link from "next/link";

// const TestimonialSlider = dynamic(
//   () => import("@/components/TestimonialSlider"),
//   {
//     ssr: false,
//   }
// );
const TestimonialSliderCaseStudy = dynamic(
  () => import("@/components/TestimonialSlider-casestudy"),
  {
    ssr: false,
  }
);
const TestimonialSliderTesti = dynamic(
  () => import("@/components/TestimonialSlider-testi"),
  {
    ssr: false,
  }
);

const Index = () => {
  return (
    <AkpagerLayout onePage={true}>
      {/* Hero area start */}
      <section
        className="hero-area bgs-cover py-250 rpy-150 overlay"
        style={{ backgroundImage: "url(assets/images/imgs/herobg.jpeg)" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            {/* <div className="col-xl-7 col-lg-10 col-md-11"> */}
            <div className="col-xl-12 col-lg-9 col-md-10">
              <div className="hero-content text-center text-white">
                {/* <span
                  className="subtitle-one mb-20"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <i className="fas fa-chart-line" /> BEST ANALYTICS TOOL
                </span> */}
                <h1
                  className="mb-3"
                  data-aos="fade-up"
                  data-aos-delay={200}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  Guided by Legacy, Driven by Innovation
                </h1>
                <p
                  data-aos="fade-up"
                  data-aos-delay={200}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  We help businesses to streamline sales, automate customer
                  management, and grow faster using custom Salesforce CRM
                  solutions.
                </p>
                <div
                  className="hero-btns"
                  data-aos="fade-up"
                  data-aos-delay={400}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <Link href="/about" legacyBehavior>
                    <a className="theme-btn">
                      Learn More <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                  <Link href="/services" legacyBehavior>
                    <a className="theme-btn style-two">
                      Our Services <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero area End */}
      {/* Services Area Start */}
      <section
        className="services-area bgp-bottom bgc-navyblue pb-55 rel z-2"
        style={{
          backgroundImage: "url(assets/images/backgrounds/wave-shape.png)",
        }}
      >
        <div className="container">
          <div className="services-wrap">
            <div className="row justify-content-center">
              <div
                className="col-xl-4 col-md-6"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="iconic-box">
                  <div className="icon">
                    <i className="flaticon-customer-service-1" />
                  </div>
                  <div className="content">
                    <h4>
                      <Link legacyBehavior href="/services">
                        CRM Consulting
                      </Link>
                    </h4>
                    <p>
                      Tailored consultation enhances client relations, boosts
                      efficiency, & drives business excellence.
                    </p>
                    <hr />
                    <Link legacyBehavior href="/services">
                      <a className="read-more">
                        Read More <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                  <div className="bg">
                    <img
                      src="assets/images/shapes/iconic-box-bg.png"
                      alt="Shape"
                    />
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={100}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="iconic-box">
                  <div className="icon">
                    <i className="flaticon-idea" />
                  </div>
                  <div className="content">
                    <h4>
                      <Link legacyBehavior href="/services">
                        Optimize sales channels
                      </Link>
                    </h4>
                    <p>
                      Streamline strategies to maximise revenue across all sales
                      touchpoints efficiently.
                    </p>
                    <hr />
                    <Link legacyBehavior href="/services">
                      <a className="read-more">
                        Read More <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                  <div className="bg">
                    <img
                      src="assets/images/shapes/iconic-box-bg.png"
                      alt="Shape"
                    />
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={200}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="iconic-box">
                  <div className="icon">
                    <i className="flaticon-earning" />
                  </div>
                  <div className="content">
                    <h4>
                      <Link legacyBehavior href="/services">
                        App Development
                      </Link>
                    </h4>
                    <p>
                      Elegant, tailored apps blending innovation, functionality,
                      and seamless user experience.
                    </p>
                    <hr />
                    <Link legacyBehavior href="/services">
                      <a className="read-more">
                        Read More <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                  <div className="bg">
                    <img
                      src="assets/images/shapes/iconic-box-bg.png"
                      alt="Shape"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="row justify-content-center">
            <div className="col-xl-9">
              <blockquote
                className="blockquote-one text-white"
                data-aos="fade-up"
                data-aos-duration={1000}
                data-aos-offset={50}
              >
                <div className="text">
                  "Necessity is the mother of invention and digitisation is more
                  important than ever. Winning companies are prioritizing speed
                  and adaptability to both make it through the storm and seize
                  emerging opportunities,
                </div>
                <div className="author">
                  <img src="assets/images/teams/sunil_jose.jpeg" alt="Author" />
                  <div className="name">
                    <h5>Sunil Jose,</h5>{" "}
                    <span>Senior Vice President, Salesforce India</span>
                  </div>
                </div>
              </blockquote>
            </div>
          </div> */}
        </div>
      </section>
      {/* Services Area End */}
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

                <div className="section-title mb-30">
                  <h2>
                    Empowering Real Estate, Health Care, Manufacturing,
                    Automotive, and beyond with Smart Salesforce Solutions.
                  </h2>
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
                      To simplify technology adoption for businesses and empower
                      teams through powerful CRM systems that drive measurable
                      results.
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
          {/* <div className="row gap-90 align-items-center">
            <div className="flex flex-col md:flex-row gap-2">
              <div>
                <h5>Core Values:</h5>
                <ul>
                  <li>Integrity in every engagement</li>
                  <li>Client-first approach</li>
                  <li>Innovation through technology</li>
                  <li>Commitment to quality and delivery</li>
                </ul>
              </div>
              <div>
                <h5>Strengths:</h5>
                <ul>
                  <li>
                    Expertise in Salesforce customization for real estate,
                    manufacturing, and enterprise clients
                  </li>
                  <li>Agile delivery model with end-to-end support</li>
                  <li>Cost-effective implementation strategies</li>
                </ul>
              </div>
            </div>
          </div> */}
        </div>
      </section>
      {/* About Area End */}
      <section className="innovation-dedication-area py-50 rpy-100">
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
                  That passion led to the birth of <b>Infinity Global Tech</b> —
                  a company built on trust, innovation, and a strong belief that
                  technology should empower people. Today, under his leadership,
                  IGT helps businesses harness the power of{" "}
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
                    src="assets/images/teams/vijaykumar.jpeg"
                    alt="vijaykumar"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Innovation Dedication Area End */}
      {/* Team Area Start */}
      <section className="team-area pb-80 rpb-50">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9">
              <div
                className="section-title text-center mb-55"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h2>Let’s Meet Our Professionals Team Members</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className=" col-lg-4 col-sm-6">
              <div
                className="team-member"
                data-aos="fade-up"
                data-aos-duration={1000}
                data-aos-offset={50}
              >
                <div className="image cursor-pointer">
                  <Link href="/about" legacyBehavior>
                    <img src="assets/images/teams/bushan.jpeg" alt="Team" />
                  </Link>
                  {/* <div className="social-media">
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="#">
                      <i className="fab fa-pinterest-p" />
                    </a>
                  </div> */}
                </div>
                <div className="description">
                  <h5>Bushan Babu</h5>
                  <span className="designation">Admin &amp; HR</span>
                </div>
              </div>
            </div>
            <div className=" col-lg-4 col-sm-6">
              <div
                className="team-member"
                data-aos="fade-up"
                data-aos-delay={200}
                data-aos-duration={1000}
                data-aos-offset={50}
              >
                <div className="image cursor-pointer">
                  <Link href="/about" legacyBehavior>
                    <img src="assets/images/teams/suvarna.jpeg" alt="Team" />
                  </Link>
                  {/* <div className="social-media">
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="#">
                      <i className="fab fa-pinterest-p" />
                    </a>
                  </div> */}
                </div>
                <div className="description">
                  <h5>Suvarna</h5>
                  <span className="designation">Business Analyst</span>
                </div>
              </div>
            </div>
            <div className=" col-lg-4 col-sm-6">
              <div
                className="team-member"
                data-aos="fade-up"
                data-aos-delay={400}
                data-aos-duration={1000}
                data-aos-offset={50}
              >
                <div className="image cursor-pointer">
                  <Link href="/about" legacyBehavior>
                    <img src="assets/images/teams/sravya.jpeg" alt="Team" />
                  </Link>
                  {/* <div className="social-media">
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="#">
                      <i className="fab fa-pinterest-p" />
                    </a>
                  </div> */}
                </div>
                <div className="description">
                  <h5>Sravya</h5>
                  <span className="designation">Developer</span>
                </div>
              </div>
            </div>
            <div className=" col-lg-4 col-sm-6">
              <div
                className="team-member"
                data-aos="fade-up"
                data-aos-delay={600}
                data-aos-duration={1000}
                data-aos-offset={50}
              >
                <div className="image cursor-pointer">
                  <Link href="/about" legacyBehavior>
                    <img src="assets/images/teams/prabhu.jpeg" alt="Team" />
                  </Link>
                  {/* <div className="social-media">
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="#">
                      <i className="fab fa-pinterest-p" />
                    </a>
                  </div> */}
                </div>
                <div className="description">
                  <h5>Prabhu</h5>
                  <span className="designation">Developer</span>
                </div>
              </div>
            </div>
            <div className=" col-lg-4 col-sm-6">
              <div
                className="team-member"
                data-aos="fade-up"
                data-aos-duration={1000}
                data-aos-offset={50}
              >
                <div className="image cursor-pointer">
                  <Link href="/about" legacyBehavior>
                    <img
                      src="assets/images/teams/Chandrakala.jpeg"
                      alt="Team"
                    />
                  </Link>
                  {/* <div className="social-media">
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="#">
                      <i className="fab fa-pinterest-p" />
                    </a>
                  </div> */}
                </div>
                <div className="description">
                  <h5>Chandrakala</h5>
                  <span className="designation">Quality Assurance</span>
                </div>
              </div>
            </div>
            {/* <div className=" col-lg-4 col-sm-6">
              <div
                className="team-member"
                data-aos="fade-up"
                data-aos-delay={200}
                data-aos-duration={1000}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="assets/images/team/member6.png" alt="Team" />
                  <div className="social-media">
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="#">
                      <i className="fab fa-pinterest-p" />
                    </a>
                  </div>
                </div>
                <div className="description">
                  <h5>Flores, Juanita</h5>
                  <span className="designation">Vice President</span>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      <section
        className="cta-area bgs-cover py-130 rpy-100"
        style={{ backgroundImage: "url(assets/images/backgrounds/cta.jpg)" }}
      >
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-6 col-lg-8">
              <div
                className="cta-content text-white rmb-35"
                data-aos="fade-left"
                data-aos-duration={1000}
                data-aos-offset={50}
              >
                <div className="section-title mb-40">
                  <h2>Ready to work together to implement CRM?</h2>
                </div>
                <Link legacyBehavior href="/contact">
                  <a className="theme-btn">
                    Contact Us <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="cta-btn text-lg-center text-start ps-lg-0 ps-2"
                data-aos="zoom-in-right"
                data-aos-duration={1000}
              >
                <a
                  href="https://www.youtube.com/watch?v=oQYgufbySOw"
                  className="mfp-iframe video-play"
                >
                  <i className="fas fa-play" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Area End */}
      {/* CTA Area Start */}
      {/* <section
        className="cta-area bgs-cover py-130 rpy-100"
        style={{ backgroundImage: "url(assets/images/backgrounds/cta.jpg)" }}
      >
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-6 col-lg-8">
              <div
                className="cta-content text-white rmb-35"
                data-aos="fade-left"
                data-aos-duration={1000}
                data-aos-offset={50}
              >
                <div className="section-title mb-40">
                  
                  <h2>
                    Ready to get started? <br />
                    Get your free consultation today
                  </h2>
                </div>
                <Link legacyBehavior href="/contact">
                  <a className="theme-btn">
                    Contact Us <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="cta-btn text-lg-center text-start ps-lg-0 ps-2"
                data-aos="zoom-in-right"
                data-aos-duration={1000}
              >
                <a
                  href="https://www.youtube.com/watch?v=9Y7ma241N8k"
                  className="mfp-iframe video-play"
                >
                  <i className="fas fa-play" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* CTA Area End */}
      {/* Recent Projects Area End */}
      <section className="project-area pt-130 rpt-100 pb-100 rpb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8 col-md-10">
              <div
                className="section-title text-center mb-60"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h2>Our key offerings</h2>
                {/* <p>
                  Our core services that are built to provide exceptional
                  digital transformation for your business
                </p> */}
              </div>
            </div>
          </div>
          <div className="row justify-content-center keyofferList">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div
                className="fancy-box style-two"
                data-aos="fade-up"
                data-aos-duration={1000}
                data-aos-offset={50}
              >
                <div className="image">
                  <img
                    src="assets/images/fancy-box/fancy-box-two1.jpg"
                    alt="Fancy Box"
                  />
                </div>
                <div className="content">
                  <a href="/services" className="category">
                    Salesforce CRM Consulting
                  </a>
                  <ul className="dot-list-bold">
                    <li>
                      Assess, plan, and implement tailored Salesforce solutions.
                    </li>
                    <li>Optimize workflows and improve sales performance.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div
                className="fancy-box style-two"
                data-aos="fade-up"
                data-aos-delay={200}
                data-aos-duration={1000}
                data-aos-offset={50}
              >
                <div className="image">
                  <img
                    src="assets/images/fancy-box/fancy-box-two2.jpg"
                    alt="Fancy Box"
                  />
                </div>
                <div className="content">
                  <a href="/services" className="category">
                    Custom App Development
                  </a>
                  <ul className="dot-list-bold">
                    <li>
                      Develop scalable Salesforce applications for
                      business-specific needs.
                    </li>
                    <li>
                      Integrate automation, analytics, and intuitive user
                      interfaces.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div
                className="fancy-box style-two"
                data-aos="fade-up"
                data-aos-delay={400}
                data-aos-duration={1000}
                data-aos-offset={50}
              >
                <div className="image">
                  <img
                    src="assets/images/fancy-box/fancy-box-two3.jpg"
                    alt="Fancy Box"
                  />
                </div>
                <div className="content">
                  <a href="/services" className="category">
                    Integration Services
                  </a>
                  <ul className="dot-list-bold">
                    <li>
                      Connect Salesforce with ERP, Finance, HR, or Marketing
                      systems.
                    </li>
                    <li>Ensure seamless data flow across departments.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div
                className="fancy-box style-two"
                data-aos="fade-up"
                data-aos-delay={600}
                data-aos-duration={1000}
                data-aos-offset={50}
              >
                <div className="image">
                  <img
                    src="assets/images/fancy-box/fancy-box-two4.jpg"
                    alt="Fancy Box"
                  />
                </div>
                <div className="content">
                  <a href="/services" className="category">
                    Real Estate CRM Solutions
                  </a>
                  <ul className="dot-list-bold">
                    <li>
                      Lead tracking, property listings, booking management, and
                      customer analytics.
                    </li>
                    <li>
                      Customized dashboards for builders, agents, and
                      developers.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-4 col-md-6 col-sm-8">
              <div
                className="fancy-box style-two"
                data-aos="fade-up"
                data-aos-duration={1000}
                data-aos-offset={50}
              >
                <div className="image">
                  <img
                    src="assets/images/fancy-box/fancy-box-two1.jpg"
                    alt="Fancy Box"
                  />
                </div>
                <div className="content">
                  <a href="/services" className="category">
                    Support & Maintenance
                  </a>
                  <ul className="dot-list-bold">
                    <li>24/7 technical assistance and system upgrades.</li>
                    <li>
                      Data backup, troubleshooting, and performance
                      optimization.
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      {/* Recent Projects Area End */}
      {/* Counter TimeLine Area Start */}
      <div className="counter-timeline-area">
        <div className="container">
          <div className="counter-timeline-wrap">
            <div className="row no-gap justify-content-center">
              <div className="col-lg-12">
                <h3 className="sec-title">Benefits of CRM</h3>
              </div>
            </div>
            <div className="row no-gap justify-content-center">
              <div className="col-lg-4 col-sm-6">
                <div
                  className="counter-timeline-item counter-text-wrap"
                  data-aos="fade-up"
                  data-aos-delay={200}
                  data-aos-duration={1000}
                  data-aos-offset={50}
                >
                  <div className="icon">
                    <i className="flaticon-review" />
                  </div>
                  <span className="dots">
                    <img
                      src="assets/images/shapes/counter-dots.png"
                      alt="Shape"
                    />
                  </span>
                  <div className="content">
                    <span
                      className="count-text "
                      data-speed={3000}
                      data-stop={25}
                    >
                      {/* <Counter end={50} /> */}
                      35%
                    </span>
                    <span className="counter-title">Boost in deal closure</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div
                  className="counter-timeline-item counter-text-wrap"
                  data-aos="fade-down"
                  data-aos-duration={1000}
                  data-aos-offset={50}
                >
                  <div className="content">
                    <span
                      className="count-text"
                      //  k-plus
                      data-speed={3000}
                      data-stop={235}
                    >
                      {/* <Counter end={235} /> */}
                      50%
                    </span>
                    <span className="counter-title">
                      Reduction in administrative work
                    </span>
                  </div>
                  <span className="dots">
                    <img
                      src="assets/images/shapes/counter-dots.png"
                      alt="Shape"
                    />
                  </span>
                  <div className="icon">
                    <i className="flaticon-layers-1" />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div
                  className="counter-timeline-item counter-text-wrap"
                  data-aos="fade-up"
                  data-aos-delay={400}
                  data-aos-duration={1000}
                  data-aos-offset={50}
                >
                  <div className="icon">
                    <i className="flaticon-online-registration" />
                  </div>
                  <span className="dots">
                    <img
                      src="assets/images/shapes/counter-dots.png"
                      alt="Shape"
                    />
                  </span>
                  <div className="content">
                    <span
                      className="count-text "
                      // plus
                      data-speed={3000}
                      data-stop={1052}
                    >
                      {/* <Counter end={1052} /> */}
                      80%
                    </span>
                    <span className="counter-title">
                      Faster lead response time
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Counter TimeLine Area End */}
      {/* Management Area Start */}
      <section
        className="management-area bgp-bottom bgc-navyblue py-60"
        style={{
          backgroundImage: "url(assets/images/backgrounds/wave-shape.png)",
        }}
      >
        <div className="container">
          <div className="row gap-110 align-items-center">
            <div className="col-lg-6">
              <div
                className="management-content text-white mt-40"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-30">
                  <h2>Take Effect Control of Business Management</h2>
                </div>

                <div className="row gap-50 pt-25">
                  <div className="col-md-6">
                    <div className="iconic-box style-nine text-white">
                      <div className="icon">
                        <i className="fal fa-laptop-code" />
                      </div>
                      <div className="content">
                        <h5>
                          <Link legacyBehavior href="service-details">
                            Mobile Friendly
                          </Link>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="iconic-box style-nine text-white">
                      <div className="icon">
                        <i className="fal fa-cog" />
                      </div>
                      <div className="content">
                        <h5>
                          <Link legacyBehavior href="service-details">
                            Powerful Prediction
                          </Link>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="management-images my-40"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img
                  src="assets/images/about/management1.png"
                  alt="Management"
                />
                {/* <div className="management-over">
                  <img
                    src="assets/images/about/management2.png"
                    alt="Management"
                  />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Management Area End */}
      {/* Testimonials Area Start */}
      {/* <section className="testimonials-area pt-130 rpt-100 pb-80 rpb-50">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9 col-md-11">
              <div
                className="section-title text-center mb-60"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h2>Case Studies</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="case-studies-slider">
        
          <TestimonialSliderCaseStudy />
        </div>
      </section> */}
      {/* Testimonials Area End */}
      {/* Blog Area Start */}
      {/* <section className="blog-area pb-100 rpb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9 col-md-11">
              <div
                className="section-title text-center mb-60"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h2>Get Every Single Updates and Learn Our News &amp; Blog</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-md-6 col-sm-10">
              <div
                className="blog-item style-two"
                data-aos="fade-up"
                data-aos-duration={1000}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="assets/images/blog/blog4.png" alt="Blog" />
                  <div className="date">
                    <b>25</b>
                    <span>Sep</span>
                  </div>
                </div>
                <div className="content">
                  <a href="#" className="category">
                    Business
                  </a>
                  <h5>
                    <Link legacyBehavior href="blog-details">
                      Meet Success the Cale Smashing Book By Addy Osmania
                    </Link>
                  </h5>
                  <ul className="blog-meta">
                    <li>
                      <i className="far fa-user-circle" />{" "}
                      <a href="#">Roger J. Spaulding</a>
                    </li>
                    <li>
                      <i className="far fa-comment-lines" />{" "}
                      <a href="#">Comments(5)</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-10">
              <div
                className="blog-item style-two"
                data-aos="fade-up"
                data-aos-delay={200}
                data-aos-duration={1000}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="assets/images/blog/blog5.png" alt="Blog" />
                  <div className="date">
                    <b>28</b>
                    <span>Sep</span>
                  </div>
                </div>
                <div className="content">
                  <a href="#" className="category">
                    Finance
                  </a>
                  <h5>
                    <Link legacyBehavior href="blog-details">
                      Practical Design Tips Guidelines For Beginner Designers
                    </Link>
                  </h5>
                  <ul className="blog-meta">
                    <li>
                      <i className="far fa-user-circle" />{" "}
                      <a href="#">Roger J. Spaulding</a>
                    </li>
                    <li>
                      <i className="far fa-comment-lines" />{" "}
                      <a href="#">Comments(5)</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-10">
              <div
                className="blog-item style-two"
                data-aos="fade-up"
                data-aos-delay={400}
                data-aos-duration={1000}
                data-aos-offset={50}
              >
                <div className="image">
                  <img src="assets/images/blog/blog6.png" alt="Blog" />
                  <div className="date">
                    <b>30</b>
                    <span>Sep</span>
                  </div>
                </div>
                <div className="content">
                  <a href="#" className="category">
                    Research
                  </a>
                  <h5>
                    <Link legacyBehavior href="blog-details">
                      Meet Success the Cale Smashing Book By Addy Osmania
                    </Link>
                  </h5>
                  <ul className="blog-meta">
                    <li>
                      <i className="far fa-user-circle" />{" "}
                      <a href="#">Roger J. Spaulding</a>
                    </li>
                    <li>
                      <i className="far fa-comment-lines" />{" "}
                      <a href="#">Comments(5)</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Blog Area End */}

      {/* <section className="testimonials-area pt-130 rpt-100 pb-80 rpb-50">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9 col-md-11">
              <div
                className="section-title text-center mb-60"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h2>Testimonials / Clients</h2>
              </div>
            </div>
          </div>
        </div>
        <TestimonialSliderTesti />
      </section> */}

      {/* Client Logos Area Start */}
      <section className="client-logo-area pb-40 pt-40 rpb-65">
        {/* <div
          className="section-title text-center mb-60"
          data-aos="fade-up"
          data-aos-duration={1500}
          data-aos-offset={50}
        >
          <h4>I’ve 1253+ Global Clients &amp; lot’s of Project Complete</h4>
        </div> */}
        <div className="client-logo-wrap">
          <div
            className="client-logo-item"
            data-aos="fade-up"
            data-aos-duration={1000}
            data-aos-offset={50}
          >
            <a href="https://www.tuyahomes.com/" target="_blank">
              <img
                src="assets/images/imgs/brand/logo001.png"
                alt="Client Logo"
              />
            </a>
          </div>
          <div
            className="client-logo-item"
            data-aos="fade-up"
            data-aos-delay={100}
            data-aos-duration={1000}
            data-aos-offset={50}
          >
            <a href="https://www.dhiyasoft.com/" target="_blank">
              <img
                src="assets/images/imgs/brand/logo002.png"
                alt="Client Logo"
              />
            </a>
          </div>
        </div>
      </section>
      {/* Client Logos Area End */}
    </AkpagerLayout>
  );
};
export default Index;
