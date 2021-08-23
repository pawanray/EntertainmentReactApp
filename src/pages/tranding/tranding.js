import React, { useEffect, useState } from 'react';
import PageTitle from '../../components/Layout/PageTitle';
import Card from '../../components/Ui/Card';
import Pagination from '../../components/Ui/Pagination';
import MovieService from '../../services/movies'
const Tranding = () => {
    const [tranding, setTranding] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState();
    useEffect(() => {
        fetchAllTranding(page)
    }, [page])
    const fetchAllTranding = (type, page) => {
        setIsLoading(true)
        MovieService.getAllTrending(type, page).then(res => {
            console.log(res.data)
            setIsLoading(false)
            setTranding(res.data.results)
            setTotalPages(res.data.total_pages);
        }).catch(err => {
            setTranding([])
            console.log(err);
            setIsLoading(false)
        })
    }
    return (
        <>
            <div className='container'>
                <PageTitle title='Trending All' />
                <div className='card-container'>
                    {isLoading ? <img className='loader' src='/loader.svg' /> : (
                        tranding.length > 0 ? tranding.map(allTranding => <Card data={allTranding} />) : <h3 className='no-data'>No Data Avaliable</h3>
                    )}

                </div>
                <Pagination setPage={setPage} countOfPages={totalPages}/>

            </div>
        </>
    )
}

export default Tranding