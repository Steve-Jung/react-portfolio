import React from 'react';
import { motion } from 'framer-motion';

const blackBox = {
  initial: {
    height: '100vh',
    bottom: 0,
  },
  animate: {
    height: 0,
    transition: {
      when: 'afterChildren',
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

const textContainer = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 0,
    transition: {
      duration: 0.25,
      when: "afterChildren",
    },
    transitionEnd: {
      scaleY: 0,
    }
  },
};

const textAnimation = {
  initial: {
    y: 40,
  },
  animate: {
    y: 100,
    transition: {
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

const InitialTransition = () => {
  return (
    <div className="page-transition no-drag">
      <motion.div
        className="black-box"
        initial="initial"
        animate="animate"
        variants={blackBox}
        onAnimationStart={() => document.body.classList.add('overflow-hidden')}
        onAnimationComplete={() => document.body.classList.remove('overflow-hidden')}
      >
        <motion.svg variants={textContainer} className="svg-text">
          <pattern
            id="pattern"
            patternUnits="userSpaceOnUse"
            width={750}
            height={800}
            className="text-white"
          >
            <rect className="rect-fill-current" />
            <motion.rect variants={textAnimation} className="motion-rect-fill-current" />
          </pattern>
          <text
            className="text-cover"
            textAnchor="middle"
            x="50%"
            y="50%"
            style={{ fill: "url(#pattern)" }}
          >
            JungJisub.
          </text>
        </motion.svg>
      </motion.div>
    </div>
  )
}

export default InitialTransition;
