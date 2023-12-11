'use client';
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import heroImageRock from '@images/landcape_hero_rocks.png'
import heroImageMountain from '@images/landcape_hero_mountain_resize.png'
import heroImageClouds5 from '@images/noClouds4.png'
import Clouds from './Clouds'
import heroStyle from '@styles/hero.module.scss'
import Stars from '../stars/Stars';


export default function Hero() {
  const [isInView, setIsInView] = useState(false);
  const heroRef = useRef(null);
  const [starNumber, setStarNumber] = useState(20);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <div ref={heroRef} className={isInView ? 'animate' : ''}>
      <div className={heroStyle.hero}>
        <Stars style={heroStyle} number={starNumber} />

        <Image src={heroImageRock} alt="Hero Image" layout='responsive' width={1920} height={1080} className={heroStyle.hero__image__rock} />
        <Image src={heroImageClouds5} alt="Hero Image" layout='responsive' width={1920} height={1080} className={heroStyle.hero__image__clouds} />

        <Image src={heroImageMountain} alt="Hero Image" layout='responsive' width={1920} height={568} className={heroStyle.hero__image__mountain} />
        <Clouds delay={0.5} top={0} />
        <Clouds delay={0.5} top={500} />
        <div>
          <h1></h1>
          <p></p>
        </div>
      </div>
    </div>
  )
}
