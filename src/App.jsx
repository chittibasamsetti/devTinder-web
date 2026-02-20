import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Body from "./Body.jsx";
import Navbar from "./Navbar.jsx";

function App() {
  

  return (
    <>
      <Navbar/>
      
<BrowserRouter baseName="/">
<Routes>
  <Route path="/body" element={<Body/>}></Route>
  <Route path="/test" element={<>test page</>}></Route>
</Routes>
</BrowserRouter>
    </>
  )
}

export default App
