import React from 'react';
import Storage, { Notification } from './Storage';
import './Notification.css';
import PushNotification from './PushNotification';

type Position = 'top-left' | 'top-middle' | 'top-right' | 'bottom-left' | 'bottom-middle' | 'bottom-right';

interface Props {
  position?: Position;
}

interface State {
  value: Array<Notification>;
}

class Notifications extends React.Component<Props> {
  state: State = {
    value: [],
  };

  componentDidMount() {
    Storage.addListener((v: Array<Notification>): void => this.setState({ value: v }));
  }

  render(): JSX.Element {
    const { position } = this.props;
    const classN: string = `rpn-notification-holder ${position || 'top-middle'} supertest`;
    return <div className={classN}>
      {this.state.value.map((note: Notification): JSX.Element => {
        return <PushNotification closeNotification={Storage.popAndPush} id={note.id} theme={note.theme} title={note.title} subtitle={note.subtitle} message={note.message} />
      })}
    </div>
  }
};


export default Notifications;