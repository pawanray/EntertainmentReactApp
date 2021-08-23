import React, { useEffect, useState, useContext } from 'react';
import PageTitle from '../../components/Layout/PageTitle';
import Card from '../../components/Ui/Card';
import Pagination from '../../components/Ui/Pagination';

import { SearchContext } from '../../Context/SearchContext';
import MovieService from '../../services/movies'
const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState();

    
    const serachContxt = useContext(SearchContext);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        fetchDiscoverMovies(page)
    }, [page])
    const fetchDiscoverMovies = (page) => {
        setIsLoading(true);
        MovieService.getAllDiscoverMovies(page).then(res => {
            setIsLoading(false);
            console.log(res.data)
            setTotalPages(res.data.total_pages);
            setMovies(res.data.results);
        }).catch(err => {
            setIsLoading(false);
            setMovies([])
        })
    }

    const SerachByMovies = (page, type, query) => {
        MovieService.serachBy(page, type, query).then(res => {
            console.log(res.data)
            setMovies(res.data.results)
        }).catch(err => console.log(err))
    }
    useEffect(() => {
        if(serachContxt){
            SerachByMovies(1, 'movie', serachContxt)
        }
        else{
        fetchDiscoverMovies(1)
        }
    }, [serachContxt])
    return (
        <>

            <div className='container'>
                <PageTitle title='Discover Movies' />
                <div className='card-container'>
                    {isLoading ? <img className='loader' src='/loader.svg' /> : (
                        movies.length > 0 ? movies.map(movie => <Card type="Movies" data={movie} />) : <h3 className='no-data'>No Data Avaliable</h3>
                    )}
                </div>
                <Pagination setPage={setPage} countOfPages={totalPages}/>
            </div>
        </>
    )
}

export default Movies