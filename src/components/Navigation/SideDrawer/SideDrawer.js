import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import BackdropSD from '../../UI/Backdrop/BackdropSD/BackdropSD';
import Auxiliry from '../../../hoc/Auxiliry/Auxiliry';
const sideDrawer = (props) =>{
    
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if(props.open){
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    
    return(
        <Auxiliry>
            <BackdropSD show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Auxiliry>
    );
}

export default sideDrawer;