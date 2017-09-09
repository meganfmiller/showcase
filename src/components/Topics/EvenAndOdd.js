import React, { Component } from 'react';

class EvenAndOdd extends Component {
    constructor(){
        super();

        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }

    handleChange(val) {
        this.setState({
            userInput: val
        })
    }

    updateValue(userInput){
        var arr = userInput.split(',');
        var evens = [];
        var odds = [];
        arr.filter((e,i,arr) => e % 2 === 0 ? evens.push(parseInt(e, 10)) : odds.push(parseInt(e, 10)))
        this.setState({
            evenArray: evens,
            oddArray: odds
        });
        }

    render() {
        return (
            <div className='puzzleBox evenAndOddPB'>
                <h4>Evens and Odds</h4>
                <input className='inputLine' onChange={ (e) => this.handleChange(e.target.value)} ></input>
                <button className='confirmationButton' onClick={ () => this.updateValue(this.state.userInput)}>Split</button>
                <span className='resultsBox'>Evens: {JSON.stringify(this.state.evenArray)}</span>
                <span className='resultsBox'>Odds: {JSON.stringify(this.state.oddArray)}</span>
            </div>
        )
    }

}

export default EvenAndOdd;