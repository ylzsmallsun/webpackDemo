import React from 'react';
import {render} from 'react-dom';
import Greeter from './Charts';
import './main.css';  // import and apply style

let content = <div><h1>React & ECharts demo</h1><Charts /></div>;
render(content, document.getElementById('root'));


