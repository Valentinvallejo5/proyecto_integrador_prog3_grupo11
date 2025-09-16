import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Card.css";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      verMas: false,
      favorito: false
    };
  }

  toggleVerMas() {
    this.setState({ verMas: !this.state.verMas });
  }

  toggleFavorito() {
    this.setState({ favorito: !this.state.favorito });
  }

  render() {
    return (
      <article className="card">
        <img
          src={`https://image.tmdb.org/t/p/w342${this.props.img}`}
          alt={this.props.titulo}
        />
        <h3>{this.props.titulo}</h3>

        <button onClick={() => this.toggleVerMas()}>
          {this.state.verMas ? "Ver menos" : "Ver más"}
        </button>
        {this.state.verMas && <p>{this.props.descripcion}</p>}

        <Link to={`/peliculas/${this.props.id}`}>Ir a detalle</Link>

        <button onClick={() => this.toggleFavorito()}>
          {this.state.favorito ? "Quitar de Favoritos" : "Agregar a Favoritos"}
        </button>
      </article>
    );
  }
}

export default Card;
