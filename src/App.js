import {darkTheme} from "./utils/thems"
import '../src/App.css';
import styled, {ThemeProvider} from 'styled-components';

const Body = styled.div`
  background-color: ${({theme}) => theme.bg};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  `;

function App() {
  return (
   <ThemeProvider theme={darkTheme}>
    <Body>Portfolio</Body>
   </ThemeProvider>
  );
}

export default App;
