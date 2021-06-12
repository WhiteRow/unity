import React from 'react';
import images from '@images/index';

const Logo = () => {
  const logoPic = images.logoLight;

  return (
    <div className="logo">
      <img src={logoPic} alt="Unity" className="logo__pic" />
    </div>
  );
};

export default Logo;
