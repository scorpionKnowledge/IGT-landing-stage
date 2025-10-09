"use client";
import { sliderProps } from "@/utility/sliderProps";
import { Fragment } from "react";
import Slider from "react-slick";
const TestimonialSliderCaseStudy = () => {
  return (
    <Fragment>
      <Slider {...sliderProps.testiSliderNine} className="testi-slider-nine">
        <div className="testimonial-item">
          <div className="author">
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
          <div className="testi-footer"></div>
        </div>
        <div className="testimonial-item">
          <div className="author">
            <div className="title">
              <b> CRM for Construction Vendor Management</b> Case Study 2:
            </div>
          </div>
          <div className="author-text">
            Integrated Salesforce with vendor and supplier modules. <br />
            Improved invoice tracking and project coordination.
          </div>
          <div className="testi-footer"></div>
        </div>
        <div className="testimonial-item">
          <div className="author">
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
          <div className="testi-footer"></div>
        </div>
        <div className="testimonial-item">
          <div className="author">
            <div className="title">
              <b> CRM for Construction Vendor Management</b> Case Study 2:
            </div>
          </div>
          <div className="author-text">
            Integrated Salesforce with vendor and supplier modules. <br />
            Improved invoice tracking and project coordination.
          </div>
          <div className="testi-footer"></div>
        </div>
      </Slider>
    </Fragment>
  );
};
export default TestimonialSliderCaseStudy;
