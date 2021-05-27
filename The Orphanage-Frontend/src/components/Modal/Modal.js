import React, { useEffect } from "react";
import "./Modal.css";
import { makeStyles } from '@material-ui/core/styles';

import { Modal as ModalUI } from '@material-ui/core';
import DonateMoney from "../DonateMoney/DonateMoney";

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        padding: theme.spacing(1),
        alignItems: 'center',
        justifyContent: 'center',
        height: '60%',
        marginTop: '10%'
    },
}));
const Modal = (props) => {
    const classes = useStyles();
    return (
        <ModalUI
            onBackdropClick={() => props.closeModal()}
            open={props.openModal}
            aria-labelledby="server-modal-title"
            aria-describedby="server-modal-description"
            className={classes.modal}
        >
            <div className="content">
                <DonateMoney />
            </div>
        </ModalUI>

    );

}

export default Modal;
