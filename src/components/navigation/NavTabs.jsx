import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Styled from "styled-components";

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import { Router, Link, useNavigate,  createHistory, LocationProvider} from "@reach/router"

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function CenteredTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);


  const handleChange = (event, newValue) => {
      console.log(newValue)
    setValue(newValue);
  };



  return (

    <Paper className={classes.root}>
        
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Home" onClick={()=>{}}/>
        <Tab label="Find Work" />
        <Tab label="Find Talent" />
        <Tab label="Find Answers" />
        <Tab label="Find Us" />
        <Tab label={<LoginContainer><AccountCircleRoundedIcon/> Login </LoginContainer>}/>
      </Tabs>
    </Paper>
  );
}

const LoginContainer = Styled.div`
  display: flex;
  align-items: center;
`

