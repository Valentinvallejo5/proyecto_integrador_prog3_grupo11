import React from "react";
import { Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./screens/Home/Home";
import Peliculas from "./screens/Peliculas/Peliculas";
import Series from "./screens/Series/Series";
import Favoritos from "./screens/Favoritos/Favoritos";
import DetallePeliculas from "./screens/DetallePeliculas/DetallePeliculas";
import DetalleSeries from "./screens/DetalleSeries/DetalleSeries";
import NotFound from "./screens/NotFound/NotFound";
import ResultadoBuscador from "./screens/ResultadoBuscador/ResultadoBuscador";


function App() {
  return (
    <div className="App">
      <React.Fragment>
      <Navbar />

      <Switch>

        <Route path="/" exact={true} component={Home} />
        <Route path="/peliculas" exact={true} component={Peliculas} />
        <Route path="/series" exact={true} component={Series} />
        <Route path="/peliculas/:id" component={DetallePeliculas} />
        <Route path="/series/:id" component={DetalleSeries} />
        <Route path="/favoritos" component={Favoritos} />
        <Route path="/resultados/:tipo/:busqueda" component={ResultadoBuscador} exact={true} />
        <Route component={NotFound} />

      </Switch>

      <Footer />
      </React.Fragment>
    </div>
  );
}

export default App;
