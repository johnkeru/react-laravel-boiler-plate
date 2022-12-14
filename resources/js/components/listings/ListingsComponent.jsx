import ReactPaginate from 'react-paginate';
import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';

import { initialize_listings } from '../../store/reducers/listings_slice';
import ListingFiltering from './ListingFiltering';
import ListingsAll from './ListingsAll';
import Loading from '../utils/Loading'

const ListingsComponent = () => {
    const [page, setPage] = useState(1);
    const [maxBeds, setMaxBeds] = useState()
    // const [basement, setBasement] = useState();
    const [den, setDen] = useState();
    const [maxBaths, setMaxBaths] = useState();

    const [loading, setLoading] = useState(false);
  
    const dispatch = useDispatch();
  
    // for pagination
    const items = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19, 20]; // fixed 20 pages
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 1;
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);
  
    const handlePageClick = (event) => {
        setPage(currentItems[0])
        const newOffset = (event.selected * itemsPerPage) % items.length;
        setItemOffset(newOffset);
    };
    useEffect(() => {
      setLoading(true);
      axios.get(`/api/listings?${'pageNum='+page+'&'}&${maxBeds || ''}${maxBaths || ''}${den || ''}`).then(res => {
        console.log(res.data.data)
        console.log(res.data.url)
        dispatch(initialize_listings(res.data.listings));
        setLoading(false);
      })
    }, [page, maxBeds, den, maxBaths])

    return (
      <Box>
        <ListingFiltering setDen={setDen} setMaxBaths={setMaxBaths} setMaxBeds={setMaxBeds}/>
        <Grid sx={{mx: 2}}>
          <Typography sx={{fontSize: '11px', mt: 1, fontWeight: 'bold'}}>
            Condos & Houses For Sale in Caledonia-Fairbanks, York, Toronto <span style={{color: '#c1c1c1'}}>・13 homes available on Dwelly</span>
          </Typography>

          {loading ? <Loading width='70%'/> : <ListingsAll/>}

        </Grid>

        <Grid width='70%'>
            <ReactPaginate
                previousLabel="< previous"
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageCount={pageCount}
                renderOnZeroPageCount={null}
                containerClassName="pagination"
                pageLinkClassName="page-num"
                previousLinkClassName="page-num"
                nextLinkClassName="page-num"
                activeLinkClassName="active"
            />
        </Grid>
      </Box>
    )
}

export default ListingsComponent