import React, {Component, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED} from "react"

class App extends Component {
    constructor() {
        super();
        this.state = {
            name: "Sally",
            age: 15
        }
    }
    render() {
        return (
            <div>
                <h1>Hi,{this.state.name}</h1>
                <h3>You are {this.state.age} years old</h3>
            </div>
        )
    }
}

export default App


