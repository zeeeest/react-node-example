import * as React from 'react';
import ReactModal from 'react-modal';
import Select from '../Select';
import { options } from '../../utils/selectOptions'
import { connect } from "react-redux";
import * as actions from "../../actions";

export class Modal extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: options.find(option => option.value === props.data.rate),
        }
    }

    handleSelectChange = (selectedOption) => {
        this.setState({selectedOption: selectedOption})
    };

    handleSave = () => {
        const updatedImage = {
            ...this.props.data,
            rate: this.state.selectedOption.value,
        };
        this.props.updateImage(updatedImage);
        this.props.handleClose();
    };

    render() {
        const {
            isOpen,
            data,
            handleClose,
            children
        } = this.props;
        const { selectedOption } = this.state;
        return (
            <ReactModal
                isOpen={isOpen}
                ariaHideApp={false}
                className="modal-container"
                overlayClassName="modal-overlay">
                {children}
                <div className={'text-field'}>Description: {data.description}</div>
                <div className={'text-field'}>Rate:
                    <Select initialValue={selectedOption} options={options} onChange={this.handleSelectChange} />
                </div>
                <div className={'modal-footer'}>
                    <div className={'button-section'}>
                        <button className={'button-save'} onClick={this.handleSave}>Save</button>
                        <button className={'button-cancel'} onClick={handleClose}>Cancel</button>
                    </div>
                </div>
            </ReactModal>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateImage: (payload) => dispatch(actions.images.updateImage(payload))
});

export default connect(
    null,
    mapDispatchToProps
)(Modal);