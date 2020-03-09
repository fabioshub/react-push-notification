import React from 'react';
import { Color, Styling } from './Storage';

interface Props {
    title: string;
    id: number;
    message?: string;
    subtitle?: string;
    theme?: Color;
    styling?: Styling;
    closeButton?: JSX.Element | string;
    closeNotification: (id: number) => void;
}

type Style = {
    backgroundColor?: string,
    color?: string
}

const PushNotification = (props: Props): JSX.Element => {
    const { title, subtitle, message, theme, id, closeNotification, styling, closeButton } = props;
    let topStyling: Style = {};
    let bottomStyling: Style = {};
    if (styling) {
        topStyling.backgroundColor = styling.backgroundTop;
        topStyling.color = styling.colorTop;
        bottomStyling.backgroundColor = styling.backgroundBottom;
        bottomStyling.color = styling.colorBottom;
    }
    return <div className={`rpn-notification-card ${theme}`}>
        <div className={`rpn-notification-card-top ${theme}`} style={Object.keys(topStyling).length ? topStyling : undefined}>
            <span>{title}</span>
            <span className={`rpn-notification-card-close ${theme}`} onClick={() => closeNotification(id)}>{closeButton || 'close'}</span>
        </div>
        <div className={`rpn-notification-card-bottom ${theme}`} style={Object.keys(bottomStyling).length ? bottomStyling : undefined}>
            <span className='subtitle'>{subtitle}</span>
            <span className='message'>{message}</span>

        </div>
    </div>;
}

export default PushNotification;