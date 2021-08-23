import React from 'react';
import { imgUrl } from '../../utiles/config'

export default function Card({ data, type }) {
    const { title, poster_path, original_language, vote_average, original_name, overview, release_date, media_type, first_air_date } = { ...data }
    return (
        <>
            {
                data && (<div className='card'>
                    <div className='card-body'>
                        <img style={{ height: !poster_path ? '445px' : '445px' }} src={`${poster_path ? `${imgUrl}${poster_path}` : '/noPoster.jpg'}`} className='img-fluid' />
                        <div className='card-content'>
                            <span className='vote-rating' style={{background:vote_average < 6 && "red"}}>{vote_average}</span>
                            <div className='title'>{title ? title : original_name}</div>
                            <div className='d-flex card-footer'>{type || media_type}<div className='ml-auto'>{first_air_date ? first_air_date : release_date}</div>
                            </div>
                        </div>
                    </div>
                </div>)
            }

        </>
    )
}