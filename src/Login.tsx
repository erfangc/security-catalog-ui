import * as React from 'react';
import {connect} from 'react-redux';
import {auth} from './index';

interface StateProps {

}

function mapStateToProps(): StateProps {
    return {};
}

export const Login = connect(mapStateToProps)(
    class Login extends React.Component<StateProps> {

        login = () => {
            auth.login();
        };

        render(): React.ReactNode {
            return <p>You are not logged in, click <a onClick={this.login}>here</a> to login</p>;
        }
    }
);
