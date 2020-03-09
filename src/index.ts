import Notifications from './notifications/Notifications';
import Storage, { Options } from './notifications/Storage';

const addNotification: (options: Options) => void = Storage.addNotification;
export { Notifications };
export default addNotification;
