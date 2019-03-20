import React from 'react';
import Auxiliry from '../../hoc/Auxiliry';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = (props) => (
    <Auxiliry>
        <Toolbar />       
        <main className={classes.Content}>
            {props.children}
        </main>   
    </Auxiliry>
);

export default layout;
