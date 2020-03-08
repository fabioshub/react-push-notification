import Notifications from './notifications/Notifications';
import Storage, { Options } from './notifications/Storage';
import PushNotification from './notifications/PushNotification';

const addNotification: (options: Options) => void = Storage.addNotification;
export { Notifications, PushNotification };
export default addNotification;
