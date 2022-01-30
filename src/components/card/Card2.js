import React from 'react';
import styled, { css } from 'styled-components';

const StyledCard = styled.div`
    position: relative;
    width: 33.33333%;
    height: 400px;
    padding: 0 20px;
    margin-bottom: 100px;
    .card__img-wrapper {
        width: 100%;
        height: 100%;
    }
    .card__img {
        width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    }
    .card__absolute {
        position: absolute;
        z-index: 5;
        left: 50%;
        bottom: 0;
        width: 85%;
        transform: translate(-50%, 50%);
        border-radius: 20px;
        background: #fff;
        padding: 20px;
        ${props => props.secondary && css`
            background-color: aqua;
        `}
        .card__absolute-top {
            display: flex;
            justify-content: space-between;
            align-items: center;
            .card__absolute-top__left {
                display: flex;
                justify-content: space-between;
                align-items: center;
                img {
                    width: 30px;
                    height: 30px;
                    border-radius: 50%;
                    object-fit: cover;
                    margin-right: 5px;
                }
                .card__absolute-top__left-author {
                    font-size: 14px;
                    color: ${props => props.theme.gray}
                }               
            }
            .card__absolute-top__liked {
                    flex-basis: 12%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    font-size: 14px;
                    font-weight: 550;
                }
        }
    }
    .card__bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 10px;
        .card__botom-title {
            color: #000;
            font-size: 20px;
            font-weight: 400;
        }
        .card__bottom-amout {
            font-size: 18px;
            font-weight: 550;
            color: transparent;
            background: linear-gradient(86.88deg, #7D6AFF 1.38%, #FFB86C 64.35%, #FC2872 191.91%);
            -webkit-background-clip: text;
            background-clip: text;
            ${props => props.secondary && css`
                background-image: linear-gradient(to right, tomato, orange);
            `};
        }
    }
`;


export default function Card({ secondary }) {
    return (
        <StyledCard secondary={secondary}>
            <div className='card__img-wrapper'>
                <img className='card__img' alt=''
                    src='https://images.unsplash.com/photo-1536329583941-14287ec6fc4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60' />
            </div>
            <div className='card__absolute'>
                <div className='card__absolute-top'>
                    <div className='card__absolute-top__left'>
                        <img alt=''
                            src='https://images.unsplash.com/photo-1536329583941-14287ec6fc4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60' />
                        <span className='card__absolute-top__left-author'>@zndrson</span>
                    </div>
                    <div className='card__absolute-top__liked'>
                        <img alt='heart' src='/icon-heart.svg' />
                        <span>256</span>
                    </div>
                </div>

                <div className='card__bottom'>
                    <h3 className='card__botom-title'>Cosmic Perspective</h3>
                    <span className='card__bottom-amout'>12,000 PSL</span>
                </div>
            </div>
        </StyledCard>
    )
}
