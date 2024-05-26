import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Main from './Components/Main/Main';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Quote from './Components/Quote/Quote';
import { MyContext } from "./MyContext";
function App() {
  const [detail, setDetails] = useState({name:"",phoneno:"",src:"",dest:""});
  return (
    <MyContext.Provider value={{ detail, setDetails }}>
      <Navbar />
      <Main />
      <About />
      <Services />
      <Quote />
    </MyContext.Provider>
  )
}
export default App;
