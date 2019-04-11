// Lib
import React, { PureComponent } from 'react';
import Typist from 'react-typist';
import 'styles/Typist.css';

interface HeaderProps {
  readonly textDelay: number;
}

interface HeaderStates {
  messageIndex: number;
  messages: string[];
}

export class Header extends PureComponent<HeaderProps, HeaderStates> {
  constructor(props: HeaderProps) {
    super(props);

    this.state = {
      messageIndex: 0,
      messages: [
        'Welcome to CryptoKoon!',
        'Try using Hash!',
        'Or how about Encryption?',
        'Check out my GitHub!',
        '...',
        'Have fun :)',
      ],
    };
  }

  public handleMessageUpdate = () => {
    this.setState(ps => ({
      messageIndex: (ps.messageIndex + 1) % ps.messages.length,
    }));
  };

  render() {
    const { messageIndex, messages } = this.state;
    const currentMsg = messages[messageIndex];

    return (
      <div className="d-flex flex-column mt-5">
        <h1 className="text-center mb-5 text-success">CryptoKoon</h1>
        <Typist
          key={messageIndex}
          avgTypingDelay={this.props.textDelay}
          className="text-center"
          onTypingDone={this.handleMessageUpdate}
        >
          <span>{currentMsg}</span>
          <Typist.Delay ms={1600} />
          <Typist.Backspace count={currentMsg.length} />
          <Typist.Delay ms={800} />
        </Typist>
      </div>
    );
  }
}
