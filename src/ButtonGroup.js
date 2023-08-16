import React from 'react';
import {Link} from 'react-router-dom';

const ButtonGroup = () => {
  return (
    <div>
      <button><Link to = "/login"> Login</Link></button>
      <button><Link to = "/newuser"> Login</Link></button>
      <button><Link to = "/already"> Login</Link></button>
    </div>
  );
};

export default ButtonGroup;