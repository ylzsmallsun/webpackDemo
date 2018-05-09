import React, {Component} from 'react';
import messages from './messages.json';

import styles from './Greeter.css';

class Greeter extends Component {
    render() {
        return (
            <div className={styles.message}>
                {messages.greetingText}
                {/* below text is to test hot update*/}
                <span>aaasccca</span>
            </div>
        );
    }
}
export default Greeter
