import * as React from "react";

export class Image extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            selected: false,
        }
    }

    render() {
        const { image, onClick, children } = this.props;
        return (
            <React.Fragment>
                <div className={'image-container'}>
                    <img src={image.url} alt={image.description} onClick={onClick} />
                    {children}
                </div>
            </React.Fragment>
        )
    }
}

export default Image