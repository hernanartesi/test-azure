import React from 'react'

class HolaMundo extends React.Component {



    render() {
        return <h1>Hola Mundo, me llamo {this.props.nombre} </h1>;
    }
}


export default HolaMundo