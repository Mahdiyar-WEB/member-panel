import { Button } from "@mui/material";
import styles from "./about.module.css";
import { BsTelegram } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import stripeUnderline from "../../public/stripeunderline.png";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Waypoint } from 'react-waypoint';

const About = () => {
  const aboutRef = useRef();
  const [render, setRender] = useState(false);

  const handleScroll = () => {
    // if (aboutRef.current) {
    //   aboutRef.current.classList.contains("aos-animate") && setRender(true);
    // }
    setRender(true);
  };
  // useEffect(()=>{},[window.scro])

  return (
    <article
      ref={aboutRef}
      id="about"
      className={`mt-5 text-white py-5 px-3 text-center ${styles.container}`}
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-duration="800"
      data-aos-easing="linear"
    >
      <p className="text-capitalize h1">about us</p>
      <Image src={stripeUnderline} alt="signature" className={styles.stripeUnderline} />
      <h4 className="mt-4 px-3 px-md-5">
        Our Team Is One Of The Most Professional In Providing Telegram Service
      </h4>
      <Waypoint onEnter={()=> handleScroll()} />
      <div className="mt-4 container px-3 px-lg-5">
        {render && (
          <h5 className={styles.animatedH5}>
            <span>we</span>
            <span>have</span>
            <span>been</span>
            <span>with</span>
            <span>you</span>
            <span>since</span>
            <span>7</span>
            <span>years</span>
            <span>of</span>
            <span>brilliant</span>
            <span>and</span>
            <span>professional</span>
            <span>experience</span>
            <span>and</span>
            <span>our</span>
            <span>experts</span>
            <span>answer</span>
            <span>your</span>
            <span>questions</span>
            <span>24</span>
            <span>hours</span>
            <span>a</span>
            <span>day</span>
            <span>we</span>
            <span>here</span>
            <span>to</span>
            <span>help</span>
            <span>you</span>
            <span>to</span>
            <span>grow</span>
            <span>your</span>
            <span>business</span>
          </h5>
        )}
      </div>
      <div className="container mt-5">
        <h3>Contact Us</h3>
        <div className="d-flex flex-nowrap  flex-row justify-content-center gap-3 mt-4">
          <a href="https://t.me/mahdiyarMN" target="_blank">
            <Button size="small" variant="contained" startIcon={<BsTelegram />}>
              Telegram
            </Button>
          </a>
          <a href="mailto:mahdiyar472@gmail.com" target="_blank">
            <Button
              size="small"
              variant="contained"
              color="secondary"
              startIcon={<HiMail style={{ transform: "translateY(-1px)" }} />}
            >
              Email
            </Button>
          </a>
        </div>
      </div>
    </article>
  );
};

export default About;
