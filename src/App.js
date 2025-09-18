import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./screens/Home/Home";
import Peliculas from "./screens/Peliculas/Peliculas";
import Series from "./screens/Series/Series";
import DetailPeliculas from "./screens/DetailPeliculas/DetailPeliculas";


function App() {

  
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/peliculas" exact component={Peliculas} />
        <Route path="/series" exact component={Series} />
        <Route path="/peliculas/:id" exact component= {DetailPeliculas} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
