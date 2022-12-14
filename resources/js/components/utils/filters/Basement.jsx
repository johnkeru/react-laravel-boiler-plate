import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {Box, Slider} from '@mui/material';
import React, {useState} from 'react';

export default function Basement({setValue}) {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [val, setVal] = useState();

  const handleSet = () => {
    setValue(`basement=${val}&`);
    handleClose();
}

  const borderColor = '1px solid #e3e3e3';
  const sx = {border: borderColor, borderRadius: '2px', ml: 2, px: 1, py: .5, color: '#333333', fontSize: '10px', textTransform: 'capitalize' }

  return (
    <>
    <Button variant="outlined" onClick={handleClickOpen} size="small" sx={sx}>Basement</Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Basement</DialogTitle>
        <DialogContent>
          
        <Box width={300} py={5}>
          <Slider
            defaultValue={1}
            aria-label="Default" 
            valueLabelDisplay="auto" 
            min={0}
            max={6}
            onChange={val => setVal(val.target.value)}
           />
        </Box>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSet}>Set</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
