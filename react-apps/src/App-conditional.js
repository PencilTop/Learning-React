import {Component} from 'react';

function Conditional(props) {
    return (
        <div>
            <h1>Header</h1>
            { props.isLoading === true ? <h1>Loading...</h1> : <h1>Conditional rendering over</h1> }
            <h1>Footer</h1>
        </div>
    )
}

class App extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: true
        };
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 3000)
    }

    render() {
        return (
            <div>
                <Conditional isLoading={this.state.isLoading} />
            </div>
        )
    }
}
export default App