import React from "react";
import { Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./screens/Home/Home";
import Peliculas from "./screens/Peliculas/Peliculas";
import Series from "./screens/Series/Series";
import DetallePeliculas from "./screens/DetallePeliculas/DetallePeliculas";
import DetalleSeries from "./screens/DetalleSeries/DetalleSeries";


function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/peliculas" exact={true} component={Peliculas} />
        <Route path="/series" exact={true} component={Series} />
        <Route path="/peliculas/:id" component={DetallePeliculas} />
        <Route path="/series/:id" component={DetalleSeries} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
