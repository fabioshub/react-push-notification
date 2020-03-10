
[![npm version](https://badgen.net/npm/v/react-push-notification)](https://www.npmjs.com/package/react-notifications-component)
# React-push-notification

Easy, Type safe & Lightweight push notification library for React.js.
Writtin in TypeScript & compiled to JavaScript for robust code.

![](https://i.imgur.com/SorfHNa.gif)



### Install

```bash
yarn add react-push-notification
```
or 
```bash
npm i react-push-notification
```

### Set-up

Add the Notifications component to the top of your React.js project. 
This is probably index.js or app.js

```jsx
import { Notifications } from 'react-push-notification';

const App = () => {
    return (
      <div className="app">
        // Top of DOM tree
        <Notifications />
        <div className="row">
          <div className="content">
           Hello world.
          </div>
        </div>
      </div>
    );
  }
};

export default App;
```

### Usage

import the addNotification function and call it.

```jsx
import addNotification from 'react-push-notification';

const Page = () => {

    const buttonClick = () => {
        addNotification({
            title: 'Warning',
            subtitle: 'This is a subtitle',
            message: 'This is a very long message',
            theme: 'darkblue'
        });
    };

    return (
      <div className="page">
          <button onClick={buttonClick} className="button">
           Hello world.
          </button>
      </div>
    );
  }
};

export default Page;
```

## <Notifications /> Props


| Property                               | Description                                   |
| ---------------------------------- | ------------------------------------------------------------------ |
| position `string`            | One of `top-left`, `top-middle`, `top-right`, `bottom-left`, `bottom-middle`, `bottom-right`. Default: `top-left`    |



## addNotification({Options}) argument properties

The addNaddNotification() function has the following function type:

```tsx

const options = {
    title: 'title',
    subtitle: 'subtitle', //optional
    message: 'message', //optional
    theme: 'red', //optional, default: undefined
    duration: 3000, //optional, default: 5000,
    backgroundTop: 'green', //optional, background color of top container.
    backgroundBottom: 'darkgreen', //optional, background color of bottom container.
    colorTop: 'green', //optional, font color of top container.
    colorBottom: 'darkgreen', //optional, font color of bottom container.
    closeButton: 'Go away' //optional, text or html/jsx element for close text. Default: Close

};

const addNaddNotification: (options: Options) => void;

```

<img align="right" src="https://imgur.com/YpzhAzC.png" alt="react-push-notification" />


The addNotification() function takes an object as argument with the follow properties:


| Property                           | Description                                                        |
| ---------------------------------- | ------------------------------------------------------------------ |
| title `string`                     | Required. Title of the push notification                           |
| subtitle `string`                  | Optional. Subtitle of the push notification                        |
| message `string`                   | Optional. Message of the push notification                         |
| theme `string`                     | Optional. One of `darkblue`, `red`, `light`, `undefined`. Default: `undefined`   |
| duration `number`                  | Optional. Duration of the push notification in ms. Default: 3000   |
| backgroundTop `string`             | Optional. background color of top container.                       |
| backgroundBottom `string`          | Optional. background color of bottom container.                    |
| colorTop `string`                  | Optional. font color of top container.                             |
| colorBottom `string`               | Optional. font color of bottom container.                          |
| closeButton `string`               | Optional. text or html/jsx element for close text. Default: `Close`                         |

The custom background or font colors will always override a chosen theme.