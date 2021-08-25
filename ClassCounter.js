import React, { Component } from 'react'
/*
-Use the RCE shortcut
-RCE creates import, class component syntax, and export syntax based on file's name. 
-Remove 'export' text from the class ClassCounter name.
-Add constructor and super functions.
-Initialiaze state with count 0.
*/
class ClassCounter extends Component {
constructor(props) {
    super(props)
    this.state = {
        count: 0
    }
}

/*Increment function. */
incrementCount = () => {
    this.setState({
    count: this.state.count +1
})
}

    render() {
        return (
            <div>
                <button onClick={this.incrementCount}> Count {this.state.count} </button>
            </div>
        )
    }
}

export default ClassCounter