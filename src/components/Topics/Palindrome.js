import React, { Component } from 'react';

class Palindrome extends Component {
    constructor() {
        super();

        this.state = {
            userInput: '',
            palindrome: ''
        }
    }

    updateInput(input) {
        this.setState({
            userInput: input
        })
    }

    updateValue(string) {
        var arr = string.split('');
        var reverse = arr.reverse();
        var reverseString = reverse.join('');
        string === reverseString ? this.setState({palindrome: 'true'}) : this.setState({palindrome: 'false'});
    }

    render() {
        return (
            <div className='puzzleBox palindromePB' >
                <h4>Palindrome</h4>
                <input className='inputLine' onChange={(e) => this.updateInput(e.target.value)}></input>
                <button className='confirmationButton' onClick={() => this.updateValue(this.state.userInput)}>Check</button>
                <span className='resultsBox'>Palindrome: {this.state.palindrome}</span>
            </div >
        )
    }
}

export default Palindrome;