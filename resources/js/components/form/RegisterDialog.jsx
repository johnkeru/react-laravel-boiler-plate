import { Grid, IconButton, Typography } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import { Formik, Form } from 'formik';
import React, { useState } from 'react';
import InputField from '../utils/InputField';
import {HighlightOffOutlined} from '@mui/icons-material';
import {Button} from '@mui/material'

export default function RegisterDialog({handleCloseAll}) {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleCloseRegisterAndLogin = () => {
    setOpen(false);
    handleCloseAll();
  }

  const handleSubmit = (values) => {
    console.log(values)
  }

  return (
    <div>
      <Typography variant='overline' sx={{textTransform: 'capitalize', cursor: 'pointer', color: 'blue'}} onClick={handleClickOpen}>Sign Up</Typography>
      
      <Dialog open={open} 
        onClose={handleClose}
        fullWidth={true}
        maxWidth={'xs'}
      >
          <IconButton sx={{position: 'absolute', top: 1, right: 1}} onClick={handleCloseRegisterAndLogin}>
            <HighlightOffOutlined/>
          </IconButton>

          <Grid sx={{textAlign: 'center', py: 2, px: 5}}>
            <Typography variant='h6' sx={{mt: 3}}>Welcome to Krib</Typography>
            <Typography variant='h6' sx={{fontWeight: 'bold', color: 'blue'}}>Become a member</Typography>
          </Grid>

          <Grid sx={{bgcolor: '#e3e3e3'}}>
            <Grid sx={{px: 4, py: 3}}>
              <Formik initialValues={{name: '', email: '', password: ''}} onSubmit={handleSubmit}>
                <Form>
                  <InputField name={'name'} placeholder="Username"/>
                  <InputField name={'email'} placeholder='Email Address'/>
                  <InputField name={'password'} placeholder="Password"/>

                  <Button type='submit' variant='contained' fullWidth sx={{py: 1.5, mt: 2, textTransform: 'capitalize'}}>Sign Up</Button>
                  
                  <Grid display='flex' flexDirection='row' alignItems='center' justifyContent='center' mt={3}>
                    <Typography sx={{fontSize: '13px', mr: 1}}>Have an account? </Typography>
                    <Typography variant='overline' sx={{textTransform: 'capitalize', cursor: 'pointer', color: 'blue'}} onClick={handleClose}>Sign In</Typography>
                  </Grid>
                </Form>
              </Formik>
            </Grid>
          </Grid>

      </Dialog>
    </div>
  );
}
