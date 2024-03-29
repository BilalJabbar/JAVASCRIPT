import React from 'react';
import { BeatLoader } from 'react-spinners';

const styles = {
    display: 'flex',
    justifyContent: 'center',
    height: '100vh'
}
const Spinners = ({ loading }) => {
  return (
    <div style={styles}>
      <BeatLoader
        loading={loading}
        color='#4338ca'
        size={50}
      />
    </div>
  );
};

export default Spinners;
