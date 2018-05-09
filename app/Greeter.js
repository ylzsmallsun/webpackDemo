import React, {Component} from 'react';
import messages from './messages.json';

class Greeter extends Component {
    render() {
        return (
            <div>
                {messages.greetingText}
            </div>
        );
    }
}
export default Greeter
