// Lib
import React, { PureComponent } from 'react';
import Typist from 'react-typist';
import 'styles/Typist.css';

interface HeaderProps {
  readonly textDelay: number;
}

interface HeaderStates {
  messageIndex?: number;
  messages: string[];
}

export class Header extends PureComponent<HeaderProps, HeaderStates> {
  constructor(props: HeaderProps) {
    super(props);

    this.state = {
      messageIndex: 0,
      messages: [
        'Who am i',
        'uhm... really?',
        'Hello world',
        'visit shawnkoon',
        'I am blinking',
        'something special',
        'Please notice me',
      ],
    };
  }

  render() {
    return (
      <div className="d-flex flex-column">
        <h1>CryptoKoon</h1>
        <Typist avgTypingSpeed={200} startDelay={2000}>
          <span>hi my name is shawn</span>
        </Typist>
      </div>
    );
  }
}
