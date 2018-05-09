import React, {Component} from 'react';
import messages from './messages.json';

import styles from './Greeter.css';

class Greeter extends Component {
    render() {
        return (
            <div className={styles.message}>
                {messages.greetingText}
            </div>
        );
    }
}
export default Greeter
