import * as React from 'react';
import {Button ,Form, Divider, Dropdown, Radio, DropdownItemProps} from 'semantic-ui-react';

interface State {
    idType: string;
    id: string;
    description: string;
    currency: string;
    assetClass: string;
    assetType: string;
    cusip: string;
    sedol: string;
    ticker: string;
    isin: string;
}

interface Props {
    onSubmit: (state: State) => void
}

export class BasicInfoCreator extends React.Component<Props, State> {

    changeIdType = (e: any, {value: idType}: any) => this.setState(() => ({idType}));

    state = {
        currency: 'USD',
        id: '',
        description: '',
        idType: 'sedol',
        assetClass: 'Equity',
        assetType: 'Stock',
        cusip: '',
        sedol: '',
        ticker: '',
        isin: ''
    };

    render(): React.ReactNode {
        const {currency, assetClass, assetType, id, idType, description, cusip, sedol, ticker, isin} = this.state;
        const {onSubmit} = this.props;

        const currencyOptions: DropdownItemProps[] = [
            {
                key: 'USD', value: 'USD', text: 'USD', active: currency === 'USD'
            },
            {
                key: 'JPY', value: 'JPY', text: 'JPY', active: currency === 'JPY'
            },
            {
                key: 'EUR', value: 'EUR', text: 'EUR', active: currency === 'EUR'
            }
        ];

        return (
            <Form>
                <Divider horizontal> Basic Info </Divider>
                <Form.Group>
                    <Form.Field width={6}>
                        <label>Identifier</label>
                        <input
                            value={id}
                            placeholder='ex: AAPL, US0378331005'
                            onChange={({currentTarget: {value}}) => this.setState(() => ({id: value}))}
                        />
                    </Form.Field>
                    <Form.Field width={10}>
                        <label>Description</label>
                        <input
                            value={description}
                            placeholder='ex: Apple Inc.'
                            onChange={({currentTarget: {value}}) => this.setState(() => ({description: value}))}
                        />
                    </Form.Field>
                </Form.Group>
                <Form.Group inline>
                    <label>Identifier Type</label>
                    <Form.Field control={Radio} label='Ticker' value='ticker' checked={idType === 'ticker'}
                                onChange={this.changeIdType}
                    />
                    <Form.Field control={Radio} label='CUSIP' value='cusip' checked={idType === 'cusip'}
                                onChange={this.changeIdType}
                    />
                    <Form.Field control={Radio} label='SEDOL' value='sedol' checked={idType === 'sedol'}
                                onChange={this.changeIdType}
                    />
                    <Form.Field control={Radio} label='ISIN' value='isin' checked={idType === 'isin'}
                                onChange={this.changeIdType}
                    />
                </Form.Group>
                <Form.Group inline>
                    <Form.Field>
                        <label>Asset Class</label>
                        <input placeholder='' value={assetClass}
                               onChange={({currentTarget: {value}}) => this.setState(() => ({assetClass: value}))}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Asset Type</label>
                        <input placeholder='' value={assetType}
                               onChange={({currentTarget: {value}}) => this.setState(() => ({assetType: value}))}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Currency</label>
                        <Dropdown value={'USD'} options={currencyOptions} search selection/>
                    </Form.Field>
                </Form.Group>
                <Divider horizontal> Other Identifiers </Divider>
                <Form.Group>
                    <Form.Field width={4}>
                        <label>CUSIP</label>
                        <input placeholder=''
                               value={cusip}
                               onChange={({currentTarget: {value}}) => this.setState(() => ({cusip: value}))}
                        />
                    </Form.Field>
                    <Form.Field width={4}>
                        <label>ISIN</label>
                        <input placeholder=''
                               value={sedol}
                               onChange={({currentTarget: {value}}) => this.setState(() => ({sedol: value}))}
                        />
                    </Form.Field>
                    <Form.Field width={4}>
                        <label>Ticker</label>
                        <input placeholder=''
                               value={isin}
                               onChange={({currentTarget: {value}}) => this.setState(() => ({isin: value}))}
                        />
                    </Form.Field>
                    <Form.Field width={4}>
                        <label>SEDOL</label>
                        <input placeholder=''
                               value={ticker}
                               onChange={({currentTarget: {value}}) => this.setState(() => ({ticker: value}))}
                        />
                    </Form.Field>
                </Form.Group>
                <Button content={'Next'} color={'green'} onClick={()=>onSubmit(this.state)}/>
            </Form>
        );
    }
}