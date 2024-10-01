import logo from "./logo.svg"
import "./App.css"
import HolaMundo from "./HolaMundo"
import Pedido from "./Pedido"
import FormularioNoControlado from "./FormularioNoControlado"

function App() {
  const nombre1 = "Juan"
  const nombre2 = "Pedro"
  const nombre3 = "Jorge"

  function saludarAJorge() {
    return <h1> Hola, Jorge </h1>
  }
  const listaDeSuper = {
    nombre: "Lista de Hernan",
    productos: [
      {
        nombre: "Dulce de Leche",
        cantidad: 0,
      },
      {
        nombre: "Chocolate",
        cantidad: 2,
      },
      {
        nombre: "Pan",
        cantidad: 5,
      },
      {
        nombre: "Galletitas",
        cantidad: 10,
      },
    ],
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* 
        <h1>Esta es mi primera app React</h1>
        <HolaMundo nombre={nombre1}></HolaMundo>
        <HolaMundo nombre={nombre2}></HolaMundo>
        <HolaMundo nombre={nombre3}></HolaMundo> */}

        {/* <Pedido nombre={productos[0].nombre} cantidad={productos[0].cantidad}></Pedido>
        <Pedido nombre={productos[1].nombre} cantidad={productos[1].cantidad}></Pedido>
        <Pedido nombre={productos[2].nombre} cantidad={productos[2].cantidad}></Pedido>
        <Pedido nombre={productos[3].nombre} cantidad={productos[3].cantidad}></Pedido> */}

        {/* {listaDeSuper.productos.map((producto, index) => (
          <Pedido
            nombre={producto.nombre}
            cantidad={producto.cantidad}
            key={index}
          ></Pedido>
        ))} */}

        <FormularioNoControlado></FormularioNoControlado>
      </header>
    </div>
  )
}

export default App
