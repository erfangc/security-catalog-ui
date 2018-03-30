import * as React from 'react';
import {Route, Router, Switch} from 'react-router';
import history from './History';
import {Login} from './Login';
import {Dashboard} from './Dashboard';
import {Callback} from './Callback';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Router history={history}>
                    <Switch>
                        <Route path={'/login'} component={Login}/>
                        <Route path="/callback" component={Callback}/>
                        <Route path={'/'} component={Dashboard}/>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
