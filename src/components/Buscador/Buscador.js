import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Buscador.css";

class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      busqueda: "",
      tipo: "movie"
    };
  }

  controlarInput(e) {
    this.setState({ busqueda: e.target.value });
  }

  controlarSelect(e) {
    this.setState({ tipo: e.target.value });
  }

  controlarForm(e) {
    e.preventDefault();
    this.props.history.push(
      `/resultados/${this.state.tipo}/${this.state.busqueda}`
    );
  }

  render() {
    return (
      <form onSubmit={(e) => this.controlarForm(e)} className="buscador">
        <input
          type="text"
          placeholder="Buscar..."
          value={this.state.busqueda}
          onChange={(e) => this.controlarInput(e)}
        />

        <select value={this.state.tipo} onChange={(e) => this.controlarSelect(e)}>
          <option value="movie">Películas</option>
          <option value="tv">Series</option>
        </select>

        <button>Buscar</button>
      </form>
    );
  }
}

export default withRouter(Buscador);

