import React from 'react'
import { Grid, Skeleton } from '@mui/material'

const Loading = ({width = '100%'}) => {
  return (
    <Grid display={'flex'} flexDirection='row' flexWrap={'wrap'} width={width}>
        {
            [1,2,3,4,5, 6, 7, 8, 9].map(k => (
                <Skeleton key={k} variant="rectangular" width={'30%'} height={208} sx={{my: 1, mr: 1}} />
            ))
        }
    </Grid>
  )
}

export default Loading