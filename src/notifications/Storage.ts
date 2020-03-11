
export type Color = 'light' | 'darkblue' | 'red' | undefined;

const defaultDuration = 3000;

type voidFunc = () => void;
export type eventFunc = (e: any) => void;

export type onClickType = voidFunc | eventFunc | undefined;

export type Options = {
    title: string,
    subtitle?: string,
    message?: string,
    onClick?: onClickType,
    theme?: Color,
    duration?: number,
    backgroundTop?: string,
    backgroundBottom?: string,
    colorTop?: string,
    colorBottom?: string,
    closeButton?: JSX.Element | string,
    native?: boolean,
    icon?: string,
    vibrate?: number | number[],
    silent?: boolean
}

export type Styling = {
    backgroundTop?: string,
    backgroundBottom?: string,
    colorTop?: string,
    colorBottom?: string
}

export interface PushNotificationObject {
    title: string;
    subtitle?: string;
    message?: string;
    theme?: Color;
    styling?: Styling;
    closeButton?: JSX.Element | string;
    onClick?: onClickType;
}

export class PushNotification {
    title: string;
    subtitle?: string;
    message?: string;
    theme?: Color;
    id: number;
    styling?: Styling;
    closeButton?: JSX.Element | string;
    onClick?: onClickType;
    constructor(op: PushNotificationObject) {
        this.title = op.title;
        this.subtitle = op.subtitle;
        this.message = op.message;
        this.theme = op.theme;
        this.id = Math.random();
        this.styling = op.styling;
        this.closeButton = op.closeButton;
        this.onClick = op.onClick;
    }
}

class Storage {
    Storage: Array<PushNotification> = [];
    Listener: (storage: any) => void = () => this.Storage;

    popAndPush = (NotificationId: number) => {
        let i: number = 0;
        while (i < this.Storage.length) {
            if (this.Storage[i].id === NotificationId) {
                this.Storage.splice(i, 1);
            }
            else {
                ++i;
            }
        }
        this.Listener(this.Storage);
    };

    setTimer = (NotificationId: number, duration: number) => {
        setTimeout(() => this.popAndPush(NotificationId), duration);
    };

    addListener = (listener: (v: Array<PushNotification>) => void): void => {
        this.Listener = listener;
    };

    addNativeNotification = async (options: Options): Promise<void> => {
        const { title, subtitle, message, duration, icon, vibrate, silent, onClick } = options;
        if (Notification.permission === 'default' || Notification.permission === 'denied') {
            await Notification.requestPermission();
        }
        if (Notification.permission === 'granted') {
            const not: Notification = new Notification(title, {
                body: message,
                data: subtitle,
                icon,
                vibrate,
                silent
            });
            not.onclick = onClick || null;
            setTimeout(not.close.bind(not), duration || defaultDuration);
        }
    };

    addWebNotification = (options: Options): void => {
        const { title, subtitle, message, theme, duration, backgroundBottom, backgroundTop, colorBottom, colorTop, closeButton, onClick } = options;
        const styling: Styling = {
            backgroundTop,
            backgroundBottom,
            colorTop,
            colorBottom
        };
        const newNotification: PushNotification = new PushNotification({ title, subtitle, message, theme, styling, closeButton, onClick });
        this.Storage.push(newNotification);
        this.setTimer(newNotification.id, duration || defaultDuration);
        this.Listener(this.Storage);
    };

    addNotification = async (options: Options): Promise<void> => {
        const { native } = options;
        if (native) {
            return this.addNativeNotification(options);
        }
        return this.addWebNotification(options);

    };
}

export default new Storage();
