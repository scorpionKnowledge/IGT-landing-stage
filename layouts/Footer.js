import Link from "next/link";

const Footer = ({ footer }) => {
  switch (footer) {
    case 1:
      return <DefaultFooter />;
    case 2:
      return <Footer2 />;
    case 3:
      return <Footer3 />;
    case 4:
      return <Footer4 />;
    case 5:
      return <Footer5 />;
    case 6:
      return <Footer6 />;
    case 7:
      return <Footer7 />;
    case 8:
      return <Footer8 />;
    case 9:
      return <Footer9 />;

    default:
      return <DefaultFooter />;
  }
};
export default Footer;

const DefaultFooter = () => {
  return (
    <footer className="main-footer footer-one rel z-1 mt-100">
      <div className="container">
        <div className="footer-newsletter text-white">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-5">
              <div
                className="logo-part"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="logo mb-10">
                  <Link href="/">
                    <h6>Infinity Global Tech</h6>
                  </Link>
                </div>
                {/* <p>Digital Business Consulting Agency</p> */}
              </div>
            </div>
            <div className="col-xl-6 col-lg-7">
              <div
                className="form-part"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h5>Subscribe Our Newsletter</h5>
                <form className="newsletter-form mt-15" action="#">
                  <input type="email" placeholder="Email Address" required="" />
                  <button type="submit">
                    Sign Up <i className="far fa-arrow-right" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-12 col-xl-4">
            <div
              className="footer-widget widget-about"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <h6 className="footer-title">Infinity Global Tech</h6>
              <p>
              At IGT, we support your businesses to run smoother, smarter, and more connected than ever. We help businesses with an upgraded next-gen CRM and automation solution …
              </p>
              <div className="social-style-one">
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
          </div>
          <div className="d-none col-xl-3 col-lg-4 col-sm-6 order-xl-2">
            <div
              className="footer-widget widget-contact"
              data-aos="fade-up"
              data-aos-delay={400}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <h6 className="footer-title">Contact</h6>
              <ul>
                <li>
                  <i className="fal fa-map-marker-alt" /> 55 Main Street, 2nd
                  block Melbourne, Australia
                </li>
                <li>
                  <i className="fal fa-envelope" />{" "}
                  <a href="mailto:support@gmail.com">support@gmail.com</a>
                </li>
                <li>
                  <i className="fal fa-phone" />{" "}
                  <a href="callto:+0001234455">+000 (123) 44 55</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-8">
            <div className="row">
              <div className="col-sm-3 col-6">
                <div
                  className="footer-widget widget-links"
                  data-aos="fade-up"
                  data-aos-delay={100}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <h6 className="footer-title">Resources</h6>
                  <ul>
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/about">About Us</Link>
                    </li>
                    <li>
                      <Link href="/services">Services</Link>
                    </li>
                    <li>
                      <Link href="/contact">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-3 col-6">
                <div
                  className="footer-widget widget-links"
                  data-aos="fade-up"
                  data-aos-delay={200}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <h6 className="footer-title">Primary Pages</h6>
                  <ul>
                    <li>
                      <Link href="/privacy-policy">Privacy policy</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div
                  className="footer-widget widget-links"
                  data-aos="fade-up"
                  data-aos-delay={300}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <h6 className="footer-title">Career & opportunities</h6>
                  <p>
                  Join our dynamic team of innovators shaping the future of SaaS & Salesforce solutions. Elevate your career with cutting edge projects, collaborative culture, & limitless growth in a tech-driven ecosystem.
                  </p>
                  <Link legacyBehavior href="mailto:hr@infinityglobaltech.net?subject=Inquiry%20from%20Contact%20Form">
                    <button className="theme-btn">
                    Mail us
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom mt-30 py-15">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-6">
              <div
                className="copyright-text pt-10 text-lg-start text-center"
                data-aos="fade-left"
                data-aos-duration={1000}
                data-aos-offset={50}
              >
                <p>
                &copy; 2025 Infinity Global Tech | All Rights Reserved. Developed by{" "}
                  <Link
                    href="https://ejnarstudios.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    ejnarstudios
                  </Link>{" "}
                  Powered by{" "}
                  <Link
                    href="https://www.sacredtrinitydigiagency.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    SacredTrinityDigiAgency
                  </Link>
                </p>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6">
              <div
                className="footer-bottom-menu text-lg-end text-center"
                data-aos="fade-right"
                data-aos-duration={1000}
                data-aos-offset={50}
              >
                <ul>
                  <li>
                    <Link href="faqs">Faqs</Link>
                  </li>
                  <li>
                    <Link href="about">Setting</Link>
                  </li>
                  <li>
                    <Link href="about">Privacy</Link>
                  </li>
                  <li>
                    <Link href="contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Scroll Top Button */}
          <button className="scroll-top scroll-to-target" data-target="html">
            <span className="far fa-angle-double-up" />
          </button>
        </div>
      </div>
    </footer>
  );
};

const Footer2 = () => {
  return (
    <footer
      className="main-footer footer-two rel z-1 bgs-cover"
      style={{
        backgroundImage: "url(assets/images/backgrounds/footer-shape.png)",
      }}
    >
      <div className="container">
        <div className="footer-top-newsletter pt-120 rpt-100 mb-120 rmb-100">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-7 mx-xl-3">
              <div
                className="section-title mb-40 text-white text-center"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h2>
                  Join Our Newsletter to Get <span>Updates</span>
                </h2>
                <p>We Provide Best Pricing package to grow your lead capture</p>
              </div>
            </div>
            <div className="col-xl-7 col-lg-8">
              <form
                className="newsletter-form style-three"
                action="#"
                data-aos="fade-up"
                data-aos-delay={200}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <input type="email" placeholder="Email Address" required="" />
                <button type="submit">
                  Register <i className="far fa-arrow-right" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="container container-1450">
        <div className="footer-inner">
          <div className="row justify-content-between">
            <div className="col-xl-2 col-lg-12 col-sm-6">
              <div
                className="footer-widget widget-logo"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="footer-logo">
                  <Link href="/">
                    <img src="assets/images/logos/logo-white2.png" alt="Logo" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-sm-4 col-6">
              <div
                className="footer-widget widget-links"
                data-aos="fade-up"
                data-aos-delay={100}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h6 className="footer-title">Resources</h6>
                <ul>
                  <li>
                    <Link href="shop">Product</Link>
                  </li>
                  <li>
                    <Link href="services">Services</Link>
                  </li>
                  <li>
                    <Link href="about">About Us</Link>
                  </li>
                  <li>
                    <Link href="services">Benefits</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-sm-4 col-6">
              <div
                className="footer-widget widget-links"
                data-aos="fade-up"
                data-aos-delay={200}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h6 className="footer-title">Quick Link</h6>
                <ul>
                  <li>
                    <Link href="services">Features</Link>
                  </li>
                  <li>
                    <Link href="pricing">Pricing Plan</Link>
                  </li>
                  <li>
                    <Link href="about">Best Program</Link>
                  </li>
                  <li>
                    <Link href="contact">Press Kit</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-sm-4 col-6">
              <div
                className="footer-widget widget-links"
                data-aos="fade-up"
                data-aos-delay={300}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h6 className="footer-title">Company</h6>
                <ul>
                  <li>
                    <Link href="about">About</Link>
                  </li>
                  <li>
                    <Link href="team">Team Member</Link>
                  </li>
                  <li>
                    <Link href="about">Reviews</Link>
                  </li>
                  <li>
                    <Link href="blog">Latest News</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-sm-4 col-6">
              <div
                className="footer-widget widget-links"
                data-aos="fade-up"
                data-aos-delay={400}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h6 className="footer-title">Social</h6>
                <ul>
                  <li>
                    <Link href="contact">Facebook</Link>
                  </li>
                  <li>
                    <Link href="contact">Twitter</Link>
                  </li>
                  <li>
                    <Link href="contact">Instagram</Link>
                  </li>
                  <li>
                    <Link href="contact">LinkedIn</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="footer-bottom py-15">
          <div className="row align-items-center">
            <div className="col-xl-4 col-lg-6">
              <div className="copyright-text pt-10 text-lg-start text-center">
                <p>
                  Copyright @2024, <Link href="/">Infinity Global Tech </Link> All Rights
                  Reserved
                </p>
              </div>
            </div>
            <div className="col-xl-8 col-lg-6">
              <div className="footer-bottom-menu text-lg-end text-center">
                <ul>
                  <li>
                    <Link href="faqs">Faqs</Link>
                  </li>
                  <li>
                    <Link href="about">Setting</Link>
                  </li>
                  <li>
                    <Link href="about">Privacy</Link>
                  </li>
                  <li>
                    <Link href="contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Scroll Top Button */}
          <button className="scroll-top scroll-to-target" data-target="html">
            <span className="far fa-angle-double-up" />
          </button>
        </div>
      </div>
    </footer>
  );
};

const Footer3 = () => {
  return (
    <footer className="main-footer footer-three pt-100 rel z-1 bgc-navyblue">
      <div className="container">
        <div className="for-middle-border pb-50">
          <div className="row justify-content-between">
            <div className="col-xl-6 col-lg-7">
              <div
                className="footer-widget widget-about"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title text-white">
                  <h2>We’re Now Available On Store Download Our Apps</h2>
                  <p>No credit card requirement it’s full free for all</p>
                </div>
                <div className="footer-btns">
                  <a
                    href="https://play.google.com/store/apps"
                    className="theme-btn"
                  >
                    Play Store <i className="fab fa-google-play" />
                  </a>
                  <a
                    href="https://www.apple.com/app-store/"
                    className="theme-btn style-three"
                  >
                    Apple Store <i className="fab fa-apple" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-6 ms-lg-auto">
              <div
                className="footer-widget widget-links"
                data-aos="fade-up"
                data-aos-delay={100}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h6 className="footer-title">Resources</h6>
                <ul>
                  <li>
                    <Link href="shop">Product</Link>
                  </li>
                  <li>
                    <Link href="services">Services</Link>
                  </li>
                  <li>
                    <Link href="about">About Us</Link>
                  </li>
                  <li>
                    <Link href="services">Benefits</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-6">
              <div
                className="footer-widget widget-links"
                data-aos="fade-up"
                data-aos-delay={150}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h6 className="footer-title">Quick Link</h6>
                <ul>
                  <li>
                    <Link href="services">Features</Link>
                  </li>
                  <li>
                    <Link href="pricing">Pricing Plan</Link>
                  </li>
                  <li>
                    <Link href="about">Best Program</Link>
                  </li>
                  <li>
                    <Link href="contact">Press Kit</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom py-15">
          <div className="row align-items-center">
            <div className="col-xl-4 col-lg-6">
              <div
                className="copyright-text pt-10 text-lg-start text-center"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <p>
                  Copyright @2024, <Link href="/">Infinity Global Tech </Link> All Rights
                  Reserved
                </p>
              </div>
            </div>
            <div className="col-xl-8 col-lg-6">
              <div
                className="footer-bottom-logo text-lg-end text-center"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <Link href="/">
                  <img src="assets/images/logos/logo-white3.png" alt="Logo" />
                </Link>
              </div>
            </div>
          </div>
          {/* Scroll Top Button */}
          <button className="scroll-top scroll-to-target" data-target="html">
            <span className="far fa-angle-double-up" />
          </button>
        </div>
      </div>
    </footer>
  );
};

const Footer4 = () => {
  return (
    <footer className="main-footer footer-four bg-black rel z-1">
      <div className="container pb-45">
        <div className="footer-cta pt-50 pb-20 text-white">
          <div
            className="logo"
            data-aos="fade-left"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <Link href="/">
              <img src="assets/images/logos/logo4.png" alt="Logo" />
            </Link>
          </div>
          <h3
            data-aos="fade-right"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            Ready to Enroll Our Course?
          </h3>
          <Link
            href="contact"
            className="theme-btn style-two"
            data-aos="fade-right"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            Enroll Now <i className="far fa-arrow-right" />
          </Link>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-4 col-sm-6">
            <div
              className="footer-widget widget-newsletter"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <h3>Subscribe Newsletter</h3>
              <p>Please enter your email and get your answer</p>
              <form className="newsletter-form style-two mt-30" action="#">
                <input
                  id="email-address"
                  type="email"
                  placeholder="Email Address"
                  required=""
                />
                <button type="submit">
                  <i className="far fa-arrow-right" />
                </button>
              </form>
              <ul className="icon-list style-two mt-25">
                <li>
                  <i className="fal fa-check" /> 7-day free trial
                </li>
                <li>
                  <i className="fal fa-check" /> No credit card required
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-2 col-lg-3 col-sm-4 col-6">
            <div
              className="footer-widget widget-links"
              data-aos="fade-up"
              data-aos-delay={50}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <h6 className="footer-title">Courses</h6>
              <ul>
                <li>
                  <Link href="contact">Web Design</Link>
                </li>
                <li>
                  <Link href="contact">Digital Marketing</Link>
                </li>
                <li>
                  <Link href="contact">Apps Development</Link>
                </li>
                <li>
                  <Link href="contact">Graphics Design</Link>
                </li>
                <li>
                  <Link href="contact">Computer Science</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-2 col-lg-3 col-sm-4 col-6">
            <div
              className="footer-widget widget-links"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <h6 className="footer-title">Quick Link</h6>
              <ul>
                <li>
                  <Link href="services">Features</Link>
                </li>
                <li>
                  <Link href="pricing">Pricing Plan</Link>
                </li>
                <li>
                  <Link href="about">Best Program</Link>
                </li>
                <li>
                  <Link href="contact">Press Kit</Link>
                </li>
                <li>
                  <Link href="about">About Company</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6 order-xl-2">
            <div
              className="footer-widget widget-gallery"
              data-aos="fade-up"
              data-aos-delay={150}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <h6 className="footer-title">Gallery</h6>
              <ul>
                <li>
                  <Link href="project-details">
                    <img
                      src="assets/images/footer/gallery1.png"
                      alt="Gallery"
                    />
                    <i className="far fa-arrow-right" />
                  </Link>
                </li>
                <li>
                  <Link href="project-details">
                    <img
                      src="assets/images/footer/gallery2.png"
                      alt="Gallery"
                    />
                    <i className="far fa-arrow-right" />
                  </Link>
                </li>
                <li>
                  <Link href="project-details">
                    <img
                      src="assets/images/footer/gallery3.png"
                      alt="Gallery"
                    />
                    <i className="far fa-arrow-right" />
                  </Link>
                </li>
                <li>
                  <Link href="project-details">
                    <img
                      src="assets/images/footer/gallery4.png"
                      alt="Gallery"
                    />
                    <i className="far fa-arrow-right" />
                  </Link>
                </li>
                <li>
                  <Link href="project-details">
                    <img
                      src="assets/images/footer/gallery5.png"
                      alt="Gallery"
                    />
                    <i className="far fa-arrow-right" />
                  </Link>
                </li>
                <li>
                  <Link href="project-details">
                    <img
                      src="assets/images/footer/gallery6.png"
                      alt="Gallery"
                    />
                    <i className="far fa-arrow-right" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom mt-30 py-15">
          <div className="row align-items-center">
            <div className="col-xl-4 col-lg-6">
              <div
                className="copyright-text pt-10 text-lg-start text-center"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <p>
                  Copyright @2024, <Link href="/">Infinity Global Tech </Link> All Rights
                  Reserved
                </p>
              </div>
            </div>
            <div className="col-xl-8 col-lg-6">
              <div
                className="footer-bottom-menu text-lg-end text-center"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <ul>
                  <li>
                    <Link href="faqs">Faqs</Link>
                  </li>
                  <li>
                    <Link href="about">Setting</Link>
                  </li>
                  <li>
                    <Link href="about">Privacy</Link>
                  </li>
                  <li>
                    <Link href="contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Scroll Top Button */}
          <button className="scroll-top scroll-to-target" data-target="html">
            <span className="far fa-angle-double-up" />
          </button>
        </div>
      </div>
    </footer>
  );
};

const Footer5 = () => {
  return (
    <footer className="main-footer footer-four bg-black rel z-1">
      <div className="container pb-45">
        <div className="footer-cta pt-50 pb-20 text-white">
          <div
            className="logo"
            data-aos="fade-left"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <Link href="/">
              <img src="assets/images/logos/logo4.png" alt="Logo" />
            </Link>
          </div>
          <h3
            data-aos="fade-right"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            Ready to Enroll Our Course?
          </h3>
          <Link
            href="contact"
            className="theme-btn style-two"
            data-aos="fade-right"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            Enroll Now <i className="far fa-arrow-right" />
          </Link>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-4 col-sm-6">
            <div
              className="footer-widget widget-newsletter"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <h3>Subscribe Newsletter</h3>
              <p>Please enter your email and get your answer</p>
              <form className="newsletter-form style-two mt-30" action="#">
                <input
                  id="email-address"
                  type="email"
                  placeholder="Email Address"
                  required=""
                />
                <button type="submit">
                  <i className="far fa-arrow-right" />
                </button>
              </form>
              <ul className="icon-list style-two mt-25">
                <li>
                  <i className="fal fa-check" /> 7-day free trial
                </li>
                <li>
                  <i className="fal fa-check" /> No credit card required
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-2 col-lg-3 col-sm-4 col-6">
            <div
              className="footer-widget widget-links"
              data-aos="fade-up"
              data-aos-delay={50}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <h6 className="footer-title">Courses</h6>
              <ul>
                <li>
                  <Link href="contact">Web Design</Link>
                </li>
                <li>
                  <Link href="contact">Digital Marketing</Link>
                </li>
                <li>
                  <Link href="contact">Apps Development</Link>
                </li>
                <li>
                  <Link href="contact">Graphics Design</Link>
                </li>
                <li>
                  <Link href="contact">Computer Science</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-2 col-lg-3 col-sm-4 col-6">
            <div
              className="footer-widget widget-links"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <h6 className="footer-title">Quick Link</h6>
              <ul>
                <li>
                  <Link href="services">Features</Link>
                </li>
                <li>
                  <Link href="pricing">Pricing Plan</Link>
                </li>
                <li>
                  <Link href="about">Best Program</Link>
                </li>
                <li>
                  <Link href="contact">Press Kit</Link>
                </li>
                <li>
                  <Link href="about">About Company</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6 order-xl-2">
            <div
              className="footer-widget widget-gallery"
              data-aos="fade-up"
              data-aos-delay={150}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <h6 className="footer-title">Gallery</h6>
              <ul>
                <li>
                  <Link href="project-details">
                    <img
                      src="assets/images/footer/gallery1.png"
                      alt="Gallery"
                    />
                    <i className="far fa-arrow-right" />
                  </Link>
                </li>
                <li>
                  <Link href="project-details">
                    <img
                      src="assets/images/footer/gallery2.png"
                      alt="Gallery"
                    />
                    <i className="far fa-arrow-right" />
                  </Link>
                </li>
                <li>
                  <Link href="project-details">
                    <img
                      src="assets/images/footer/gallery3.png"
                      alt="Gallery"
                    />
                    <i className="far fa-arrow-right" />
                  </Link>
                </li>
                <li>
                  <Link href="project-details">
                    <img
                      src="assets/images/footer/gallery4.png"
                      alt="Gallery"
                    />
                    <i className="far fa-arrow-right" />
                  </Link>
                </li>
                <li>
                  <Link href="project-details">
                    <img
                      src="assets/images/footer/gallery5.png"
                      alt="Gallery"
                    />
                    <i className="far fa-arrow-right" />
                  </Link>
                </li>
                <li>
                  <Link href="project-details">
                    <img
                      src="assets/images/footer/gallery6.png"
                      alt="Gallery"
                    />
                    <i className="far fa-arrow-right" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom mt-30 py-15">
          <div className="row align-items-center">
            <div className="col-xl-4 col-lg-6">
              <div
                className="copyright-text pt-10 text-lg-start text-center"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <p>
                  Copyright @2024, <Link href="/">Infinity Global Tech </Link> All Rights
                  Reserved
                </p>
              </div>
            </div>
            <div className="col-xl-8 col-lg-6">
              <div
                className="footer-bottom-menu text-lg-end text-center"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <ul>
                  <li>
                    <Link href="faqs">Faqs</Link>
                  </li>
                  <li>
                    <Link href="about">Setting</Link>
                  </li>
                  <li>
                    <Link href="about">Privacy</Link>
                  </li>
                  <li>
                    <Link href="contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Scroll Top Button */}
          <button className="scroll-top scroll-to-target" data-target="html">
            <span className="far fa-angle-double-up" />
          </button>
        </div>
      </div>
    </footer>
  );
};

const Footer6 = () => {
  return (
    <footer className="main-footer footer-one rel z-1 mt-100">
      <div className="container">
        <div className="footer-newsletter text-white">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6">
              <div
                className="section-title pt-30 rpt-0 rpb-10"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h2>Get started today with 7 days free credits ?</h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="form-part"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <form className="newsletter-form" action="#">
                  <input type="email" placeholder="Email Address" required="" />
                  <button type="submit">
                    <b>
                      Sign Up <i className="far fa-arrow-right" />
                    </b>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div
              className="footer-widget widget-about"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <h6 className="footer-title">About Company</h6>
              <p>
                Doloremque laudantium tota aperiam eaque abillo inventore
                architect beatae vitae dicta sunt explicabos
              </p>
              <div className="social-style-one">
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
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6 order-xl-2">
            <div
              className="footer-widget widget-contact"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <h6 className="footer-title">Contact</h6>
              <ul>
                <li>
                  <i className="fal fa-map-marker-alt" /> 55 Main Street, 2nd
                  block Melbourne, Australia
                </li>
                <li>
                  <i className="fal fa-envelope" />{" "}
                  <a href="mailto:support@gmail.com">support@gmail.com</a>
                </li>
                <li>
                  <i className="fal fa-phone" />{" "}
                  <a href="callto:+0001234455">+000 (123) 44 55</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="row">
              <div className="col-sm-4 col-6">
                <div
                  className="footer-widget widget-links"
                  data-aos="fade-up"
                  data-aos-delay={50}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <h6 className="footer-title">Resources</h6>
                  <ul>
                    <li>
                      <Link href="shop">Product</Link>
                    </li>
                    <li>
                      <Link href="services">Services</Link>
                    </li>
                    <li>
                      <Link href="about">About Us</Link>
                    </li>
                    <li>
                      <Link href="services">Benefits</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-4 col-6">
                <div
                  className="footer-widget widget-links"
                  data-aos="fade-up"
                  data-aos-delay={100}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <h6 className="footer-title">Quick Link</h6>
                  <ul>
                    <li>
                      <Link href="services">Features</Link>
                    </li>
                    <li>
                      <Link href="pricing">Pricing Plan</Link>
                    </li>
                    <li>
                      <Link href="about">Best Program</Link>
                    </li>
                    <li>
                      <Link href="contact">Press Kit</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-4 col-6">
                <div
                  className="footer-widget widget-links"
                  data-aos="fade-up"
                  data-aos-delay={150}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <h6 className="footer-title">Company</h6>
                  <ul>
                    <li>
                      <Link href="about">About</Link>
                    </li>
                    <li>
                      <Link href="team">Team Member</Link>
                    </li>
                    <li>
                      <Link href="about">Reviews</Link>
                    </li>
                    <li>
                      <Link href="blog">Latest News</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom mt-30 py-15">
          <div className="row align-items-center">
            <div className="col-xl-4 col-lg-6">
              <div
                className="copyright-text pt-10 text-lg-start text-center"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <p>
                  Copyright @2024, <Link href="/">Infinity Global Tech </Link> All Rights
                  Reserved
                </p>
              </div>
            </div>
            <div className="col-xl-8 col-lg-6">
              <div
                className="footer-bottom-menu text-lg-end text-center"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <ul>
                  <li>
                    <Link href="faqs">Faqs</Link>
                  </li>
                  <li>
                    <Link href="about">Setting</Link>
                  </li>
                  <li>
                    <Link href="about">Privacy</Link>
                  </li>
                  <li>
                    <Link href="contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Footer7 = () => {
  return (
    <footer className="main-footer footer-seven pt-100 rel z-1 bgc-black">
      <div className="container">
        <div className="footer-cta-two bgc-lighter mb-80 rel z-1">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-7">
              <div
                className="section-title rmb-25"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h2>Looking For Professional Website Builders ?</h2>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus
                  quiy blanditiise praesentium voluptatum deleniti atque
                  corrupti dolorese
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="btn-part text-lg-center ps-xl-5"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <Link href="contact" className="theme-btn mb-10">
                  Get Started Free <i className="far fa-arrow-right" />
                </Link>
                <p>No credit card required</p>
              </div>
            </div>
          </div>
          <div className="footer-cta-shape">
            <img src="assets/images/shapes/arrow.png" alt="Shape" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div
              className="footer-widget widget-about"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="footer-logo mb-25">
                <Link href="/">
                  <img src="assets/images/logos/logo-white-4.png" alt="Logo" />
                </Link>
              </div>
              <p>
                At vero eos et accusamus iusto odio dignissimos ducimus
                blanditiise
              </p>
              <form className="newsletter-form style-two mt-25" action="#">
                <input
                  id="email-address"
                  type="email"
                  placeholder="Email Address"
                  required=""
                />
                <button type="submit">
                  <i className="far fa-arrow-right" />
                </button>
              </form>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6 order-xl-2">
            <div
              className="footer-widget widget-contact"
              data-aos="fade-up"
              data-aos-delay={400}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <h6 className="footer-title">Contact</h6>
              <ul>
                <li>
                  <i className="fal fa-map-marker-alt" /> 55 Main Street, 2nd
                  block Melbourne, Australia
                </li>
                <li>
                  <i className="fal fa-envelope" />{" "}
                  <a href="mailto:support@gmail.com">support@gmail.com</a>
                </li>
                <li>
                  <i className="fal fa-phone" />{" "}
                  <a href="callto:+0001234455">+000 (123) 44 55</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="row ps-xl-5">
              <div className="col-sm-4 col-6">
                <div
                  className="footer-widget widget-links"
                  data-aos="fade-up"
                  data-aos-delay={100}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <h6 className="footer-title">Resources</h6>
                  <ul>
                    <li>
                      <Link href="shop">Product</Link>
                    </li>
                    <li>
                      <Link href="services">Services</Link>
                    </li>
                    <li>
                      <Link href="about">About Us</Link>
                    </li>
                    <li>
                      <Link href="services">Benefits</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-4 col-6">
                <div
                  className="footer-widget widget-links"
                  data-aos="fade-up"
                  data-aos-delay={200}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <h6 className="footer-title">Quick Link</h6>
                  <ul>
                    <li>
                      <Link href="services">Features</Link>
                    </li>
                    <li>
                      <Link href="pricing">Pricing Plan</Link>
                    </li>
                    <li>
                      <Link href="about">Best Program</Link>
                    </li>
                    <li>
                      <Link href="contact">Press Kit</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-4 col-6">
                <div
                  className="footer-widget widget-links"
                  data-aos="fade-up"
                  data-aos-delay={300}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <h6 className="footer-title">Company</h6>
                  <ul>
                    <li>
                      <Link href="about">About</Link>
                    </li>
                    <li>
                      <Link href="team">Team Member</Link>
                    </li>
                    <li>
                      <Link href="about">Reviews</Link>
                    </li>
                    <li>
                      <Link href="blog">Latest News</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom mt-30 py-15">
          <div className="row align-items-center">
            <div className="col-xl-4 col-lg-6">
              <div className="copyright-text pt-10 text-lg-start text-center">
                <p>
                  Copyright @2024, <Link href="/">Infinity Global Tech </Link> All Rights
                  Reserved
                </p>
              </div>
            </div>
            <div className="col-xl-8 col-lg-6">
              <div className="footer-bottom-menu text-lg-end text-center">
                <ul>
                  <li>
                    <Link href="faqs">Faqs</Link>
                  </li>
                  <li>
                    <Link href="about">Setting</Link>
                  </li>
                  <li>
                    <Link href="about">Privacy</Link>
                  </li>
                  <li>
                    <Link href="contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Scroll Top Button */}
          <button className="scroll-top scroll-to-target" data-target="html">
            <span className="far fa-angle-double-up" />
          </button>
        </div>
      </div>
      <div className="bg-lines line-white">
        <span />
        <span />
        <span />
        <span />
      </div>
    </footer>
  );
};

const Footer8 = () => {
  return (
    <footer className="main-footer footer-six bgc-lighter text-black rel z-1">
      <div className="container">
        <div className="footer-newsletter text-white">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6">
              <div
                className="section-title pt-15 rmb-35"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span className="subtitle d-inline-block mb-5">
                  Get more updates to join us
                </span>
                <h3>Subscribe our Newsletter</h3>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="form-part"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <form className="newsletter-form" action="#">
                  <label htmlFor="email-address">
                    <i className="fas fa-envelope" />
                  </label>
                  <input type="email" placeholder="Email Address" required="" />
                  <button type="submit">
                    <b>
                      Sign Up <i className="far fa-arrow-right" />
                    </b>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div
              className="footer-widget widget-about"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="footer-logo mb-30">
                <Link href="/">
                  <img src="assets/images/logos/logo8.png" alt="Logo" />
                </Link>
              </div>
              <p>
                Doloremque laudantium tota aperiam eaque abillo inventore
                architect beatae vitae dicta sunt explicabos
              </p>
              <div className="social-style-one">
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
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6 order-xl-2">
            <div
              className="footer-widget widget-contact"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <h6 className="footer-title">Contact</h6>
              <ul>
                <li>
                  <i className="fal fa-map-marker-alt" /> 55 Main Street, 2nd
                  block Melbourne, Australia
                </li>
                <li>
                  <i className="fal fa-envelope" />{" "}
                  <a href="mailto:support@gmail.com">support@gmail.com</a>
                </li>
                <li>
                  <i className="fal fa-phone" />{" "}
                  <a href="callto:+0001234455">+000 (123) 44 55</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="row">
              <div className="col-sm-4 col-6">
                <div
                  className="footer-widget widget-links"
                  data-aos="fade-up"
                  data-aos-delay={50}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <h6 className="footer-title">Resources</h6>
                  <ul>
                    <li>
                      <Link href="shop">Product</Link>
                    </li>
                    <li>
                      <Link href="services">Services</Link>
                    </li>
                    <li>
                      <Link href="about">About Us</Link>
                    </li>
                    <li>
                      <Link href="services">Benefits</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-4 col-6">
                <div
                  className="footer-widget widget-links"
                  data-aos="fade-up"
                  data-aos-delay={100}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <h6 className="footer-title">Quick Link</h6>
                  <ul>
                    <li>
                      <Link href="services">Features</Link>
                    </li>
                    <li>
                      <Link href="pricing">Pricing Plan</Link>
                    </li>
                    <li>
                      <Link href="about">Best Program</Link>
                    </li>
                    <li>
                      <Link href="contact">Press Kit</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-4 col-6">
                <div
                  className="footer-widget widget-links"
                  data-aos="fade-up"
                  data-aos-delay={150}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <h6 className="footer-title">Company</h6>
                  <ul>
                    <li>
                      <Link href="about">About</Link>
                    </li>
                    <li>
                      <Link href="team">Team Member</Link>
                    </li>
                    <li>
                      <Link href="about">Reviews</Link>
                    </li>
                    <li>
                      <Link href="blog">Latest News</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom mt-30 py-15">
          <div className="row align-items-center">
            <div className="col-xl-4 col-lg-6">
              <div
                className="copyright-text pt-10 text-lg-start text-center"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <p>
                  Copyright @2024, <Link href="/">Infinity Global Tech </Link> All Rights
                  Reserved
                </p>
              </div>
            </div>
            <div className="col-xl-8 col-lg-6">
              <div
                className="footer-bottom-menu text-lg-end text-center"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <ul>
                  <li>
                    <Link href="faqs">Faqs</Link>
                  </li>
                  <li>
                    <Link href="about">Setting</Link>
                  </li>
                  <li>
                    <Link href="about">Privacy</Link>
                  </li>
                  <li>
                    <Link href="contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Scroll Top Button */}
          <button className="scroll-top scroll-to-target" data-target="html">
            <span className="far fa-angle-double-up" />
          </button>
        </div>
      </div>
    </footer>
  );
};

const Footer9 = () => {
  return (
    <footer className="main-footer footer-five text-black pt-100 rel z-1">
      <div className="container">
        <div className="for-middle-border pb-50">
          <div className="row justify-content-between">
            <div className="col-lg-5 col-md-7">
              <div
                className="footer-widget widget-about"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title">
                  <h2>Get Our Newsletters</h2>
                </div>
                <form action="#">
                  <div className="newsletter-form bgc-lighter">
                    <input
                      type="email"
                      placeholder="Email Address"
                      required=""
                    />
                    <button type="submit">
                      <b>
                        Sign Up <i className="far fa-arrow-right" />
                      </b>
                    </button>
                  </div>
                  <div className="radio-part">
                    <input id="update-news" type="radio" />
                    <label htmlFor="update-news">
                      Get 7 days updates news &amp; offers
                    </label>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div
                className="footer-widget widget-contact-info"
                data-aos="fade-up"
                data-aos-delay={100}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h6 className="footer-title">Get In Touch</h6>
                <ul>
                  <li>
                    <a href="mailto:support@gmail.com">support@gmail.com</a>
                  </li>
                  <li>55 main Street, 2nd block Melbourne, Australia</li>
                  <li>
                    <a href="calto:+00012345688">+000 (123) 456 88</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-6 ms-lg-auto">
              <div
                className="footer-widget widget-links"
                data-aos="fade-up"
                data-aos-delay={100}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h6 className="footer-title">Resources</h6>
                <ul>
                  <li>
                    <Link href="shop">Product</Link>
                  </li>
                  <li>
                    <Link href="services">Services</Link>
                  </li>
                  <li>
                    <Link href="about">About Us</Link>
                  </li>
                  <li>
                    <Link href="services">Benefits</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-6">
              <div
                className="footer-widget widget-links"
                data-aos="fade-up"
                data-aos-delay={150}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h6 className="footer-title">Quick Link</h6>
                <ul>
                  <li>
                    <Link href="services">Features</Link>
                  </li>
                  <li>
                    <Link href="pricing">Pricing Plan</Link>
                  </li>
                  <li>
                    <Link href="about">Best Program</Link>
                  </li>
                  <li>
                    <Link href="contact">Press Kit</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom py-15">
          <div className="row align-items-center">
            <div className="col-xl-8 col-lg-6">
              <div
                className="footer-bottom-logo mb-25 rmb-0 rmt-25 text-lg-start text-center"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <Link href="/">
                  <img src="assets/images/logos/logo6.png" alt="Logo" />
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div
                className="copyright-text mb-25 pt-10 text-lg-end text-center"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <p>
                  Copyright @2024, <Link href="/">Infinity Global Tech </Link> All Rights
                  Reserved
                </p>
              </div>
            </div>
          </div>
          {/* Scroll Top Button */}
          <button className="scroll-top scroll-to-target" data-target="html">
            <span className="far fa-angle-double-up" />
          </button>
        </div>
      </div>
    </footer>
  );
};
