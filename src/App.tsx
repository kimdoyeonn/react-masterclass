import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Router from './Router';
import Home from './routes/Home';
import Search from './routes/Search';
import Tv from './routes/Tv';
import { ReactQueryDevtools } from 'react-query/devtools';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { dark, light } from './theme';
import { useRecoilValue } from 'recoil';
import { isDarkAtom } from './atoms';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, menu, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  main, menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, main, menu, nav, section {
    display: block;
  }
  /* HTML5 hidden-attribute fix for newer browsers */
  *[hidden] {
      display: none;
  }
  body {
    line-height: 1;
  }
  menu, ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * {
    box-sizing: border-box;
  }
  body {
    font-weight: 400;
    font-family: 'Source Sans Pro', sans-serif;
    color: ${(props) => props.theme.text.primary};
    line-height: 1.2;
    background-color: ${(props) => props.theme.bgColor};
  }
  a {
    text-decoration:none;
    color:inherit;
  }
`;

function App() {
  const isDark = useRecoilValue(isDarkAtom);
  return (
    <ThemeProvider theme={isDark ? light : dark}>
      <GlobalStyle />
      <ReactQueryDevtools initialIsOpen={true} />
      <Router />
    </ThemeProvider>
    // <Router>
    //   <Header />
    //   <Routes>
    //     <Route path="/" element={<Home />}/>
    //     <Route path="/movies/:movieId" element={<Home />} />
    //     <Route path="/tv" element={<Tv />}/>
    //     <Route path="/search" element={<Search />}/>
    //   </Routes>
    // </Router>
  );
}

export default App;

const DarkModeButton = styled.div`
  cursor: pointer;
  color: ${(props) => props.theme.text.secondary};
`;

const CommonContainer = styled.div`
  padding: 20px;
`;
