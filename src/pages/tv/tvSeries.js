import React, { useEffect, useState, useContext } from 'react';
import AppHeader from '../../components/Layout/header';
import PageTitle from '../../components/Layout/PageTitle';
import Card from '../../components/Ui/Card';
import Pagination from '../../components/Ui/Pagination';
import { SearchContext } from '../../Context/SearchContext';
import MovieService from '../../services/movies'
const TvSeries = () => {
    const [tvseries, setTvseries] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const serachContxt = useContext(SearchContext);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState();
    useEffect(() => {
        fetchAllTvSeries(page)
    }, [page])
    const fetchAllTvSeries = (type, page) => {
        setIsLoading(true);
        MovieService.getAllDiscoverTvSeries(type, page).then(res => {
            console.log(res.data)
            setTvseries(res.data.results)
            setIsLoading(false);
            setTotalPages(res.data.total_pages);
        }).catch(err => {
            setIsLoading(false);
            setTvseries([])
        })
    }

    const SerachByMovies = (page, type, query) => {
        MovieService.serachBy(page, type, query).then(res => {
            console.log(res.data)
            setTvseries(res.data.results)
        }).catch(err => console.log(err))
    }
    useEffect(() => {
        if(serachContxt){
            SerachByMovies(1, 'tv', serachContxt)
        }
        else{
            fetchAllTvSeries(1)
        }
    }, [serachContxt]);

    return (
        <>
            <div className='container'>
                <PageTitle title='Tv Series' />
                <div className='card-container'>
                    {isLoading ? <img className='loader' src='/loader.svg' /> : (
                        tvseries.length > 0 ? tvseries.map(tv => <Card type="Tv" data={tv} />) : <h3 className='no-data'>No Data Avaliable</h3>
                    )}
                </div>
                <Pagination setPage={setPage} countOfPages={totalPages}/>
            </div>
        </>
    )
}

export default TvSeries