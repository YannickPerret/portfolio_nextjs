'use client';
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import heroImageRock from '@images/landcape_hero_rocks.png'
import heroImageMountain from '@images/landcape_hero_mountain_resize.png'
import heroImageClouds5 from '@images/noClouds4.png'
import Clouds from './Clouds'
import heroStyle from '@styles/hero.module.scss'
import Stars from '../stars/Stars';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


export default function Hero() {
  const heroRef = useRef(null);
  const cloudsRef = useRef(null);
  const heroImageCloudsRef = useRef(null);
  const starsRef = useRef(null);
  const heroImageRockRef = useRef(null);
  const heroTitleRef = useRef(null);
  const heroImageMountainRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [starNumber, setStarNumber] = useState(20);


  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (typeof window !== "undefined") {

      // Animation pour heroImageRock
      gsap.fromTo(heroImageRockRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: heroImageRockRef.current,
            start: "top center",
            toggleActions: "play none none none",
          }
        });

      // Animation pour heroImageClouds
      gsap.fromTo(heroImageCloudsRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          delay: 1,
          scrollTrigger: {
            trigger: heroImageCloudsRef.current,
            start: "top center",
            toggleActions: "play none none none",
          }
        });

      // Animation pour clouds
      gsap.fromTo(cloudsRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          delay: 2,
          scrollTrigger: {
            trigger: cloudsRef.current,
            start: "top center",
            toggleActions: "play none none none",
          }
        });

      // Animation pour stars
      gsap.fromTo(starsRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          delay: 3,
          scrollTrigger: {
            trigger: starsRef.current,
            start: "top center",
            toggleActions: "play none none none",
          }
        });

      // Animation pour heroImageMountain
      gsap.fromTo(heroImageMountainRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          delay: 4,
          scrollTrigger: {
            trigger: heroImageMountainRef.current,
            start: "top center",
            toggleActions: "play none none none",
          }
        });

      // Animation pour heroTitle
      gsap.fromTo(heroTitleRef.current,
        { scale: 0.2, opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          delay: 5,
          scale: 1,
          scrollTrigger: {
            trigger: heroTitleRef.current,
            start: "top center",
            toggleActions: "play none none none",
          },
          //ease: "power2.out"
        });

      gsap.to(".hero__title", {
        scrollTrigger: {
          trigger: ".hero",
          start: "top top", // Début quand le haut de .hero est en haut de la page
          end: "bottom top", // Se termine quand le bas de .hero est en haut de la page
          scrub: true,
          toggleActions: "play none none reverse",
        },
      });

    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    const starsObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShowStars(true); // Afficher les étoiles quand elles sont dans le viewport
        } else {
          setShowStars(false); // Masquer les étoiles quand elles ne le sont pas
        }
      },
      { threshold: 0.1 }
    );

    if (starsRef.current) {
      starsObserver.observe(starsRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }

      if (starsRef.current) {
        starsObserver.unobserve(starsRef.current);
      }
    }

  }, []);

  return (
    <div className={`${heroStyle.hero} fixed-scroll-section`} ref={heroRef}>
      <div ref={starsRef}>
        <Stars style={heroStyle} number={starNumber} />
      </div>

      <div ref={heroImageRockRef}>
        <Image src={heroImageRock} alt="Hero Image Rock" layout='responsive' width={1920} height={1080} className={heroStyle.hero__image__rock} />
      </div>

      <div ref={heroImageCloudsRef}>
        <Image src={heroImageClouds5} alt="Hero Image Clouds" layout='responsive' width={1920} height={1080} className={heroStyle.hero__image__clouds} />
      </div>
      <div ref={heroImageMountainRef}>
        <Image src={heroImageMountain} alt="Hero Image Mountain" layout='responsive' width={1920} height={568} className={heroStyle.hero__image__mountain} />
      </div>
      <div ref={cloudsRef}>
        <Clouds delay={0.5} top={0} />
        <Clouds delay={0.5} top={500} />
      </div>

      <div ref={heroTitleRef}>
        <h1 className={heroStyle.hero__title}>Perret<span>Yannick</span> Web Dev.</h1>
      </div>
    </div>
  )
}
