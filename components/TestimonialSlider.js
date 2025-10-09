"use client";
import { sliderProps } from "@/utility/sliderProps";
import { Fragment } from "react";
import Slider from "react-slick";
const TestimonialSlider = () => {
  return (
    <Fragment>
      <Slider
        {...sliderProps.testiSliderCasestudy}
        className="marquee-slider-right testi-slider-right !mx-[-10px]"
      >
        <div className="testimonial-item px-4">
          <div className="author">
            {/* <div className="image">
              <img src="assets/images/testimonials/author1.png" alt="Author" />
            </div> */}
            <div className="title">
              <b> Real Estate Developer CRM Implementation</b> Case Study 1:
            </div>
          </div>
          <div className="author-text">
            <b>Client:</b> Mid-sized real estate firm, Chennai <br />
            <b>Challenge:</b> Manual lead tracking, poor customer follow-up.{" "}
            <br />
            <b>Solution:</b> Implemented Salesforce Sales Cloud with automation
            for lead assignment and customer tracking. <br />
            <b>Result:</b> 40% increase in lead conversion and faster follow-up
            times. <br />
          </div>
        </div>
        <div className="testimonial-item px-4">
          <div className="author">
            {/* <div className="image">
              <img src="assets/images/testimonials/author1.png" alt="Author" />
            </div> */}
            <div className="title">
              <b> CRM for Construction Vendor Management</b> Case Study 2:
            </div>
          </div>
          <div className="author-text">
            Integrated Salesforce with vendor and supplier modules. <br />
            Improved invoice tracking and project coordination.
          </div>
        </div>
      </Slider>
      {/* <Slider
        {...sliderProps.marqueeSliderLeft}
        className="marquee-slider-left testi-slider-left"
        dir="rtl"
      >
        <div className="testimonial-item">
          <div className="author">
            <div className="image">
              <img src="assets/images/testimonials/author5.png" alt="Author" />
            </div>
            <div className="title">
              <b>Joseph D. Tucker / </b> Consultant
            </div>
          </div>
          <div className="author-text">
            At vero eoset accusamus iusto dignissimos ducimus blanditiis
            praesentium voluptatume delenitie corruptie dolores molestias
          </div>
          <div className="testi-footer">
            <div className="ratting">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
            </div>
            <span className="text">
              <span>4.7/5</span> on Trustpilot
            </span>
          </div>
        </div>
        <div className="testimonial-item">
          <div className="author">
            <div className="image">
              <img src="assets/images/testimonials/author6.png" alt="Author" />
            </div>
            <div className="title">
              <b>Wiley D. Swanson / </b> Businessman
            </div>
          </div>
          <div className="author-text">
            At vero eoset accusamus iusto dignissimos ducimus blanditiis
            praesentium voluptatume delenitie corruptie dolores molestias
          </div>
          <div className="testi-footer">
            <div className="ratting">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
            </div>
            <span className="text">
              <span>4.7/5</span> on Trustpilot
            </span>
          </div>
        </div>
        <div className="testimonial-item">
          <div className="author">
            <div className="image">
              <img src="assets/images/testimonials/author7.png" alt="Author" />
            </div>
            <div className="title">
              <b>Steven J. Ung / </b> JR Manager
            </div>
          </div>
          <div className="author-text">
            At vero eoset accusamus iusto dignissimos ducimus blanditiis
            praesentium voluptatume delenitie corruptie dolores molestias
          </div>
          <div className="testi-footer">
            <div className="ratting">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
            </div>
            <span className="text">
              <span>4.7/5</span> on Trustpilot
            </span>
          </div>
        </div>
      </Slider> */}
    </Fragment>
  );
};
export default TestimonialSlider;
