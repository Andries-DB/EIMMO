import React, { useState } from 'react';

function PasswordInput() {
  const [isVisible, SetIsVisible] = useState(false);
  return (
    <input type={isVisible ? 'password' : 'text'}></input>

  );
}

export default PasswordInput;
