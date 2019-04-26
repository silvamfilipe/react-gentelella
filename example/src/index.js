import React from 'react';
import ReactDOM from 'react-dom';
import App from './scenes/app';
import * as serviceWorker from './serviceWorker';

import './index.css';

import 'pnotify/dist/pnotify.css';
import 'pnotify/dist/pnotify.buttons.css';
import 'pnotify/dist/pnotify.mobile.css';
import 'pnotify/dist/pnotify.nonblock.css';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
