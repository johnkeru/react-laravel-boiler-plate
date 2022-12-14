import ReactPaginate from 'react-paginate';
import { useSelector, useDispatch } from 'react-redux';
import ListingEach from './ListingEach';
import React, {useState, useEffect} from 'react'
import { Grid } from '@mui/material';
import Loading from '../utils/Loading';
import { initialize_listings } from '../../store/reducers/listings_slice';
import ListingFiltering from './ListingFiltering';

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((listing) => (
            <ListingEach listing={listing} key={listing.mlsNumber}/>
        ))}
    </>
  );
}

export default function PaginationComponent({  }) {
    const [maxBeds, setMaxBeds] = useState()
    // const [basement, setBasement] = useState();
    const [den, setDen] = useState('');
    const [maxBaths, setMaxBaths] = useState()
    
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    
    useEffect(() => {
        setLoading(true);
        axios.get(`/api/listings?${maxBeds || ''}${maxBaths || ''}${den || ''}`).then(res => {
            console.log(res.data.data)
            dispatch(initialize_listings(res.data.listings));
            setLoading(false);
        })
    }, [maxBeds, den, maxBaths])

    const items = useSelector(root => root.listing.listings);

    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 5;
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        setItemOffset(newOffset);
    };

    return (
        <Grid width='70%'>
            <ListingFiltering setDen={setDen} setMaxBaths={setMaxBaths} setMaxBeds={setMaxBeds}/>
            <Grid display={'flex'} mx={2} flexDirection='row' flexWrap={'wrap'} width='100%'>
                {loading ? <Loading/> : <Items currentItems={currentItems} />}
            </Grid>
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
    );
}