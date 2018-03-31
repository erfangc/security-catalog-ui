import * as React from 'react';
import {connect} from 'react-redux';
import {Menu, Icon} from 'semantic-ui-react';
import './Sidebar.css';
import history from '../History';

interface StateProps {

}

function mapStateToProps(): StateProps {
    return {};
}

export const Sidebar = connect(mapStateToProps)(
    class Sidebar extends React.Component<StateProps> {
        render(): React.ReactNode {
            return (
                <div style={{width: '10%', display: 'inline-block'}}>
                    <Menu vertical className={'aw-side-bar'}>
                        <Menu.Item onClick={() => history.push(`/`)}>
                            Dashboard <Icon name={'dashboard'}/>
                        </Menu.Item>
                        <Menu.Item onClick={() => history.push(`/browse`)}>
                            Browse <Icon name={'browser'}/>
                        </Menu.Item>
                        <Menu.Item onClick={() => history.push(`/edit`)}>
                            Edit <Icon name={'write'}/>
                        </Menu.Item>
                    </Menu>
                </div>
            );
        }
    }
);
