import React from 'react';

export default function YoutubeItem(props) {
    return (
            <div className="youtube-item">
            <div className="youtube-img">
            <img alt="" src={props.image} />
            </div>
            <div className="youtube-info">
            <img className="youtube-info__avatar" alt="" src={props.avatar} />
            <div className="youtube-info__text">
                <h3 className="youtube-info__title">{props.title}</h3>
                <h4 className="youtube-info__author">{props.author}</h4>
            </div>
            </div>
        </div>
    )
}