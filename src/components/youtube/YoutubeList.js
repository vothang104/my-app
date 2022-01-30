import React from 'react';
import { youtubeData } from '../../youtubeData';
import YoutubeItem from './YoutubeItem';

export default function YoutubeList() {
    return (
        <div className="youtube-list">
    {
        youtubeData.length > 0 &&
        youtubeData.map(item => {
            return  <YoutubeItem
            key={item.id}
            image={item.thumbnail}
            avatar={item.avatar}
            title={item.title}
            author={item.author}
        ></YoutubeItem>
        })
    }
    </div>
    )
}
