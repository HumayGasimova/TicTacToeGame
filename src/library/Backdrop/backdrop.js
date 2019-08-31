/**
* Libraries
*/

import React from 'react';

/**
* Styles
*/

import './backdrop.scss';

/**
* backdrop component definition and export
*/

const backdrop = (props) => (
    props.show ? <div onClick={props.onClick} className = "backdrop"/> : null
);

export default backdrop;
