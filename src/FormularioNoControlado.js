import React from "react";

class FormularioNoControlado extends React.Component {


    handleSubmit = (event) => {
        event.preventDefault()

        const usuario = event.target[0].value
        const mail = event.target[1].value
        console.log(event.target[0].value)

        console.log(event.target[1].value)
    }   


    render() {
       return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <div className="input-group mb-3">
                        <span className="input-group-text"></span>
                        <input type="text" className="form-control" placeholder="Username" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text">@</span>
                        <input type="text" className="form-control" placeholder="Mail" />
                    </div>

                    <button type="submit" className="btn btn-primary">Enviar</button>
                </form>


            </div>
        )
    }

}


export default FormularioNoControlado