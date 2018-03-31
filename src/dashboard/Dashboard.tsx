import * as React from 'react';
import {connect} from 'react-redux';
import {Container} from 'semantic-ui-react';

interface StateProps {

}

function mapStateToProps(): StateProps {
    return {};
}

export const Dashboard = connect(mapStateToProps)(
    class Dashboard extends React.Component<StateProps> {
        render(): React.ReactNode {
            return <Container><p>Not implemented</p></Container>;
        }
    }
);
