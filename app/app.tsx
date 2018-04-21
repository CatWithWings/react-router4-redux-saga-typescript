import "./style.scss";

import  * as React from 'react';
import  * as ReactDOM from 'react-dom';

import RouterConfig from './router';

ReactDOM.render(
    <RouterConfig />,
    document.getElementById('container') as HTMLElement
);