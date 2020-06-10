import React from 'react';

import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
    leftIcon: {
        marginRight: theme.spacing(1),
    },
    iconSmall: {
        fontSize: 20,
    },
    }));
  
function SendButtons(props) {
    const classes = useStyles();

    return (
        <Button 
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={() => props.onClick(props.value, props.image)}>
            <Icon>send</Icon>
        </Button>
    );
}



export default SendButtons;