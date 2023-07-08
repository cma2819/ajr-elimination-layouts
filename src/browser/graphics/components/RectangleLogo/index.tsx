import React from 'react';
import Background from '../../resources/logo_rect.png';

export const RectangleLogo = () => {
  console.log(Background);
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        backgroundImage: `url(${Background})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    />
  );
};