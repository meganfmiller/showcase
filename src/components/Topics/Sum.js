import React, { Component } from 'react';

class Sum extends Component {
    constructor() {
        super();

        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    updateNumOne(num) {
        this.setState({
            number1: parseInt(num, 10)
        })
    }

    updateNumTwo(num) {
        this.setState({
            number2: parseInt(num, 10)
        })
    }

    updateValue(val) {
        this.setState({
            sum: this.state.number1 + this.state.number2
        })
    }

    render() {
        return (
            <div className='puzzleBox sumPB'>
                <h4>Sum</h4>
                <input className='inputLine' onChange={ (e) => this.updateNumOne(e.target.value) }></input>
                <input className='inputLine' onChange={ (e) => this.updateNumTwo(e.target.value) }></input>
                <button className='confirmationButton' onClick={ () => this.updateValue(this.state.number1,this.state.number2) }>Add</button>
                <span className='resultsBox'>Sum: { this.state.sum }</span>
            </div>
        )
    }
}

export default Sum;