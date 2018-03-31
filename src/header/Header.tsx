import * as React from 'react';
import {connect} from 'react-redux';
import {Icon} from 'semantic-ui-react';

interface StateProps {

}

function mapStateToProps(): StateProps {
    return {};
}

export const Header = connect(mapStateToProps)(
    class Header extends React.Component<StateProps> {
        render(): React.ReactNode {
            return (
                <div style={{height: '40px', marginBottom: '15px', backgroundColor: '#232f3e'}}>
                    <div style={{padding: '5px', paddingLeft: '15px'}}>
                        <Icon name={'industry'} color={'yellow'} size={'large'}/>
                        <b style={{color: '#fff'}}>Security Catalog</b>
                    </div>
                </div>
            );
        }
    }
);
