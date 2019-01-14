import React from 'react';

const trigger = e => {
    const event = new CustomEvent('onClickMenuItem', {detail: e.target});
    document.dispatchEvent(event);
};

const MenuItem = ({ children }) => (<li onClick={trigger}>{ children }</li>);

export default MenuItem;
