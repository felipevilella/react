import React, {Component} from 'react'

export default class Contador extends Component {
    state = {
        numero: 0
    }

    maisUm = () => {
        this.setState({numero: this.state.numero + 1})
        //this.state.numero++
    }

    menosUm = () => {
        this.setState({numero: this.state.numero - 1})
        //this.state.numero++
    }
    render() {
        return (
            <div>
                <div>Numero: {this.state.numero}</div>
                <button onClick={this.maisUm}>Inc</button>
                <button onClick={this.menosUm}>Dec</button>
            </div>
        )
    }
}

// Solução 1 - bind
// constructor(props) {
//     super(props)
//     this.maisUm = this.maisUm.bind(this)
// }

// Segunda Solução - função arrow(onclink)
//<button onClick={() => this.maisUm()}>Inc</button>


// terceira solução - função Arrow
// maisUm = () => {
//     console.log(this)
//     //this.props.numero++
// }