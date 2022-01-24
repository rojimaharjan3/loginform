import React from 'react'
import {Avatar, Grid , Paper, TextField, Typography , Link, Button} from '@material-ui/core'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
const paperStyle = {padding:20 , height :'80vh', width:260 , margin:'40px auto'}
const avatarStyle={backgroundColor:'#008060'}
const headerStyle={margin: 0 }
const Signup = () => {
    return(
        <Grid>
            <Paper elevation = {6} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><AccountCircleOutlinedIcon/></Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant="caption">Please fill this form to create an account</Typography>
                </Grid>
                <TextField label="Firstname" placeholder='Enter your firstname' fullWidth required/>

                <TextField label="Lastname" placeholder='Enter your lastname' fullWidth required/>
                <TextField label="Email" placeholder='Enter your email address' fullWidth required/>
                
                <TextField label="Password(6 or more characters" placeholder='Enter your password' type="password" fullWidth required/>
                <TextField label="Confirm password" placeholder='Enter your password again' type="password" fullWidth required/>
                
                {/* <FormControlLabel
                control={
                    <Checkbox color="primary"
                />
                }
                label="I accept the Terms of use and privacy policy"/> */}

                <label>
                    <input type="checkbox" style={{margin:'10px 2px'}}/> 
                    <Typography variant="caption">I accept the 
                        <Link href="#" underline="none">{'Terms of use'}</Link>
                        and 
                        <Link href="#" underline="none">{' Privacy Policy'}</Link>
                    </Typography>
                </label>

                <Button type="submit" color="primary" variant="contained" fullWidth style={{margin:'10px 0'}}>Sign Up</Button>
                <Typography>
                    Already have an account ?
                    <Link href="#" underline="none">
                        {'Login Here'}
                    </Link>
                </Typography>
           </Paper>

        </Grid>
        
    )
}

export default Signup