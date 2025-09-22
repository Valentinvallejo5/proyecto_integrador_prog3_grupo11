import React, { Component } from "react";
import Card from "../../components/Card/Card";

class ResultadoBuscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultados: []
    };
  }

  componentDidMount() {
    this.buscarResultados();
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.match.params.busqueda !== this.props.match.params.busqueda ||
      prevProps.match.params.tipo !== this.props.match.params.tipo
    ) {
      this.buscarResultados();
    }
  }

  buscarResultados() {
    const { tipo, busqueda } = this.props.match.params;
    const url = `https://api.themoviedb.org/3/search/${tipo}?language=es-ES&query=${busqueda}`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOGM4OTkyODcwY2ExYjllMGY0MWQ5NmVhNmMwNjEwNiIsIm5iZiI6MTc1NzA4MDI1NC43ODEsInN1YiI6IjY4YmFlYWJlNTcyYzY5ZDkyNDk4YjM3YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VtGrSfEpLxvt4jMrXXJNe3jdRWBiJI9xBhl7WNP7Uyk"
      }
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ resultados: data.results || [] });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { tipo, busqueda } = this.props.match.params;

    return (
      <main className="home">
        <h2>
          Resultados de {tipo === "tv" ? "Series" : "Películas"} para: {busqueda}
        </h2>

        {this.state.resultados.length === 0 ? (
          <p>No se encontraron resultados.</p>
        ) : (
          <section className="grid">
            {this.state.resultados.map((item) => (
              <Card
                key={item.id}
                id={item.id}
                titulo={item.title || item.name}
                img={item.poster_path}
                descripcion={item.overview}
                tipo={tipo === "tv" ? "serie" : "pelicula"}
              />
            ))}
          </section>
        )}
      </main>
    );
  }
}

export default ResultadoBuscador;
