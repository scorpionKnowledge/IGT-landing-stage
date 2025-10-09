"use client";
import { sliderProps } from "@/utility/sliderProps";
import { Fragment } from "react";
import Slider from "react-slick";
const TestimonialSliderTesti = () => {
  return (
    <Fragment>
      <Slider {...sliderProps.testiSliderNine} className="testi-slider-nine">
        <div className="testimonial-item">
          <div className="author">
            <div className="image">
              <img src="assets/images/testimonials/author11.png" alt="Author" />
            </div>
            <div className="title">
              <b>Real Estate Client /</b> Chennai
            </div>
          </div>
          <div className="author-text">
            IGT transformed our lead management process. The Salesforce setup
            helped us track and close deals efficiently.
          </div>
          <div className="testi-footer">
            <div className="ratting mt-10">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
            </div>
            {/* <span className="text mt-10">
              <span>4.7/5</span> on Trustpilot
            </span> */}
          </div>
        </div>
        <div className="testimonial-item">
          <div className="author">
            <div className="image">
              <img src="assets/images/testimonials/author12.png" alt="Author" />
            </div>
            <div className="title">
              <b>Tech Partner /</b> Hyderabad
            </div>
          </div>
          <div className="author-text">
            Professional, prompt, and deeply knowledgeable team. Highly
            recommend them for Salesforce projects.
          </div>
          <div className="testi-footer">
            <div className="ratting mt-10">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
            </div>
            {/* <span className="text mt-10">
              <span>4.7/5</span> on Trustpilot
            </span> */}
          </div>
        </div>
        <div className="testimonial-item">
          <div className="author">
            <div className="image">
              <img src="assets/images/testimonials/author11.png" alt="Author" />
            </div>
            <div className="title">
              <b>Real Estate Client /</b> Chennai
            </div>
          </div>
          <div className="author-text">
            IGT transformed our lead management process. The Salesforce setup
            helped us track and close deals efficiently.
          </div>
          <div className="testi-footer">
            <div className="ratting mt-10">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
            </div>
            {/* <span className="text mt-10">
              <span>4.7/5</span> on Trustpilot
            </span> */}
          </div>
        </div>
        <div className="testimonial-item">
          <div className="author">
            <div className="image">
              <img src="assets/images/testimonials/author12.png" alt="Author" />
            </div>
            <div className="title">
              <b>Tech Partner /</b> Hyderabad
            </div>
          </div>
          <div className="author-text">
            Professional, prompt, and deeply knowledgeable team. Highly
            recommend them for Salesforce projects.
          </div>
          <div className="testi-footer">
            <div className="ratting mt-10">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
            </div>
            {/* <span className="text mt-10">
              <span>4.7/5</span> on Trustpilot
            </span> */}
          </div>
        </div>
        <div className="testimonial-item">
          <div className="author">
            <div className="image">
              <img src="assets/images/testimonials/author11.png" alt="Author" />
            </div>
            <div className="title">
              <b>Real Estate Client /</b> Chennai
            </div>
          </div>
          <div className="author-text">
            IGT transformed our lead management process. The Salesforce setup
            helped us track and close deals efficiently.
          </div>
          <div className="testi-footer">
            <div className="ratting mt-10">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
            </div>
            {/* <span className="text mt-10">
              <span>4.7/5</span> on Trustpilot
            </span> */}
          </div>
        </div>
        <div className="testimonial-item">
          <div className="author">
            <div className="image">
              <img src="assets/images/testimonials/author12.png" alt="Author" />
            </div>
            <div className="title">
              <b>Tech Partner /</b> Hyderabad
            </div>
          </div>
          <div className="author-text">
            Professional, prompt, and deeply knowledgeable team. Highly
            recommend them for Salesforce projects.
          </div>
          <div className="testi-footer">
            <div className="ratting mt-10">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
            </div>
            {/* <span className="text mt-10">
              <span>4.7/5</span> on Trustpilot
            </span> */}
          </div>
        </div>
      </Slider>
    </Fragment>
  );
};
export default TestimonialSliderTesti;
