import { RouteComponentProps } from '@reach/router';
import React, { useState } from 'react';
import { Button } from 'rebass';
import styled, { ThemeProvider } from 'styled-components';
import theme from 'styled-theming';

const boxBackgroundColor = theme('mode', {
  light: '#fff',
  dark: '#000',
});

const Box = styled.div`
  background-color: ${boxBackgroundColor};
`;

const UseTheme: React.FC<RouteComponentProps> = () => {
  const [themeMode, setThemeMode] = useState({
    mode: 'light',
  });

  const toggleTheme = () => {
    setThemeMode(prevTheme => {
      return {
        mode: prevTheme.mode === 'light' ? 'dark' : 'light',
      };
    });
  };

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <Box>Hello World</Box>
        <Button onClick={toggleTheme}>Toggle theme</Button>
      </>
    </ThemeProvider>
  );
};

export default UseTheme;
