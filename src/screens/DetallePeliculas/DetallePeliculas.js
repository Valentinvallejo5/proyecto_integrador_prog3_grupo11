import React, { Component } from "react";
import "./DetallePeliculas.css";

class DetallePeliculas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pelicula: {},
      error: ""
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;

    const url = `https://api.themoviedb.org/3/movie/${id}?language=es-ES`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOGM4OTkyODcwY2ExYjllMGY0MWQ5NmVhNmMwNjEwNiIsIm5iZiI6MTc1NzA4MDI1NC43ODEsInN1YiI6IjY4YmFlYWJlNTcyYzY5ZDkyNDk4YjM3YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VtGrSfEpLxvt4jMrXXJNe3jdRWBiJI9xBhl7WNP7Uyk"
      }
    };

    fetch(url, options)
      .then(res => res.json())
      .then(data => this.setState({ pelicula: data }))
      .catch(() => this.setState({ error: "No se pudo cargar la película." }));
  }

  render() {
    const { pelicula, error } = this.state;

    if (error) {
      return <p>{error}</p>;
    }

    if (!pelicula.title) {
      return <p>Cargando detalle...</p>;
    }

    return (
      <div className="unaCard">
        <img
          src={`https://image.tmdb.org/t/p/w342${pelicula.poster_path}`}
          alt={pelicula.title}
        />
        <h2>{pelicula.title}</h2>
        <p><strong>Sinópsis:</strong> {pelicula.overview}</p>
        <p><strong>Estreno:</strong> {pelicula.release_date}</p>
        <p><strong>Rating:</strong> {pelicula.vote_average}</p>
        <p><strong>Genero:</strong></p>
        <ul>{pelicula.genres ? pelicula.genres.map(genero => <li>{genero.name}</li>) : null}</ul>
      </div>
    );
  }
}

export default DetallePeliculas;




