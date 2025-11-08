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
        <PageBanner pageName={"Privacy Policy"} />
        <section className="about-area py-90 rpy-60">
          <div className="container">
            <div className="row gap-90 align-items-center">
              <div className="col-xl-12">
                <p>
                  Infinity Global Tech (“us”, “we”, or “our”) operates the
                  Infinity Global Tech website (the “Service”).
                </p>

                <p>
                  This page informs you of our policies regarding the
                  collection, use and disclosure of Personal Information when
                  you use our Service.
                </p>

                <p>
                  We will not use or share your information with anyone except
                  as described in this Privacy Policy.
                </p>

                <p>
                  We use your Personal Information for providing and improving
                  the Service. By using the Service, you agree to the collection
                  and use of information in accordance with this policy. Unless
                  otherwise defined in this Privacy Policy, terms used have the
                  same meanings as in our Terms and Conditions, accessible at{" "}
                  <a href="https://www.infinityglobaltech.net" target="_blank">
                    https://www.infinityglobaltech.net
                  </a>
                  .
                </p>

                <br />
                <h3>Information Collection and Use</h3>
                <p>
                  While using our Service, we may ask you to provide us with
                  certain personally identifiable information that can be used
                  to contact or identify you. Personally identifiable
                  information (“Personal Information”) may include, but is not
                  limited to:
                </p>
                <ul>
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Phone</li>
                  <li>Website</li>
                </ul>

                <br />
                <h3>Log Data</h3>
                <p>
                  We collect information that your browser sends whenever you
                  visit our Service (“Log Data”). This may include information
                  such as your computer’s IP address, browser type, browser
                  version, the pages you visit, the time and date of your visit,
                  time spent on pages, and other statistics.
                </p>

                <br />
                <h3>Cookies</h3>
                <p>
                  Cookies are small data files, which may include an anonymous
                  unique identifier. They are sent to your browser from a
                  website and stored on your device.
                </p>

                <p>
                  We use cookies to collect information. You can instruct your
                  browser to refuse all cookies or to indicate when one is being
                  sent. However, if you do not accept cookies, some portions of
                  our Service may not function properly.
                </p>

                <br />
                <h3>Service Providers</h3>
                <p>
                  We may employ third-party companies and individuals to
                  facilitate our Service, to provide the Service on our behalf,
                  or to assist in analyzing how our Service is used.
                </p>
                <p>
                  These third parties have access to your Personal Information
                  only to perform these tasks on our behalf and are obligated
                  not to disclose or use it for any other purpose.
                </p>

                <br />
                <h3>Security</h3>
                <p>
                  The security of your Personal Information is important to us,
                  but no method of transmission or electronic storage is 100%
                  secure. While we strive to use commercially acceptable means
                  to protect your information, we cannot guarantee its absolute
                  security.
                </p>

                <br />
                <h3>Links to Other Sites</h3>
                <p>
                  Our Service may contain links to other sites not operated by
                  us. If you click on a third-party link, you’ll be directed to
                  that site. We strongly advise reviewing the Privacy Policy of
                  every site you visit.
                </p>

                <p>
                  We have no control over, and assume no responsibility for, the
                  content, privacy policies, or practices of any third-party
                  sites or services.
                </p>

                <br />
                <h3>Children’s Privacy</h3>
                <p>
                  Our Service does not address anyone under the age of 18
                  (“Children”).
                </p>

                <p>
                  We do not knowingly collect personally identifiable
                  information from children under 18. If you are a parent or
                  guardian aware that your child has provided us with Personal
                  Information, please contact us so we can remove it
                  immediately.
                </p>

                <br />
                <h3>Changes to This Privacy Policy</h3>
                <p>
                  We may update our Privacy Policy from time to time. We will
                  notify you of changes by posting the new policy on this page.
                </p>

                <p>
                  You are advised to review this Privacy Policy periodically for
                  any changes. Changes are effective when posted on this page.
                </p>

                <br />
                <h3>Contact Us</h3>
                <p>
                  If you have any questions about this Privacy Policy, please{" "}
                  <a
                    href="https://www.dhiyasoft.com/contact-us/"
                    target="_blank"
                  >
                    contact us
                  </a>{" "}
                  at{" "}
                  <a
                    href="mailto:info@infinityglobaltech.net"
                    className="text-primary"
                  >
                    info@infinityglobaltech.net
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
      </AkpagerLayout>
    </>
  );
};
export default page;
