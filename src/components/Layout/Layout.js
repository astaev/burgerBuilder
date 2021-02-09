import React, { Component } from 'react';

import Auxiliary from '../../hoc/Auxiliar';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SiteDrawer from '../Navigation/SiteDrawer/SiteDrawer';

export default class Layout extends Component {
    state = {
        showSiteDrawer: false
    };

    sideDrawerClosedHandler = () => {
        this.setState({ showSiteDrawer: false });
    }

    sideDrawerOpenedHandler = () => {
        this.setState((prevState) => {
            return { showSiteDrawer: !prevState.showSiteDrawer };
        })
    }

    render() {
        return (
            <Auxiliary>
                <Toolbar drawerToggleClicked={this.sideDrawerOpenedHandler} />
                <SiteDrawer closed={this.sideDrawerClosedHandler} open={this.state.showSiteDrawer}></SiteDrawer>
                <main className={classes.content}>
                    {this.props.children}
                </main>
            </Auxiliary>
        );
    }
}
