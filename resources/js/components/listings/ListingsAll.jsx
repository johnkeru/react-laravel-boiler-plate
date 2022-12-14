import { Grid } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux'

import ListingEach from './ListingEach'

const ListingsAll = () => {

    const listings = useSelector(root => root.listing.listings);

    return (
      <Grid>
          <Grid display={'flex'} flexDirection='row' flexWrap={'wrap'} width='70%'>
            {listings.map(listing => <ListingEach listing={listing} key={listing.mlsNumber}/>)}
          </Grid>
      </Grid>
    )
}

export default ListingsAll