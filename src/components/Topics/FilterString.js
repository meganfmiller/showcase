import React, { Component } from 'react';

class FilterString extends Component {
    constructor() {
        super();

        this.state = {
            unFilteredArray: ['Mario is my favorite!', 'Luigi is my second favorite!', 'Toad is so cute!', 'Peach needs a better security system.', 'Daisy is so hardcore.', 'Wario makes me sick.', 'Waluigi is underappreciated.', 'Yoshi is just weird.'],
            userInput: '',
            filteredArray: []
        }
    }

    updateInput(input) {
        this.setState({
            userInput: input
        })
    }

    updateValue(string) {
        var newArr = [];
        this.state.unFilteredArray.filter((e,i) => {
            if (e.includes(string)) {
                newArr.push(e);
            } return newArr;
    })

        this.setState({
            filteredArray: newArr
        })
}

    render() {
        return (
            <div className='puzzleBox filterStringPB'>
                <h4>Filter String</h4>
                <span className='puzzleText'>{JSON.stringify(this.state.unFilteredArray)}</span>
                <input className='inputLine' onChange={ (e) => this.updateInput(e.target.value) }></input>
                <button className='confirmationButton' onClick={ () => this.updateValue(this.state.userInput) }>Filter</button>
                <span className='resultsBox filterStringRB'>Filtered: {JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }
}

export default FilterString;