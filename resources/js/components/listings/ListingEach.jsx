import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import ListingImages from './ListingImages'

const ListingEach = ({listing}) => {
  const address = (addrss) => `${addrss.city}, ${addrss.state}, ${addrss.zip}`

    return (
      <Grid position='relative'>
        <Card sx={{ width: 275, my: 1, mr: 1 }} height={158} >
          <CardActionArea>
            
            <ListingImages images={listing.images} price={listing.listPrice}/>
            
            <CardContent>
              <Typography gutterBottom sx={{fontSize: '15px'}}>
                {address(listing.address)}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    )
}

export default ListingEach