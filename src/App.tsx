import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/theme/default';
import { GlobalStyle } from './styles/global';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import { GithubBlogContextProvider } from './context/GithubBlogContext';

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GithubBlogContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <GlobalStyle />
      </GithubBlogContextProvider>
    </ThemeProvider>
  );
};

export default App;
