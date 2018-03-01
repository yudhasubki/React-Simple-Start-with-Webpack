import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import css from '../style/style.css';

const App = () => {
    return(
        <div className="container">
            <div className="header">
                Hello React!
            </div>
        </div>
    );
}

ReactDOM.render(<App/>, document.getElementById('app'));