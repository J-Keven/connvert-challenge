import React, { TextareaHTMLAttributes, useState } from 'react';

import { Container } from './styles';

type InputProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

const Header: React.FC<InputProps> = props => {
  const [focushed, setFocushed] = useState(false);
  return (
    <Container focushed={focushed}>
      <textarea
        {...props}
        onFocus={() => setFocushed(true)}
        onBlur={() => setFocushed(false)}
      />
    </Container>
  );
};

export default Header;
