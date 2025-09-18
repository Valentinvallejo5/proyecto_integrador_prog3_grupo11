import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Buscador.css";

class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = { busqueda: "" };
  }

  controlarInput(e) {
    this.setState({ busqueda: e.target.value });
  }

  controlarForm(e) {
    e.preventDefault();
    this.props.history.push("/resultados?query=" + this.state.busqueda);
  }

  render() {
    return (
      <form onSubmit= {(e) => this.controlarForm(e)} className="buscador">
        <input
          type="text"
          placeholder="Buscar película..."
          value={this.state.busqueda}
          onChange={(e) => this.controlarInput(e)}
        />
        <button>Buscar</button>
      </form>
    );
  }
}

export default withRouter(Buscador);
