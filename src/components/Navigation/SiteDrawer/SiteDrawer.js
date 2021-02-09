import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SiteDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Auxiliary from '../../../hoc/Auxiliar';

const siteDrawer = (props) => {
    let attachedClasses = [classes.SiteDrawer, props.open ? classes.Open : classes.Close];

    return (
        <Auxiliary>
            <Backdrop show={props.open} backdropClick={props.closed} />
            <div className={attachedClasses.join(' ')} >
                <div className={classes.Logo}>
                    <Logo></Logo>
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Auxiliary>
    );
}

export default siteDrawer;