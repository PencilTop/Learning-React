import {Component} from 'react';

class App extends Component {
    constructor() {
        super();
        this.state={
            loading: false,
            character: {}
        }
    }

    componentDidMount() {
        this.setState({loading: true});
        fetch("https://suggest.taobao.com/sug?code=utf-8&q=shoes")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    loading: false,
                    character: data
                })
            })
    }
    render() {
        const text = this.state.loading ? "loading..." : this.state.character.name;
        return (
            <div>
                <p>{text}</p>
            </div>
        );
    }
}
export default App