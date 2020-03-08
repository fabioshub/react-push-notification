import React from 'react';
import { Color } from './Storage';

interface Props {
    title: string;
    id: number;
    message?: string;
    subtitle?: string;
    theme?: Color;
    closeNotification: (id: number) => void;
}

const PushNotification = (props: Props): JSX.Element => {
    const { title, subtitle, message, theme, id, closeNotification } = props;

    return <div className={`rpn-notification-card ${theme}`}>
        <div className={`rpn-notification-card-top ${theme}`}>
            <span>{title}</span>
            <span className={`rpn-notification-card-close ${theme}`} onClick={() => closeNotification(id)}>close</span>
        </div>
        <div className={`rpn-notification-card-bottom ${theme}`}>
            <span className='subtitle'>{subtitle}</span>
            <span className='message'>{message}</span>

        </div>
    </div>;
}

export default PushNotification;