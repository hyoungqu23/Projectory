import React from 'react';
import Lottie from 'react-lottie-player';

const Animation = ({ lottieJson }) => {
  return <Lottie loop animationData={lottieJson} play />;
};

export default Animation;
