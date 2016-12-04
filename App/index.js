import './styles/app.less';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './containers/App'
import Tag from './containers/Tag'
import Start from './containers/Start'
import Map from './containers/Map'
import Chat from './containers/Chat'
import Info from './containers/Info'

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="tag" component={Tag}/>
            <Route path="start" component={Start}/>
            <Route path="map" component={Map}/>
            <Route path="chat" component={Chat}/>
            <Route path="info" component={Info}/>
            <Route path="**" component={Tag}/>
        </Route>
    </Router>,
    document.getElementById('app')
);
