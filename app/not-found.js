import AkpagerLayout from "@/layouts/AkpagerLayout";
const e404 = () => {
  return (
    <AkpagerLayout header={10}>
      {" "}
      <section className="error-area py-150 rpy-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-7">
              <div className="error-content mt-80 rmt-60">
                <div
                  className="image"
                  data-aos="zoom-in-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <img
                    src="assets/images/Others/404-error.png"
                    alt="404 Error"
                  />
                </div>
                <h1
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  Page not found
                </h1>
                <p
                  data-aos="fade-up"
                  data-aos-delay={50}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  It looks like you've ventured into uncharted territory. The
                  page you were looking for may have been moved, deleted, or
                  never existed in the first place. But don't worry, you're not
                  lost for long.
                </p>
                <form
                  className="newsletter-form style-three"
                  action="#"
                  data-aos="fade-up"
                  data-aos-delay={100}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <label htmlFor="search">
                    <i className="far fa-search fa-fw" />
                  </label>
                  <input
                    id="search"
                    type="search"
                    placeholder="Search"
                    required=""
                  />
                  <button type="submit">
                    Search <i className="far fa-arrow-right" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AkpagerLayout>
  );
};
export default e404;
