import React from "react";
import {Router} from "./routes/Router"
import {MainContainer} from "./StyledApp"
import GlobalState from "./global/GlobalState"

function App() {
  return (
    <GlobalState> 
         <MainContainer>
           <Router/>
        </MainContainer>
      </GlobalState>)
   
}

export default App;
