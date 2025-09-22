import React, { Component } from "react";
import Card from "../../components/Card/Card";

class Series extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [], page: 1, filtro: "", cargando: true, error: "" };
  }

  componentDidMount() {
    this.cargarPagina(this.state.page);
  }

  cargarPagina(numeroPagina) {
    const url = `https://api.themoviedb.org/3/tv/popular?language=es-ES&page=${numeroPagina}`;
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
        this.setState((prev) => ({
          items: prev.items.concat(data.results || []),
          cargando: false,
          error: ""
        }));
      })
      .catch(() => this.setState({ cargando: false, error: "No se pudo cargar el listado." }));
  }

  cargarMas() {
    this.setState(
      (prev) => ({ page: prev.page + 1, cargando: true }),
      () => this.cargarPagina(this.state.page)
    );
  }

  controlarInput(e) {
    this.setState({ filtro: e.target.value });
  }

  manejarSubmit(e) {
    e.preventDefault();
  }

  render() {
    const { items, filtro, error } = this.state;
    const listaFiltrada = items.filter((s) => (s.name || "").toLowerCase().includes(filtro.toLowerCase()));

    return (
      <main className="home">
        <h2>Series populares</h2>

        <form onSubmit={(e) => this.manejarSubmit(e)} className="buscador">
          <input
            type="text"
            placeholder="Filtrar por título…"
            value={filtro}
            onChange={(e) => this.controlarInput(e)}
          />
        </form>

        {error ? <p>{error}</p> : null}

        <section className="grid">
          {listaFiltrada.map((serie) => (
            <Card
              key={serie.id}
              id={serie.id}
              titulo={serie.name}
              img={serie.poster_path}
              descripcion={serie.overview}
              tipo="serie"
            />
          ))}
        </section>

        <div>
          <button onClick={() => this.cargarMas()}>Cargar más</button>
        </div>
      </main>
    );
  }
}

export default Series;
