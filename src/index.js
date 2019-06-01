import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import App from './components/App';
import Root from './Root';
import Posts from './components/Posts';

ReactDOM.render(
    <Root>
        <BrowserRouter>
            <Route path="/" component={App} />
            <Route path="/posts" component={Posts} />
        </BrowserRouter>
    </Root>,
    document.getElementById('root')
);
