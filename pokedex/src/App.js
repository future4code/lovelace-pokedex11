import React from "react"
import { Router} from "./routes/Router.js"
import Header from "./components/Header.js";
import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;
function App() {
  return (
    <div>
      <GlobalStyle/>
      <Header/>
     <Router/>
    </div>
  );
}

export default App;
