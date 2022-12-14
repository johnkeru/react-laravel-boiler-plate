import { NotificationsNoneRounded } from '@mui/icons-material';
import { Button, Grid, Typography } from '@mui/material';
import { teal } from '@mui/material/colors';

import React from 'react';

import Bedrooms from '../utils/filters/Bedrooms';
// import Basement from '../utils/filters/Basement';
import Bath from '../utils/filters/Bath';
import Den from '../utils/filters/Den';

const ListingFiltering = ({setMaxBeds, setDen, setMaxBaths}) => {

  const borderColor = '1px solid #e3e3e3';

  return (
      <Grid container direction={'row'} alignItems={'center'} sx={{borderTop: borderColor, borderBottom: borderColor}}>

        <Grid flex flexDirection="row" sx={{p: 1, borderRight: borderColor}} >
            <Grid sx={{p: 1}}>
              <Typography variant="overline" gutterBottom sx={{mr: 2, fontSize: '11px'}}>
                Listings
              </Typography> 
              <Typography variant="overline" gutterBottom sx={{fontSize: '11px'}}>
                Buildings
              </Typography>
            </Grid>
        </Grid>
        
        <Grid flex flexDirection="row" >
          <Bedrooms setValue={setMaxBeds}/>
          {/* <Basement setValue={setBasement}/> */}
          <Den setValue={setDen}/>
          <Bath setValue={setMaxBaths}/>
          
          <Button variant="contained" size="small" startIcon={<NotificationsNoneRounded />} sx={{fontSize: '12px', ml: 2, textTransform: 'capitalize', background: teal[500], ":hover": {background: teal[600]}}}>Save Search</Button>
        </Grid>
      </Grid>
  )
}

export default ListingFiltering