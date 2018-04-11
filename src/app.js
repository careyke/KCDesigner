import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import appStyle from './app.less';
import Designer from './designer/entryIndex';
import Runtime from './runtime/entryIndex';

let rootElement = document.getElementById('app');
ReactDOM.render(
    <BrowserRouter>
        <div className={appStyle['pageContainer']}>
            <Route path='/designer' component={Designer}></Route>
            <Route path='/runtime' component={Runtime}></Route>
        </div>
    </BrowserRouter>,
    rootElement
)
