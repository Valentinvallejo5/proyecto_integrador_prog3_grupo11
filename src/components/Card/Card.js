import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Card.css";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = { verMas: false, favorito: false };
  }

  componentDidMount() {
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    const existe = favoritos.some(item => item.id === this.props.id && item.tipo === this.props.tipo);
    if (existe) {
      this.setState({ favorito: true });
    }
  }

  toggleVerMas() {
    this.setState({ verMas: !this.state.verMas });
  }

  toggleFavorito() {
    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

    if (this.state.favorito) {
     
      favoritos = favoritos.filter(item => !(item.id === this.props.id && item.tipo === this.props.tipo));
    } else {
     
      const nuevo = {
        id: this.props.id,
        titulo: this.props.titulo,
        img: this.props.img,
        descripcion: this.props.descripcion,
        tipo: this.props.tipo
      };
      favoritos.push(nuevo);
    }

    localStorage.setItem("favoritos", JSON.stringify(favoritos));

    this.setState({ favorito: !this.state.favorito }, () => {
      if (this.props.onUpdate) this.props.onUpdate();
    });
  }

  render() {
    const esSerie = this.props.tipo === "serie";
    const rutaDetalle = esSerie ? `/series/${this.props.id}` : `/peliculas/${this.props.id}`;
    const imagen = this.props.img ? `https://image.tmdb.org/t/p/w342${this.props.img}` : "/img/placeholder.jpg";

    return (
      <article className="card">
        <img src={imagen} alt={this.props.titulo} />
        <h3>{this.props.titulo}</h3>

        <button onClick={() => this.toggleVerMas()}>
          {this.state.verMas ? "Ver menos" : "Ver más"}
        </button>
        {this.state.verMas && <p>{this.props.descripcion}</p>}

        <Link to={rutaDetalle}>Ir a detalle</Link>

        <button onClick={() => this.toggleFavorito()}>
          {this.state.favorito ? "Quitar de Favoritos" : "Agregar a Favoritos"}
        </button>
      </article>
    );
  }
}

export default Card;
