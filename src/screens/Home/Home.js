import React, { Component } from "react";
import Card from "../../components/Card/Card";
import Buscador from "../../components/Buscador/Buscador";
import "./Home.css";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      populares: [],
      cartelera: []
    };
  }

  componentDidMount() {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOGM4OTkyODcwY2ExYjllMGY0MWQ5NmVhNmMwNjEwNiIsIm5iZiI6MTc1NzA4MDI1NC43ODEsInN1YiI6IjY4YmFlYWJlNTcyYzY5ZDkyNDk4YjM3YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VtGrSfEpLxvt4jMrXXJNe3jdRWBiJI9xBhl7WNP7Uyk "
      }
    };

    fetch("https://api.themoviedb.org/3/movie/popular?language=es-ES&page=1", options)
      .then((res) => res.json())
      .then((data) => this.setState({ populares: data.results }))
      .catch((err) => console.error(err));

    fetch("https://api.themoviedb.org/3/movie/now_playing?language=es-ES&page=1", options)
      .then((res) => res.json())
      .then((data) => this.setState({ cartelera: data.results }))
      .catch((err) => console.error(err));
  }

  render() {
    return (
      <main className="home">
        <Buscador />

        <section className="bloque">
          <h2>Películas Populares</h2>
          <div className="grid">
            {this.state.populares.slice(0, 4).map((peli) => (
              <Card
                key={peli.id}
                id={peli.id}
                titulo={peli.title}
                img={peli.poster_path}
                descripcion={peli.overview}
              />
            ))}
          </div>
        </section>

        <section className="bloque">
          <h2>Películas en Cartelera</h2>
          <div className="grid">
            {this.state.cartelera.slice(0, 4).map((peli) => (
              <Card
                key={peli.id}
                id={peli.id}
                titulo={peli.title}
                img={peli.poster_path}
                descripcion={peli.overview}
              />
            ))}
          </div>
        </section>
      </main>
    );
  }
}

export default Home;
