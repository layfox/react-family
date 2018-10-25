import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Home from 'bundle-loader?lazy&name=home!pages/Home';
import Page1 from 'bundle-loader?lazy&name=page1!pages/Page1';
import { hot } from 'react-hot-loader';
import Counter from 'bundle-loader?lazy&name=counter!pages/Counter';
import UserInfo from 'bundle-loader?lazy&name=userInfo!pages/userInfo';
import Bundle from './bundle';

const Loading = () => (
    <div>Loading...</div>
);

const createComponent = component => props => (
    <Bundle load={component}>
        {
            Component => Component ? <Component {...props} /> : <Loading />
        }
    </Bundle>
)

const AppRouter = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/page1">Page1</Link></li>
                <li><Link to="/counter">Counter</Link></li>
                <li><Link to="/userInfo">UserInfo</Link></li>
            </ul>
            <Switch>
                <Route exact path="/" component={createComponent(Home)} />
                <Route path="/page1" component={createComponent(Page1)} />
                <Route path="/counter" component={createComponent(Counter)} />
                <Route path="/userInfo" component={createComponent(UserInfo)} />
            </Switch>
        </div>
    </Router>
);

export default hot(module)(AppRouter);