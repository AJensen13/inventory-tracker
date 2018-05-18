import React from 'react';
import ReactDOM from 'react-dom';
import './app.scss';
import { Container } from '../storage-container/container.jsx';

class App extends React.Component {
  render() {
    return <div><Container /></div>;
  }
}

ReactDOM.render(<App />, document.getElementById('app'));