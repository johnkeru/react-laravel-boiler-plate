import { Grid, IconButton, Typography } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import { Formik, Form } from 'formik';
import React, { useState } from 'react';
import InputField from '../utils/InputField';
import {HighlightOffOutlined} from '@mui/icons-material';
import {Button} from '@mui/material'
import RegisterDialog from './RegisterDialog'

export default function AuthDialog() {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (values) => {
    console.log(values)
  }

  return (
    <div>
      <Typography variant='overline' sx={{textTransform: 'capitalize', cursor: 'pointer'}} onClick={handleClickOpen}>Sign in</Typography>
      
      <Dialog open={open} 
        onClose={handleClose}
        fullWidth={true}
        maxWidth={'xs'}
      >
          <IconButton sx={{position: 'absolute', top: 1, right: 1}} onClick={handleClose}>
            <HighlightOffOutlined/>
          </IconButton>

          <Grid sx={{textAlign: 'center', py: 2, px: 5}}>
            <Typography variant='h6' sx={{mt: 3}}>Welcome to Krib</Typography>
            <Typography variant='h6' sx={{fontWeight: 'bold', color: 'blue'}}>Sign In to continue</Typography>
          </Grid>

          <Grid sx={{bgcolor: '#e3e3e3'}}>
            <Grid sx={{px: 4, py: 3}}>
              <Formik initialValues={{email: '', password: ''}} onSubmit={handleSubmit}>
                <Form>
                  <InputField name={'email'} placeholder='Email Address'/>
                  <InputField name={'password'} placeholder="Password"/>

                  <Button type='submit' variant='contained' fullWidth sx={{py: 1.5, mt: 2, textTransform: 'capitalize'}}>Login</Button>
                  <Grid display='flex' flexDirection='row' alignItems='center' justifyContent='center' mt={3}>
                    <Typography sx={{fontSize: '13px', mr: 1}}>New to Krib? </Typography>
                    <RegisterDialog handleCloseAll={handleClose}/>
                  </Grid>
                </Form>
              </Formik>
            </Grid>
          </Grid>

      </Dialog>
    </div>
  );
}
