
export type Color = 'light' | 'darkblue' | 'red' | undefined;

const defaultDuration = 3000;

export type Options = {
    title: string,
    subtitle?: string,
    message?: string,
    theme?: Color,
    duration?: number,
    backgroundTop?: string,
    backgroundBottom?: string,
    colorTop?: string,
    colorBottom?: string,
    closeButton?: JSX.Element | string
}

export type Styling = {
    backgroundTop?: string,
    backgroundBottom?: string,
    colorTop?: string,
    colorBottom?: string
}

export interface PNotification {
    title: string;
    subtitle?: string;
    message?: string;
    theme?: Color;
    styling?: Styling;
    closeButton?: JSX.Element | string;
}

export class Notification {
    title: string;
    subtitle?: string;
    message?: string;
    theme?: Color;
    id: number;
    styling?: Styling;
    closeButton?: JSX.Element | string;
    constructor(op: PNotification) {
        this.title = op.title;
        this.subtitle = op.subtitle;
        this.message = op.message;
        this.theme = op.theme;
        this.id = Math.random();
        this.styling = op.styling;
        this.closeButton = op.closeButton;
    }
}

class Storage {
    Storage: Array<Notification> = [];
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

    addListener = (listener: (v: Array<Notification>) => void): void => {
        this.Listener = listener;
    };

    addNotification = (options: Options): void => {
        const { title, subtitle, message, theme, duration, backgroundBottom, backgroundTop, colorBottom, colorTop, closeButton } = options;
        const styling: Styling = {
            backgroundTop,
            backgroundBottom,
            colorTop, 
            colorBottom
        };
        const newNotification: Notification = new Notification({title, subtitle, message, theme, styling, closeButton});
        this.Storage.push(newNotification);
        this.setTimer(newNotification.id, duration || defaultDuration);
        this.Listener(this.Storage);
    };
}

export default new Storage();
