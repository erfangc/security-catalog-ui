import * as React from 'react';
import {connect} from 'react-redux';
import {auth} from './index';
import history from './History';
import {Container} from 'semantic-ui-react';
import {BasicInfoCreator} from './creators/BasicInforCreator';

interface StateProps {

}

function mapStateToProps(): StateProps {
    return {};
}

export const Dashboard = connect(mapStateToProps)(
    class Dashboard extends React.Component<StateProps> {
        componentDidMount(): void {
            if (!auth.isAuthenticated()) {
                history.push('/login');
            }
        }

        submit = () => {
        };

        render(): React.ReactNode {
            return (
                <Container>
                    <BasicInfoCreator onSubmit={this.submit}/>
                </Container>
            );
        }
    }
);

