import React from 'react';
import classes from './BackdropSD.css';

const backdropSD = (props) => (
    props.show ?  <div className={classes.BackdropSD} onClick={props.clicked}></div>    : null
);

export default backdropSD;