import React, { Component } from 'react';
import Auxiliry from '../../hoc/Auxiliry';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: true
    }
    sideDrawerClosedHandler = () =>{
        this.setState({showSideDrawer:false});
    }
    sideDrawerToggleHandler = () =>{
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer}
        });
    }

    render(){
        return(
        <Auxiliry>
            <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>    
            <SideDrawer 
                closed={this.sideDrawerClosedHandler}  
                open={this.state.showSideDrawer}/>  
            <main className={classes.Content}>
                {this.props.children}
            </main>   
        </Auxiliry>
        )
    }
}

export default Layout;
