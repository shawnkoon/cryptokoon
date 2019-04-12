// Lib
import React, { PureComponent } from 'react';
import Typist from 'react-typist';
import 'styles/Typist.css';

// App
import logo from 'images/logo.png';
import 'styles/Header.scss';

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
        'Try using a Hash!',
        'Or how about an Encryption?',
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
      <div className="header">
        <img src={logo} alt="cryptokoon-logo" className="logo" />
        <Typist
          key={messageIndex}
          avgTypingDelay={this.props.textDelay}
          className="text-center"
          onTypingDone={this.handleMessageUpdate}
        >
          <span className="text">{currentMsg}</span>
          <Typist.Delay ms={1600} />
          <Typist.Backspace count={currentMsg.length} />
          <Typist.Delay ms={800} />
        </Typist>
      </div>
    );
  }
}
