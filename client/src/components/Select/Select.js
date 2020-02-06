import * as React from "react";
import ReactSelect from 'react-select';

export class Select extends React.PureComponent {
    render() {
        const { initialValue, options, onChange } = this.props;
        return (
            <ReactSelect
                className={'select-container'}
                isSearchable={false}
                value={initialValue}
                options={options}
                onChange={onChange}
            />
        )
    }
}

export default Select;