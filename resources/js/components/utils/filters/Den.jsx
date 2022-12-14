import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {FormGroup, FormControlLabel, Checkbox} from '@mui/material';
import React, {useState} from 'react';

export default function Den({setValue}) {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [val, setVal] = useState();
  const [check1, setCheck1] = useState(true);
  const [check2, setCheck2] = useState(false);

  const borderColor = '1px solid #e3e3e3';
  const sx = {border: borderColor, borderRadius: '2px', ml: 2, px: 1, py: .5, color: '#333333', fontSize: '10px', textTransform: 'capitalize' }

  const handleSet = () => {
    setValue(
        check1 ? 
        'den=Condo Apartment&' : 
        'den=Stacked-Condo-Townhouse&');
    handleClose();
  }

  const handleCheck1 = (e) => {
    setCheck1(e.target.checked);
    setCheck2(false);
  }
  const handleCheck2 = (e) => {
    setCheck2(e.target.checked);
    setCheck1(false);
  }

  return (
    <>
    <Button variant="outlined" onClick={handleClickOpen} size="small" sx={sx}>Den</Button>

      <Dialog open={open} onClose={handleClose} 
       fullWidth={true}
       maxWidth={'xs'}
      >
        <DialogTitle>Den</DialogTitle>
        <DialogContent>
          
        <FormGroup>
            <FormControlLabel control={<Checkbox onChange={handleCheck1} checked={check1} />} label="Condo Apartment" />
            <FormControlLabel control={<Checkbox onChange={handleCheck2} checked={check2} />} label="Stacked-Condo-Townhouse" />
        </FormGroup>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSet}>Set</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
