import * as React from 'react';
import {connect} from 'react-redux';
import {Icon} from 'semantic-ui-react';
import {auth} from '../index';

interface StateProps {

}

function mapStateToProps(): StateProps {
    return {};
}

export const Header = connect(mapStateToProps)(
    class Header extends React.Component<StateProps> {
        render(): React.ReactNode {
            return (
                <div style={{height: '40px', marginBottom: '15px', backgroundColor: '#232f3e', position: 'relative'}}>
                    <div style={{padding: '5px', paddingLeft: '15px', paddingTop: '10px'}}>
                        <Icon name={'industry'} color={'yellow'} size={'large'}/>
                        <b style={{color: '#fff'}}>Security Catalog</b>
                    </div>

                    <a
                        style={{position: 'absolute', top: '10px', right: '10px', color: '#fff', cursor: 'pointer'}}
                        onClick={() => auth.logout()}
                    >
                        Log Out
                    </a>

                </div>
            );
        }
    }
);
