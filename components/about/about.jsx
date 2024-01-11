'use client'
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Blocs from "@/components/blocs/Blocs";
import aboutStyles from "@styles/about.module.scss";
import portrait from "@images/cute_resize.png";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function About() {
  const aboutRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(aboutRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
          end: "bottom top",
          toggleActions: "play none none none"
        }
      }
    );
  }, []);

  return (
    <section ref={aboutRef} className={aboutStyles.about}>
      <div className={aboutStyles.about__container}>
        <Blocs>
          <div className={aboutStyles.about__text}>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quisquam, voluptatibus. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quisquam, voluptatibus. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quisquam, voluptatibus.Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quisquam, voluptatibus. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quisquam, voluptatibus. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quisquam, voluptatibus. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quisquam, voluptatibus.Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quisquam, voluptatibus.
            </p>
          </div>
        </Blocs>

        <Blocs>
          <div className={aboutStyles.about__image}>
            <Image
              src={portrait}
              width={450}
              height={650}
              alt="portrait"
            />
          </div>
        </Blocs>
      </div>

    </section>
  );
}
