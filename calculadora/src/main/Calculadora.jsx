import React, {Component} from 'react'
import './Calculadora.css'
import Button from "../components/Button"
import Display from "../components/Display"


const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0,0],
    currrent: 0
}

export default class Calculadora extends Component {

    state = {...initialState}

    constructor(props) {
        super()
        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)


    }

    clearMemory() {
        this.setState({...initialState})
    }

    setOperation(operation) {
        console.log(operation)
    }

    addDigit(n) {
        if (n === '.' && this.state.displayValue.includes('.')) {
            return 
        }

        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay
        const currrentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currrentValue + n
        this.setState({displayValue, clearDisplay: false})

        if(n !== '.') {
            const i = this.state.currrent
            const newValue = parseFloat(displayValue)
            const values = [...this.state.values]

            values[i] = newValue
            this.setState({values})
        }

    }

    render() {
        return(
            <div className="calculadora">
                <Display value={this.state.displayValue}/>
                <Button label="AC" click={this.clearMemory} triple />
                <Button label="/" click={this.setOperation} operation/>
                <Button label="7" click={this.addDigit}/>
                <Button label="8" click={this.addDigit}/>
                <Button label="9" click={this.addDigit}/>
                <Button label="*" click={this.setOperation} operation />
                <Button label="4" click={this.addDigit}/>
                <Button label="5" click={this.addDigit}/>
                <Button label="6" click={this.addDigit}/>
                <Button label="-" click={this.setOperation} operation />
                <Button label="1" click={this.addDigit}/>
                <Button label="2" click={this.addDigit}/>
                <Button label="3" click={this.addDigit}/>
                <Button label="+" click={this.setOperation} operation />
                <Button label="0" click={this.addDigit} double />           
                <Button label="." click={this.addDigit}/>           
                <Button label="=" click={this.setOperation} operation />           


            </div>
        )
    }
}