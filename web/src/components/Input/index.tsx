import React, { InputHTMLAttributes, useState } from 'react';

import { Container } from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Header: React.FC<InputProps> = props => {
  const [focushed, setFocushed] = useState(false);
  return (
    <Container focushed={focushed}>
      <input
        {...props}
        onFocus={() => setFocushed(true)}
        onBlur={() => setFocushed(false)}
      />
    </Container>
  );
};

export default Header;
