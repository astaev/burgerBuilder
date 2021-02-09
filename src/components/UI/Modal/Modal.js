import React from 'react';

import Backdrop from '../Backdrop/Backdrop';
import classes from './Modal.css';
import Auxiliary from '../../../hoc/Auxiliar';

const modal = (props) => {
    return (
        <Auxiliary>
            <Backdrop className={classes.Backdrop} show={props.show} backdropClick={props.backdropClick}/>
            <div className={classes.Modal}
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                {props.children}
            </div>
        </Auxiliary>);
};

export default modal;