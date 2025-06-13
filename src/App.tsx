import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/theme/default';
import { GlobalStyle } from './styles/global';

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>olha</h1>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
