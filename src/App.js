import React from 'react';
import { Switch,Route } from "react-router-dom"
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './screens/Home/Home';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Route path='/' component={Home} exact={true} />  
      <Footer/>
    </div>
  );
}

export default App;