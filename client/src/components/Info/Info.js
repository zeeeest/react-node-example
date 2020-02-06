import * as React from "react";
import  InfoItem  from './InfoItem'

export const Info = (props) => {
    const { title, date, rate } = props.image;
    return (
        <div className={'info-container'}>
            <div className={'info-title'}>
                <InfoItem text={title} />
            </div>
            <div className={'info-content'}>
                <InfoItem text={date} />
                <InfoItem text={`Rate: ${rate}`} />
            </div>
        </div>
    )
};

export default Info;