import * as React from "react";

export const InfoItem = (props) => {
    return (
        <div className={'info-item'}>
            {props.text}
        </div>
    )
};

export default InfoItem;