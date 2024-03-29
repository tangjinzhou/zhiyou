import './styles/app.less';
var FastClick = require('fastclick');
FastClick.attach(document.body);
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './containers/App'
import Tag from './containers/Tag'
import Start from './containers/Start'
import Map from './containers/Map'
import Chat from './containers/Chat'
import Info from './containers/Info'
ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="tag" component={Tag}/>
            <Route path="start" component={Start}/>
            <Route path="map" component={Map}/>
            <Route path="chat" component={Chat}/>
            <Route path="info(/:name)" component={Info}/>
            <Route path="**" component={Tag}/>
        </Route>
    </Router>,
    document.getElementById('app')
);
