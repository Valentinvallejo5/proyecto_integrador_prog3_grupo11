import React, { Component } from "react";
import Card from "../../components/Card/Card";
import "./Favoritos.css";

class Favoritos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peliculas: [],
      series: []
    };
  }

  componentDidMount() {
    this.cargarFavoritos();
  }

  cargarFavoritos() {
    const favs = JSON.parse(localStorage.getItem("favoritos")) || [];
    const peliculas = favs.filter(item => item.tipo === "pelicula");
    const series = favs.filter(item => item.tipo === "serie");
    this.setState({ peliculas, series });
  }

  render() {
    const { peliculas, series } = this.state;

    return (
      <main className="favoritos">
        <h2>Películas Favoritas</h2>
        <section className="grid">
          {peliculas.length === 0 ? (
            <p className="mensaje">No tienes películas en favoritos.</p>
          ) : (
            peliculas.map(peli => (
              <Card
                key={peli.id}
                id={peli.id}
                titulo={peli.titulo}
                img={peli.img}
                descripcion={peli.descripcion}
                tipo="pelicula"
                onUpdate={() => this.cargarFavoritos()}
              />
            ))
          )}
        </section>

        <h2>Series Favoritas</h2>
        <section className="grid">
          {series.length === 0 ? (
            <p className="mensaje">No tienes series en favoritos.</p>
          ) : (
            series.map(serie => (
              <Card
                key={serie.id}
                id={serie.id}
                titulo={serie.titulo}
                img={serie.img}
                descripcion={serie.descripcion}
                tipo="serie"
                onUpdate={() => this.cargarFavoritos()}
              />
            ))
          )}
        </section>
      </main>
    );
  }
}

export default Favoritos;
