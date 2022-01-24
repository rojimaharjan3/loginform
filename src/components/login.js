import React from "react";
import {Avatar, Button, Grid , Paper , TextField , Checkbox, Link, Typography  } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import FormControlLabel from '@material-ui/core/FormControlLabel';


const paperStyle = {padding: 20 , height:'75vh' , width:260 , margin: '20px auto'}
const avatarStyle={backgroundColor:'#008060'}
const btnStyle={margin:'10px 0'  , backgroundColor:"#efef60"}

const Login = () => {
    return(
    <Grid>
        <Paper elevation={6} style={paperStyle}>
            <Grid align='center'>
                <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                <h2>Sign In</h2>
            </Grid>
            <TextField  label="Username"  placeholder="Enter your username" required fullWidth/>
            <TextField  label="Password"  placeholder="Enter your password" type="password" required fullWidth/>
            
                <FormControlLabel 
                control={
                    <Checkbox 

                        color="primary"
                    />
                } 
                label="Remember me" />
               
            
            <Button type="submit" variant="contained" fullWidth style={btnStyle}>Sign In</Button>
            <Grid  style={{margin:'30px 0' , textAlign:'center'}}>
            <Typography>
            <Link href="#" underline="none">
                {'Forgot password ?'}
            </Link>
            </Typography>
            
            <Typography  style={{margin:'10px 0'}}>
                Not yet member?
                <Typography>
                    <Link href="#" underline="none">
                        {'Sign Up'}
                    </Link>
                </Typography>
            </Typography>
            </Grid>
        </Paper>    

    </Grid>
       
       
    )
}
export default Login;