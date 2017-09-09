import React, { Component } from 'react';

class FilterObject extends Component {
    constructor() {
        super();

        this.state = {
            employees: [
                {
                  name: 'Jimmy Joe',
                  title: 'Hack0r',
                  age: 12,
                },
                {
                  name: 'Jeremy Schrader',
                  age: 24,
                  hairColor: 'brown'
                },
                {
                  name: 'Carly Armstrong',
                  title: 'CEO',
                }
              ],
        
              userInput: '',
              filteredEmployees: []
            }
          }

    updateInput(val) {
        this.setState({
            userInput: val
        })
    }

    updateValue(property) {
        console.log(this.state)
        var arr = [];
        this.state.employees.filter((e, i) => {
            if (e[property]) {
                arr.push(e);
            } return arr;
        })

        this.setState({
            filteredEmployees: arr
        })
    }

    render() {
        return (
            <div className='puzzleBox filterObjectPB'>
                <h4>Filter Object</h4>
                <span className='puzzleText'>{ JSON.stringify(this.state.employees, null, 10) }</span>
                <input className='inputLine' onChange={(e) => this.updateInput(e.target.value)}></input>
                <button className='confirmationButton' onClick={() => this.updateValue(this.state.userInput)}>Go</button>
                <span className='resultsBox filterObjectRB'>{ JSON.stringify(this.state.filteredEmployees, null, 10) }</span>
            </div>
        )
    }
}

export default FilterObject;