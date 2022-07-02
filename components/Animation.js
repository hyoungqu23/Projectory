import React from 'react';
import Lottie from 'react-lottie-player';

const Animation = ({ lottieJson, width, height }) => {
  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
      style={{ width: width, height: height }}
    />
  );
};

export default Animation;
