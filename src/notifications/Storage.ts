
export type Color = 'light' | 'darkblue' | 'red' | undefined;

const defaultDuration = 3000;

export class Notification {
    title: string;
    subtitle?: string;
    message?: string;
    theme?: Color;
    id: number;
    constructor(title: string, subtitle: string | undefined, message: string | undefined, theme: Color) {
        this.title = title;
        this.subtitle = subtitle;
        this.message = message;
        this.theme = theme;
        this.id = Math.random();
    }
}

export interface Options {
    title: string;
    subtitle?: string;
    message?: string;
    theme?: Color;
    duration?: number;
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
        const { title, subtitle, message, theme, duration } = options;
        const newNotification: Notification = new Notification(title, subtitle, message, theme);
        this.Storage.push(newNotification);
        this.setTimer(newNotification.id, duration || defaultDuration);
        this.Listener(this.Storage);
    };
}

export default new Storage();
