import * as React from 'react';
import * as ReactDOM from 'react-dom';

class World extends React.Component<any, any> {
    render() {
        let content = "Hello World from a Class!";
        return <h1>{content}</h1>;
    }
}

interface Count { count: number }

class Counter extends React.Component<Count, Count> {
    constructor(props) {
        super();
        this.state = { count: props.count };
    }

    renderCount() {
        return <h2>{this.state.count}</h2>;
    }

    renderButton(label, onClick) {
        return <button onClick={onClick}>{label}</button>;
    }

    incrementCount() {
        this.setState({count: this.state.count + 1});
    }

    decrementCount() {
        this.setState({count: this.state.count - 1});
    }

    render() {
        return (
            <div>
                {this.renderButton('+', this.incrementCount.bind(this))}
                {this.renderButton('-', this.decrementCount)}
                {this.renderCount()}
           </div>
        );
    }
}

class Main extends React.Component<any, any> {
    render() {
        return (
            <div>
                <h1>Hello World!</h1>
                <World />
                <Counter count={100} />
            </div>
        );
    }
}


ReactDOM.render(<Main />, document.getElementById('content'));
