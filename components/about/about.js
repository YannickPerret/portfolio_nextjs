import React from "react";
import Image from "next/image";
import Blocs from "@/components/blocs/Blocs";
import aboutStyles from "@styles/about.module.scss";
import portrait from "@images/cute_resize.png";

export default function About() {
  return (
    <section className={aboutStyles.about}>
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
