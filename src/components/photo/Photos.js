import React, { useEffect, useState } from 'react';
import axios from 'axios';

const getPhotos = async (page, limit) => {
    return await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
}

export default function Photos() {
    const [page, setPage] = useState(1);
    const [photos, setPhotos] = useState([]);
    useEffect(() => {
        getPhotos(page, 3)
            .then(async (resp) => {
                const data = await resp.data;
                return data;
            })
            .then(data => {
                setPhotos(prev => [...prev, ...data]);
            })
            .catch(err => console.log(err))
    }, [page])

    // function loadmore
    const handleLoadmore = () => {
        setPage(prev => prev + 1);
    }
    return (
        <div>
            <div className='flex flex-wrap -mx-2'>
                {
                    photos.length > 0 &&
                    photos.map(photo => (
                        <div className='mb-4 px-2 w-[33.33333%] h-[300px]' key={photo.id}>
                            <img className='w-full h-full object-cover' alt='' src={photo.download_url} />
                        </div>
                    ))
                }
            </div>
            <div className='text-center'>
                <button
                    onClick={handleLoadmore}
                    className='rounded-md bg-[blue] text-[#fff] font-[14px] font-[550] px-2'
                >Load more</button>
            </div>
        </div>
    )
}
