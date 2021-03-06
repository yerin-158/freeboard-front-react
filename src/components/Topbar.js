import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Grid} from "@material-ui/core";
import {logoutApi} from "../store/api/userApi";

import {useHistory} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function Topbar({title, accountId}) {
    const classes = useStyles();
    const history = useHistory();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        {title}
                    </Typography>
                    {typeof accountId != 'undefined' && accountId != null ?
                        <Button onClick={async () => {
                            await logoutApi();
                            history.push("/")
                        }} variant="contained" size="medium" color="primary" >로그아웃</Button>

                        :
                        <Button variant="contained" size="medium" color="primary" onClick={() => history.push("/")}>로그인</Button>
                    }
                </Toolbar>
            </AppBar>
        </div>
    );
}
