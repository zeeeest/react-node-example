import * as React from "react";
import Image from "../../components/Image";
import Modal from "../../components/Modal";
import Info from "../../components/Info/Info";
import { connect } from "react-redux";
import * as actions from '../../actions'



export class ImagesLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedImage: null,
        }
    }

    componentDidMount() {
        this.props.loadImages();
    }

    handleSelectedImage = (image) => {
        this.setState({selectedImage: image});
    };

    handleModalClose() {
        this.setState({selectedImage: null})
    }

    render() {
        const { selectedImage } = this.state;
        const { images } = this.props;
        return (
            <div className={'wrapper'}>
                <h1>Image Gallery</h1>
                <div className={'container'}>
                    {images.map((image) =>  (
                        <div key={image.id} className={'image-wrapper'}>
                            <Image key={image.id} image={image} onClick={() => this.handleSelectedImage(image)}>
                                <Info key={image.id} image={image} />
                            </Image>
                        </div>)
                    )}
                </div>
                {selectedImage ?
                (<Modal
                    isOpen={!!selectedImage}
                    data={selectedImage}
                    handleClose={() => this.handleModalClose()}>
                    <Image image={selectedImage} />
                </Modal>) : null}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    images: state.images.items,
});

const mapDispatchToProps = dispatch => ({
    loadImages: () => dispatch(actions.images.loadImages())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ImagesLayout);