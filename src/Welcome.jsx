import React from 'react';
import PropTypes from 'prop-types';
import { useSpring } from '@react-spring/core';
import { animated } from '@react-spring/web';

export default function Welcome({ active }) {
  const welcomeSpring = useSpring({
    opacity: active ? 1 : 0,
    config: {
      duration: 500,
    },
  });

  return (
    <animated.div className="welcome-cntr" style={welcomeSpring}>
      <h1>The Web in 3D.</h1>
      <p>
        Hello, Russel Johnson and Ernesto Stevens.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </animated.div>
  );
}

Welcome.propTypes = {
  active: PropTypes.number.isRequired,
};
