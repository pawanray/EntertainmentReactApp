import HTTP from "../utiles/_HTTP";
import {apiKey} from '../utiles/config'
import {baseUrl} from '../utiles/config'

class MovieService{
    
    getAllTrending(page,sort_by){
        return HTTP.get(`${baseUrl}/trending/all/day`,{
            params:{
                api_key:apiKey,
                sort_by,
                page:page || 1
            }
        })
    }

    getAllDiscoverMovies(page,sort_by){
        return HTTP.get(`${baseUrl}/discover/movie`,{
            params:{
                api_key:apiKey,
                sort_by,
                page:page || 1
            }
        })
    }

    getAllDiscoverTvSeries(page,sort_by){
        return HTTP.get(`${baseUrl}/discover/tv`,{
            params:{
                api_key:apiKey,
                sort_by,
                page:page || 1
            }
        })
    }

    serachBy(page,type,query){
        return HTTP.get(`${baseUrl}/search/${type}`,{
            params:{
                api_key:apiKey,
                query,
                page:page || 1
            }
        })
    }
}

export default new MovieService();
