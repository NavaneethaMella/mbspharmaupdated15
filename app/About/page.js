// pages/about.js
/*import Head from "next/head";
import Script from "next/script";

const AboutPage = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <title>About Us - MBS Pharma</title>
        <link rel="icon" href="/img/favicon.ico" type="image/x-icon" />
      </Head>
      <link href="/css/module-css/about.css" rel="stylesheet" />
      <section className="about-page pt_120 pb_120">
        <div className="auto-container">
          <div className="sec-title centred mb_70">
            <span className="sub-title mb_20">Who We Are</span>
            <h2>About MBS Pharma</h2>
          </div>

          <div className="about-content">
            <p>
              MBS Pharma is a leading pharmaceutical consulting company with over
              30 years of experience. Our expertise spans regulatory affairs, compliance,
              and technical services that help pharmaceutical companies navigate complex
              FDA regulations and ensure product success.
            </p>
            <p>
              We are committed to providing our clients with actionable, scientific, and
              technical recommendations to ensure compliance with FDA guidelines, drive
              innovation, and enable the successful approval of pharmaceutical products.
            </p>
            <h3>Our Mission</h3>
            <p>
              Our mission is to provide world-class consulting services that enable
              pharmaceutical companies to efficiently and effectively bring their products
              to market while maintaining the highest levels of compliance, quality, and
              patient safety.
            </p>
            <h3>Our Values</h3>
            <ul>
              <li>Integrity: We prioritize transparency and honesty in all our dealings.</li>
              <li>Excellence: We strive for excellence in every project we undertake.</li>
              <li>Innovation: We encourage innovative approaches to overcome challenges.</li>
              <li>Collaboration: We believe in working closely with our clients to achieve shared success.</li>
            </ul>
            <h3>Our Leadership Team</h3>
            <div className="team-section">
              <div className="team-member">
                <img src="/img/team-member-1.jpg" alt="Team Member 1" />
                <h4>Michael Smith</h4>
                <p>Founder & CEO</p>
              </div>
              <div className="team-member">
                <img src="/img/team-member-2.jpg" alt="Team Member 2" />
                <h4>Jane Doe</h4>
                <p>Chief Operating Officer</p>
              </div>
              <div className="team-member">
                <img src="/img/team-member-3.jpg" alt="Team Member 3" />
                <h4>John Williams</h4>
                <p>VP of Regulatory Affairs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* External Scripts *//*}
      <Script src="/js/jquery.js" />
      <Script src="/js/bootstrap.min.js" />
      <Script src="/js/owl.js" />
      <Script src="/js/wow.js" />
      <Script src="/js/validation.js" />
      <Script src="/js/jquery.fancybox.js" />
      <Script src="/js/appear.js" />
      <Script src="/js/isotope.js" />
      <Script src="/js/parallax-scroll.js" />
      <Script src="/js/jquery.nice-select.min.js" />
      <Script src="/js/jQuery.style.switcher.min.js" />
      <Script src="/js/language.js" />
      <Script src="/js/scrolltop.min.js" />
      <Script src="/js/gsap.js" />
      <Script src="/js/ScrollTrigger.js" />
      <Script src="/js/SplitText.js" />
      <Script src="/js/odometer.js" />
      <Script src="/js/script.js" />
    </>
  );
};

export default AboutPage; */


import Link from "next/link";
import React from "react";
import "../globals.css";

const About = () => {
  return (
    <div className="about-us-container">
      <div className="about-heading">
        <h1>About Us</h1>
      
      <div className="button-group">
        <Link href="/About">
        <button className="btn-black">About</button>
        </Link>
        <Link href="/">
        <button className="btn-green">Back to Home</button>
        </Link>
      </div>
      </div>

      <br/>
      <p className="about-description">
        MBS Pharma was founded to assist small pharmaceutical companies navigate global development and regulatory requirements from the beginning of the drug development process to the end. Our expertise with CMC (Chemistry, Manufacturing, and Controls), Regulatory, and Product Development and Manufacturing create a single source for the development of drug products to be used in clinical trials, bioequivalence studies, and for commercial distribution. With a foundation built on industry expertise and a commitment to quality and excellence, we aim to empower companies to achieve regulatory compliance and prioritize patient safety and access to the potentially lifesaving medicines they require.
      </p>

      <h2 className="why-choose-heading">Why Choose MBS??</h2>
      <div className="info-boxes">
        <div className="info-box">
          <h3 className="info-title">Expertise</h3>
          <p className="info-text">
            With our extensive experience in product development, regulatory and manufacturing, MBS Pharma provides the needed guidance and solutions to achieve success.
          </p>
        </div>

        <div className="info-box">
          <h3 className="info-title">Custom Solutions</h3>
          <p className="info-text">
            MBS Pharma can provide a customized solution to your unique requirements with our varied and extensive experience.
          </p>
        </div>

        <div className="info-box">
          <h3 className="info-title">Customer Centric Engagement Models</h3>
          <p className="info-text">
            Based on the client’s needs and budget we can offer short-term consulting, ongoing consulting, turn key solutions and embedded resources.
          </p>
        </div>
      </div>

     
    </div>
  );
};

export default About;

