import * as React from 'react';
import {connect} from 'react-redux';
import {Button, Container, Header, Icon} from 'semantic-ui-react';
import {BasicInfoCreator, BasicInfoState} from '../creators/BasicInforCreator';
import axios from 'axios';

interface StateProps {

}

function mapStateToProps(): StateProps {
    return {};
}

interface State {
    componentToRender: 'success' | 'failed' | 'editing'
}

export const Edit = connect(mapStateToProps)(
    class Edit extends React.Component<StateProps, State> {

        constructor(props: StateProps, context: any) {
            super(props, context);
            this.state = {
                componentToRender: 'editing'
            };
        }

        submit = (data: BasicInfoState) => {
            axios
                .post(`http://localhost:8080/api/private/save-security`, data)
                .then(() => this.setState(() => ({componentToRender: 'success'})))
                .catch(() => this.setState(() => ({componentToRender: 'failed'})));
        };

        render(): React.ReactNode {
            const {componentToRender} = this.state;
            return (
                <Container>
                    {
                        componentToRender === 'success' ?
                            <Success onBack={() => this.setState(() => ({componentToRender: 'editing'}))}/>
                            :
                            componentToRender === 'failed' ?
                                <Failed onBack={() => this.setState(() => ({componentToRender: 'editing'}))}/>
                                :
                                <BasicInfoCreator onSubmit={this.submit}/>
                    }
                </Container>
            );
        }
    }
);

class Success extends React.Component<{onBack: () => void}> {
    render(): React.ReactNode {
        const {onBack} = this.props;
        return (
            <div>
                <Header as='h2' icon textAlign='center'>
                    <Icon name='checkmark' circular color={'green'}/>
                    <Header.Content>Success!</Header.Content>
                    <Button content={'Back'} color={'teal'} basic onClick={onBack}/>
                </Header>
            </div>
        );
    }
}

class Failed extends React.Component<{onBack: () => void}> {
    render(): React.ReactNode {
        const {onBack} = this.props;
        return (
            <div>
                <Header as='h2' icon textAlign='center'>
                    <Icon name='warning sign' circular color={'red'}/>
                    <Header.Content>Failed</Header.Content>
                    <Button content={'Back'} color={'teal'} basic onClick={onBack}/>
                </Header>
            </div>
        );
    }
}