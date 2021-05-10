import React, { Component } from 'react';
import {render} from 'react-dom';
import Hello from './components/Hello';
import ModalMarkdownHeaderComponent from './components/ModalMarkdownHeaderComponent';

class App extends Component {
    render() {
        return (
            <Hello />
        )
    }
}


class ModalMarkdownHeaderApp extends Component {
    render() {
        return (
            <ModalMarkdownHeaderComponent />
        )
    }
}
render(<App />, document.getElementById('root'));
render(<ModalMarkdownHeaderApp />, document.getElementById('modalMarkdownHeaderID'));