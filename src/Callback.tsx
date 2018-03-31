import * as React from 'react';
import {connect} from 'react-redux';
import {auth} from './index';
import {Container} from 'semantic-ui-react';

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
            return (
                <Container>
                    <p>Authenticating ...</p>
                </Container>
            );
        }
    }
);
