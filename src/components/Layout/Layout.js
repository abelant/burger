import React from 'react';
import Auxiliry from '../../hoc/Auxiliry';
import classes from './Layout.css';

const layout = (props) => (
    <Auxiliry>
        <div>Toolbar,SideDrawer,Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>   
    </Auxiliry>
);

export default layout;
