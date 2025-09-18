import React, { Component } from "react";
import "./DetalleSeries.css";

class DetalleSeries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      serie: {},
      error: ""
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;

    const url = `https://api.themoviedb.org/3/tv/${id}?language=es-ES`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOGM4OTkyODcwY2ExYjllMGY0MWQ5NmVhNmMwNjEwNiIsIm5iZiI6MTc1NzA4MDI1NC43ODEsInN1YiI6IjY4YmFlYWJlNTcyYzY5ZDkyNDk4YjM3YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VtGrSfEpLxvt4jMrXXJNe3jdRWBiJI9xBhl7WNP7Uyk"
      }
    };

    fetch(url, options)
      .then(res => res.json())
      .then(data => this.setState({ serie: data }))
      .catch(() => this.setState({ error: "No se pudo cargar la serie." }));
  }

  render() {
    const { serie, error } = this.state;

    if (error) {
      return <p>{error}</p>;
    }

    if (!serie.name) {
      return <p>Cargando detalle...</p>;
    }

    return (
      <div className="unaCard">
        <img
          src={`https://image.tmdb.org/t/p/w342${serie.poster_path}`}
          alt={serie.name}
        />
        <h2>{serie.name}</h2>
        <p><strong>Sinópsis:</strong> {serie.overview}</p>
        <p><strong>Estreno:</strong> {serie.first_air_date}</p>
        <p><strong>Rating:</strong> {serie.vote_average}</p>
        <p><strong>Genero:</strong></p>
        <ul>{serie.genres ? serie.genres.map(genero => <li>{genero.name}</li>) : null}</ul>
      </div>
    );
  }
}

export default DetalleSeries;

