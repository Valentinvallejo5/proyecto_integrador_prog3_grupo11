import React, { Component } from "react";
import "./DetailPeliculas.css";

class DetailPeliculas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pelicula: null,
      error: null
    };
  }

  componentDidMount() {
   
    const { id } = this.props.match.params;

    const url = `https://api.themoviedb.org/3/movie/${id}?language=es-ES`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOGM4OTkyODcwY2ExYjllMGY0MWQ5NmVhNmMwNjEwNiIsIm5iZiI6MTc1NzA4MDI1NC43ODEsInN1YiI6IjY4YmFlYWJlNTcyYzY5ZDkyNDk4YjM3YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VtGrSfEpLxvt4jMrXXJNe3jdRWBiJI9xBhl7WNP7Uyk" 
      }
    };

    fetch(url, options)
      .then((res) => {
        if (!res.ok) throw new Error("No se pudo cargar la película.");
        return res.json();
      })
      .then((data) => this.setState({ pelicula: data }))
      .catch((err) => this.setState({ error: err.message }));
  }

  render() {
    const { pelicula, error } = this.state;

    if (error) {
      return (
        <div className="unaCard">
          <p className="error">{error}</p>
        </div>
      );
    }

    if (!pelicula) return <p>Cargando detalle...</p>;

    return (
      <div className="unaCard">
        <img
          src={
            pelicula.poster_path
              ? `https://image.tmdb.org/t/p/w342${pelicula.poster_path}`
              : "/img/placeholder.jpg"
          }
          alt={pelicula.title}
        />
        <h2>{pelicula.title}</h2>
        <p><strong>Sinópsis:</strong> {pelicula.overview || "Sin sinopsis disponible."}</p> 
        <p><strong>Estreno:</strong> {pelicula.release_date || "—"}</p>
        <p><strong>Rating:</strong> {pelicula.vote_average || "—"}</p>
        <p><strong>Duración:</strong> {pelicula.runtime ? `${pelicula.runtime} min` : "—"}</p>
        <p>
          <strong>Género:</strong>{" "}
          {pelicula.genres && pelicula.genres.length > 0
            ? pelicula.genres.map((g) => g.name).join(", ")
            : "—"}
        </p>
      </div>
    );
  }
}

export default DetailPeliculas;
