'use client';
import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import './cloud.css';

const Clouds = ({delay, top = 90}) => {
    const [width, setWidth] = React.useState(0);
    const variants = {
      animate: {
        x: [-800, width + 500],
        transition: {
          duration: 50,
          repeat: Infinity, 
          ease: "linear",
          delay: delay,
        }
      }
    };
  
    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);

    const cloudStyle = { top: `${top}px` };

    return (
      <>
        <motion.div className="cloud" id="cloud-base" variants={variants} animate="animate" style={cloudStyle}></motion.div>
        <motion.div className="cloud" id="cloud-back" variants={variants} animate="animate" style={cloudStyle}></motion.div>
        <motion.div className="cloud" id="cloud-mid" variants={variants} animate="animate" style={cloudStyle}></motion.div>
        <motion.div className="cloud" id="cloud-front" variants={variants} animate="animate" style={cloudStyle}></motion.div>
        <svg width="0" height="0"> 
            <filter id="filter-base">
                <feTurbulence type="fractalNoise" baseFrequency="0.011" numOctaves="5" seed="8517" />     
                <feDisplacementMap  in="SourceGraphic" scale="80" />
            </filter>
            <filter id="filter-back">
                <feTurbulence type="fractalNoise" baseFrequency="0.011" numOctaves="3" seed="8517" />     
                <feDisplacementMap  in="SourceGraphic" scale="80" />
            </filter>
            <filter id="filter-mid">
                <feTurbulence type="fractalNoise" baseFrequency="0.011" numOctaves="3" seed="8517"/>
                <feDisplacementMap  in="SourceGraphic" scale="80" />
            </filter>
            <filter id="filter-front">
                <feTurbulence type="fractalNoise" baseFrequency="0.009" numOctaves="4" seed="8517"/>
                <feDisplacementMap  in="SourceGraphic" scale="30" />
            </filter>
        </svg>                     
    </>
  );
};

export default Clouds;
