import Notifications from './notifications/Notifications';
import Storage, { Options } from './notifications/Storage';

/**
* Add a new notification. 
* Must pass an object with the params to the function.
*
 * @param {string} options.title - Title of the push notification.
 * @param {string} [options.subtitle] - Subtitle of the push notification.
 * @param {string} [options.message] - Message of the push notification.
 * @param {('darkblue'|'red'|'light')} [options.theme=undefined] - Theme of the push notification.
 * @param {number} [options.duration=3000] - duration of the push notification in ms.
 * @param {string} [options.backgroundTop=undefined] - Background color of the top container of push notification.
 * @param {string} [options.backgroundBottom=undefined] - Background color of the bottom container of push notification.
 * @param {string} [options.colorTop=undefined] - Color of the top text of push notification.
 * @param {string} [options.colorBottom=undefined] - Color of the bottom text of push notification.
 * @param {(string|JSX.Element)} [options.closeButton="close"] - Color of the bottom text of push notification.
 *
*/
const addNotification: (options: Options) => void = Storage.addNotification;
export { Notifications };
export default addNotification;
