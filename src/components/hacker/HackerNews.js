import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import lodash from 'lodash';


function HackerNews() {
    const [hits, setHits] = useState([]);
    const [query, setQuery] = useState('react');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    const handleFetchDataRef = useRef();
    handleFetchDataRef.current = (search) => {
        return axios.get(`https://hn.algolia.com/api/v1/search?query=${search}`)
    }
    const handleUpdateQuery = lodash.debounce((e) => {
        setQuery(e.target.value);
    }, 500)
    useEffect(() => {
        handleFetchDataRef.current(query)
            .then(resp => {
                return resp.data?.hits;
            })
            .then(data => {
                setHits(data);
                setIsLoading(false);
            })
            .catch(err => {
                setError('error happend ', err);
                setIsLoading(false);
            })
    }, [query])
    return (
        <div>
            <input
                defaultValue={query}
                onChange={handleUpdateQuery}
                className='border border-[#000]'
            />
            {
                isLoading ?
                    <div className='m-4 w-8 h-8 border-4 border-blue-700 rounded-full border-r-transparent animate-spin'></div> :
                    <ul>
                        {
                            hits.length > 0 &&
                            hits.map((hit, index) => <li key={hit.objectID}>{`${index + 1} ${hit.title}`}</li>)
                        }
                    </ul>

            }
            {
                error && <p>{error}</p>
            }
        </div>
    )
}

export default HackerNews;
