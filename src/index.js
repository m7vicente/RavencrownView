import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import routes from './routes';

const App = () => (
    <BrowserRouter>
        <Switch>
            {routes.map(route => (
                <Route path={route.path} exact component={route.component} />
            ))}
        </Switch>
    </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
