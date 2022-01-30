import React from 'react';
import styled, { css } from 'styled-components';

const StyledCard = styled.div`
    position: relative;
    width: 33.33333%;
    height: 400px;
    padding: 0 20px;
    margin-bottom: 100px;
`;
const StyledImgWrapper = styled.div`
    width: 100%;
    height: 100%;
`;
const StyledImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
`;
const StyledAbsolute = styled.div`
    position: absolute;
    z-index: 5;
    left: 50%;
    bottom: 0;
    width: 95%;
    transform: translate(-50%, 50%);
    border-radius: 20px;
    background: #fff;
    padding: 20px;
    ${props => props.secondary && css`
        background-color: aqua;
    `}
`;
const StyledTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const StyledTopLeft = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const StyleTopLeftImg = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 5px;
`;
const StyledTopLeftAuthor = styled.span`
    font-size: 14px;
    color: #ccc;
`;
const StyleTopLeftLiked = styled.div`
    flex-basis: 12%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    font-weight: 550;
`;
const StyledBottom = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
`;
const StyledBottomTitle = styled.h3`
    color: #000;
    font-size: 20px;
    font-weight: 400;
`;
const StyledBottomTotal = styled.span`
    font-size: 18px;
    font-weight: 550;
    color: transparent;
    background: linear-gradient(86.88deg, #7D6AFF 1.38%, #FFB86C 64.35%, #FC2872 191.91%);
    -webkit-background-clip: text;
    background-clip: text;
    ${props => props.secondary && css`
        background-image: linear-gradient(to right, tomato, orange);
    `};
`;

export default function Card({ secondary }) {
    console.log(secondary);
    return (
        <StyledCard>
            <StyledImgWrapper>
                <StyledImg alt=''
                    src='https://images.unsplash.com/photo-1536329583941-14287ec6fc4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60' />
            </StyledImgWrapper>
            <StyledAbsolute>
                <StyledTop>
                    <StyledTopLeft>
                        <StyleTopLeftImg alt=''
                            src='https://images.unsplash.com/photo-1536329583941-14287ec6fc4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60' />
                        <StyledTopLeftAuthor>@zndrson</StyledTopLeftAuthor>
                    </StyledTopLeft>
                    <StyleTopLeftLiked>
                        <img alt='heart' src='/icon-heart.svg' />
                        <span>256</span>
                    </StyleTopLeftLiked>
                </StyledTop>

                <StyledBottom>
                    <StyledBottomTitle>Cosmic Perspective</StyledBottomTitle>
                    <StyledBottomTotal secondary={secondary}>12,000 PSL</StyledBottomTotal>
                </StyledBottom>
            </StyledAbsolute>
        </StyledCard>
    )
}
