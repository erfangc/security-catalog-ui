import * as React from 'react';
import {connect} from 'react-redux';
import {auth} from './index';

interface StateProps {

}

function mapStateToProps(): StateProps {
    return {};
}

export const Callback = connect(mapStateToProps)(
    class Callback extends React.Component<StateProps> {

        componentDidMount(): void {
            auth.handleAuthentication();
        }

        render(): React.ReactNode {
            return <p>Authenticating ...</p>;
        }
    }
);
