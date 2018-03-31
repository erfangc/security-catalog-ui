import * as React from 'react';
import {Route, Router, Switch} from 'react-router';
import history from './History';
import {Login} from './Login';
import {Dashboard} from './dashboard/Dashboard';
import {Callback} from './Callback';
import {Header} from './header/Header';
import {Sidebar} from './sidebar/Sidebar';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <br/>
                <div>
                    <Sidebar/>
                    <div style={{float: 'right', width: '90%'}}>
                        <Router history={history}>
                            <Switch>
                                <Route path={'/login'} component={Login}/>
                                <Route path="/callback" component={Callback}/>
                                <Route path={'/'} component={Dashboard}/>
                            </Switch>
                        </Router>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
