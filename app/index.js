import React from 'react';
import ReactDOM from 'react-dom'
import './index.css'

// -> Components: States, Lifecycle & UI

class App extends React.Component{
    render() {
        return (
            <h1>Hello World!</h1>
        )
    }
}

ReactDOM.render(
//    React Element
    <App/>,
//    Where to render element to
    document.getElementById('app')
)