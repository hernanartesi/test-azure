import React from "react"

class Pedido extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      cantidad: this.props.cantidad,
    }
  }

  agregar = () => {
    this.setState({
      cantidad: this.state.cantidad + 1,
    })
  }

  quitar = () => {
    this.setState({
      cantidad: this.state.cantidad - 1,
    })
  }

  reset = () => {
    this.setState({
      cantidad: 0,
    })
  }



  render() {

    let contador 

    if (this.state.cantidad >=0) {
        contador = <div>Cantidad: {this.state.cantidad}</div>
    } else {
        contador = <div>La cantidad no puede ser menor a cero. Resetee el contador</div>
    }

    return (
      <div className="my-5">
        <h1>{this.props.nombre}</h1>
        {contador}
        <div className="d-flex gap-2 justify-content-center mt-4">
          <button className="btn btn-primary" onClick={this.agregar}>
            Agregar
          </button>
          <button className="btn btn-secondary" onClick={this.quitar}>
            Quitar
          </button>
          <button className="btn btn-danger" onClick={this.reset}>Resetear</button>
        </div>
      </div>
    )
  }
}

export default Pedido
