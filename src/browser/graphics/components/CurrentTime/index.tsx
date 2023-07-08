import React from 'react';
import { useEffect, useState } from 'react';

export const CurrentTime = () => {
  const [ time, setTime ] = useState<string>('');
  useEffect(() => {
    setInterval(() => {
      const now = new Date();
      setTime(`${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`);
    }, 1000);
  }, []);

  return (
    <div style={{
      backgroundColor: 'red',
      padding: '8px 16px',
      color: 'white',
      fontSize: '36px',
    }}>
      { time }
    </div>
  );
};