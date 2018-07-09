import React from 'react';
import {render} from 'react-dom';
import Greeter from './app/Greeter';
import './main.css';  // import and apply style

let content = <div><h1>Webpack & React demo</h1><Greeter /></div>;
render(content, document.getElementById('root'));


